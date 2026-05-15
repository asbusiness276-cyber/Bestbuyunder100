/**
 * Generates PNG + ICO favicons from public/favicon.svg (run after editing the SVG).
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');
const svg = readFileSync(join(publicDir, 'favicon.svg'));

async function png(size) {
  return sharp(svg).resize(size, size).png().toBuffer();
}

const sizes = [
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
];

for (const { name, size } of sizes) {
  const buf = await png(size);
  writeFileSync(join(publicDir, name), buf);
  console.log(`Wrote public/${name}`);
}

const ico = await pngToIco(await png(48));
writeFileSync(join(publicDir, 'favicon.ico'), ico);
console.log('Wrote public/favicon.ico');
