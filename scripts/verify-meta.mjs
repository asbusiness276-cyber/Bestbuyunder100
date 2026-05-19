/**
 * Post-prerender SEO guard: validates critical meta/link tags in final dist HTML.
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

function routeFromFile(file) {
  const rel = file.replace(dist, '').replace(/\\/g, '/');
  if (rel === '/index.html') return '/';
  return rel.replace(/\/index\.html$/, '/');
}

function requireIncludes(errors, route, html, needle, label) {
  if (!html.includes(needle)) {
    errors.push(`${route}: missing ${label}`);
  }
}

if (!statSync(dist, { throwIfNoEntry: false })) {
  console.error('verify-meta FAILED: dist/ not found - run npm run build first');
  process.exit(1);
}

const errors = [];
const htmlFiles = walkHtmlFiles(dist);

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const route = routeFromFile(file);
  const isArticle = ![
    '/',
    '/about/',
    '/contact/',
    '/write-for-us/',
    '/privacy-policy/',
    '/terms-and-conditions/',
    '/affiliate-disclosure/',
  ].includes(route);

  requireIncludes(
    errors,
    route,
    html,
    '<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"',
    'robots max-snippet meta'
  );
  requireIncludes(errors, route, html, '<meta name="theme-color" content="#059669"', 'theme-color meta');
  requireIncludes(errors, route, html, '<meta property="og:site_name" content="BestBuyUnder100"', 'og:site_name');
  requireIncludes(errors, route, html, '<meta name="twitter:image"', 'twitter:image');
  requireIncludes(errors, route, html, '<link rel="alternate" hreflang="en"', 'self hreflang en');
  requireIncludes(errors, route, html, '<link rel="alternate" hreflang="x-default"', 'self hreflang x-default');

  if (html.includes('BING_VERIFICATION_PLACEHOLDER') || html.includes('msvalidate.01')) {
    errors.push(`${route}: Bing placeholder verification tag must be removed`);
  }

  if (isArticle) {
    requireIncludes(errors, route, html, '<meta property="article:published_time"', 'article published_time');
    requireIncludes(errors, route, html, '<meta property="article:modified_time"', 'article modified_time');
  }
}

if (errors.length) {
  console.error('verify-meta FAILED:\n' + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}

console.log(`verify-meta OK (${htmlFiles.length} index.html files)`);
