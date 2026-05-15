/**
 * Static HTML prerender for Vercel/Bing (no Puppeteer).
 * Run after vite build; writes dist/{route}/index.html with crawlable content in #root.
 */
import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const seoPath = join(root, 'scripts', '.seo-pages.json');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function upsertMeta(html, attr, key, content) {
  const re = new RegExp(`<meta ${attr}="${key}" content="[^"]*"\\s*/?>`, 'i');
  const tag = `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace('</head>', `    ${tag}\n  </head>`);
}

function upsertLink(html, rel, href) {
  const re = new RegExp(`<link rel="${rel}" href="[^"]*"\\s*/?>`, 'i');
  const tag = `<link rel="${rel}" href="${escapeHtml(href)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace('</head>', `    ${tag}\n  </head>`);
}

function buildCrawlableBody(page) {
  const parts = [
    `<article class="seo-prerender">`,
    `<header><h1>${escapeHtml(page.h1)}</h1></header>`,
  ];

  if (page.introHeading) {
    parts.push(`<h2>${escapeHtml(page.introHeading)}</h2>`);
  }
  for (const para of page.introParagraphs ?? []) {
    parts.push(`<p>${escapeHtml(para)}</p>`);
  }

  if (page.products?.length) {
    parts.push('<h2>Top picks</h2><ul>');
    for (const p of page.products.slice(0, 15)) {
      parts.push(
        `<li><a href="${escapeHtml(p.url)}" rel="nofollow sponsored">${escapeHtml(p.title)}</a> — $${p.price}</li>`
      );
    }
    parts.push('</ul>');
  }

  if (page.faqs?.length) {
    parts.push('<h2>Frequently asked questions</h2>');
    for (const f of page.faqs) {
      parts.push(`<h3>${escapeHtml(f.q)}</h3><p>${escapeHtml(f.a)}</p>`);
    }
  }

  parts.push(
    `<footer><p>Written by <a href="https://in.linkedin.com/in/navjeet-kamboj">Navjeet Kamboj</a>. <a href="https://bestbuyunder100.com/about/">About BestBuyUnder100</a></p></footer>`,
    `</article>`
  );

  return parts.join('\n');
}

function buildHtml(baseHtml, page) {
  let html = baseHtml;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`);
  html = upsertMeta(html, 'name', 'description', page.description);
  html = upsertMeta(html, 'property', 'og:title', page.title);
  html = upsertMeta(html, 'property', 'og:description', page.description);
  html = upsertMeta(html, 'property', 'og:image', page.ogImage);
  html = upsertMeta(html, 'property', 'og:url', page.canonical);
  html = upsertMeta(html, 'property', 'og:type', page.ogType);
  html = upsertMeta(html, 'name', 'twitter:title', page.title);
  html = upsertMeta(html, 'name', 'twitter:description', page.description);
  html = upsertLink(html, 'canonical', page.canonical);

  if (page.jsonLd?.length) {
    const scripts = page.jsonLd
      .map(
        (obj) =>
          `    <script type="application/ld+json" data-bbu100-prerender="true">${JSON.stringify(obj)}</script>`
      )
      .join('\n');
    html = html.replace('</head>', `${scripts}\n  </head>`);
  }

  const body = buildCrawlableBody(page);
  html = html.replace(/<div id="root">\s*<\/div>/i, `<div id="root">${body}</div>`);

  return html;
}

const baseHtml = readFileSync(join(dist, 'index.html'), 'utf8');
const pages = JSON.parse(readFileSync(seoPath, 'utf8'));

for (const page of pages) {
  const html = buildHtml(baseHtml, page);
  const outDir =
    page.route === '/' ? dist : join(dist, page.route.replace(/^\/+|\/+$/g, ''));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf8');
  console.log(`Static prerender: ${page.route}`);
}

console.log(`Static prerender complete (${pages.length} routes).`);
