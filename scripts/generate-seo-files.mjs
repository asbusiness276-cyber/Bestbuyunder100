import { writeFileSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { SITE, PRERENDER_ROUTES, ARTICLE_SLUGS, GUIDE_LABELS } from './site-routes.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');

const lastmod = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PRERENDER_ROUTES.map((route) => {
  const loc = route === '/' ? SITE + '/' : `${SITE}${route}`;
  const priority = route === '/' ? '1.0' : route.includes('contact') || route.includes('privacy') ? '0.4' : '0.8';
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>
`;

writeFileSync(join(publicDir, 'sitemap.xml'), sitemap, 'utf8');

const llms = `# BestBuyUnder100

> Budget-focused product buying guides researched and written by Navjeet Kamboj.

## Guides

${ARTICLE_SLUGS.map((slug) => `- [${GUIDE_LABELS[slug]}](${SITE}/${slug}/)`).join('\n')}

## About

- [About us](${SITE}/about/)
- [Contact](${SITE}/contact/)
- [Affiliate disclosure](${SITE}/affiliate-disclosure/)

## Author

- Navjeet Kamboj — https://in.linkedin.com/in/navjeet-kamboj
- Instagram — https://www.instagram.com/jeet_7.7/
`;

writeFileSync(join(publicDir, 'llms.txt'), llms, 'utf8');

const indexPath = join(root, 'index.html');
let indexHtml = readFileSync(indexPath, 'utf8');

const noscriptBody = `<noscript>
    <div style="max-width:48rem;margin:2rem auto;padding:1rem;font-family:system-ui,sans-serif;line-height:1.5">
      <h1>BestBuyUnder100 — Budget Buying Guides</h1>
      <p>JavaScript is required for the full experience. Our main buying guides:</p>
      <ul>
${ARTICLE_SLUGS.map(
  (slug) => `        <li><a href="/${slug}/">${GUIDE_LABELS[slug]}</a></li>`
).join('\n')}
      </ul>
      <p>Written by Navjeet Kamboj · <a href="/about/">About</a> · <a href="/contact/">Contact</a></p>
    </div>
  </noscript>`;

if (indexHtml.includes('<!-- SEO-NOSCRIPT -->')) {
  indexHtml = indexHtml.replace(
    /<!-- SEO-NOSCRIPT -->[\s\S]*?<!-- \/SEO-NOSCRIPT -->/,
    `<!-- SEO-NOSCRIPT -->\n    ${noscriptBody}\n    <!-- /SEO-NOSCRIPT -->`
  );
} else if (!indexHtml.includes('SEO-NOSCRIPT')) {
  indexHtml = indexHtml.replace(
    '<div id="root"></div>',
    `<!-- SEO-NOSCRIPT -->\n    ${noscriptBody}\n    <!-- /SEO-NOSCRIPT -->\n    <div id="root"></div>`
  );
}

writeFileSync(indexPath, indexHtml, 'utf8');
console.log('Generated public/sitemap.xml, public/llms.txt, and index.html noscript fallback.');
