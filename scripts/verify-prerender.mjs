/**
 * Post-prerender build guard: fails if crawlable HTML leaks into #root
 * or #seo-static is missing crawler-only hiding.
 */
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

function walkHtmlFiles(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      walkHtmlFiles(full, files);
    } else if (name === 'index.html') {
      files.push(full);
    }
  }
  return files;
}

function extractTagInner(html, id) {
  const open = new RegExp(`<div[^>]*\\bid=["']${id}["'][^>]*>`, 'i');
  const match = open.exec(html);
  if (!match) return { found: false, inner: '', openTag: '' };

  const start = match.index + match[0].length;
  let depth = 1;
  let i = start;
  while (i < html.length && depth > 0) {
    const nextOpen = html.indexOf('<div', i);
    const nextClose = html.indexOf('</div>', i);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      i = nextOpen + 4;
    } else {
      depth -= 1;
      if (depth === 0) {
        return { found: true, inner: html.slice(start, nextClose), openTag: match[0] };
      }
      i = nextClose + 6;
    }
  }
  return { found: true, inner: html.slice(start), openTag: match[0] };
}

const htmlFiles = walkHtmlFiles(dist);
const errors = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const rel = file.replace(dist, '').replace(/\\/g, '/') || '/index.html';

  if (html.includes('</html>') && html.indexOf('</html>') !== html.lastIndexOf('</html>')) {
    errors.push(`${rel}: duplicate </html> (corrupt template)`);
  }

  const rootTag = extractTagInner(html, 'root');
  if (!rootTag.found) {
    errors.push(`${rel}: missing #root`);
    continue;
  }
  if (rootTag.inner.replace(/\s+/g, '').length > 0) {
    errors.push(`${rel}: #root must be empty (found ${rootTag.inner.trim().length} chars of content)`);
  }

  const seoTag = extractTagInner(html, 'seo-static');
  if (!seoTag.found) {
    errors.push(`${rel}: missing #seo-static`);
    continue;
  }
  if (!seoTag.openTag.includes('seo-crawler-only')) {
    errors.push(`${rel}: #seo-static missing seo-crawler-only class`);
  }
  if (!html.includes('class="seo-prerender"')) {
    errors.push(`${rel}: missing .seo-prerender article in #seo-static`);
  }

  if (/body:not\(\.app-ready\)\s*\{[^}]*overflow\s*:\s*hidden/i.test(html)) {
    errors.push(`${rel}: body overflow:hidden blocks mobile scroll — use #root visibility instead`);
  }
  if (!/pointer-events\s*:\s*none/i.test(html)) {
    errors.push(`${rel}: missing pointer-events:none on crawler-only SEO block`);
  }
}

if (errors.length) {
  console.error('verify-prerender FAILED:\n' + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}

console.log(`verify-prerender OK (${htmlFiles.length} index.html files)`);
