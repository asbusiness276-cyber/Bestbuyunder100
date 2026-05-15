/** @deprecated Use scripts/prerender-static.mjs (no Puppeteer). Kept for reference only. */
import { createServer } from 'http';
import { mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import handler from 'serve-handler';
import puppeteer from 'puppeteer';
import { PRERENDER_ROUTES } from './site-routes.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
if (process.env.SKIP_PRERENDER === '1') {
  console.log('SKIP_PRERENDER=1 — skipping prerender.');
  process.exit(0);
}

const server = createServer((req, res) =>
  handler(req, res, {
    public: dist,
    rewrites: [{ source: '**', destination: '/index.html' }],
  })
);

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const port = server.address().port;
const baseUrl = `http://127.0.0.1:${port}`;
console.log(`Prerender server listening on ${baseUrl}`);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  for (const route of PRERENDER_ROUTES) {
    const url = route === '/' ? `${baseUrl}/` : `${baseUrl}${route}`;
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
    await page.waitForFunction(
      () => {
        const root = document.querySelector('#root');
        return root && root.children.length > 0 && Boolean(document.querySelector('h1'));
      },
      { timeout: 60000 }
    );

    const html = await page.content();
    await page.close();

    const outDir =
      route === '/' ? dist : join(dist, route.replace(/^\/+|\/+$/g, ''));
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), html, 'utf8');
    console.log(`Prerendered ${route}`);
  }
} finally {
  await browser.close();
  server.close();
}

console.log(`Prerendered ${PRERENDER_ROUTES.length} routes.`);
