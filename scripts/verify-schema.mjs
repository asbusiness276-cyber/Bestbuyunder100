/**
 * Post-build guard: fails if FAQPage JSON-LD appears anywhere in dist/.
 */
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

function walkFiles(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      walkFiles(full, files);
    } else {
      files.push(full);
    }
  }
  return files;
}

if (!statSync(dist, { throwIfNoEntry: false })) {
  console.error('verify-schema FAILED: dist/ not found — run vite build first');
  process.exit(1);
}

const hits = [];
for (const file of walkFiles(dist)) {
  const content = readFileSync(file, 'utf8');
  if (content.includes('FAQPage')) {
    hits.push(file.replace(root, '').replace(/\\/g, '/'));
  }
}

if (hits.length) {
  console.error('verify-schema FAILED: FAQPage found in:\n' + hits.map((f) => `  - ${f}`).join('\n'));
  process.exit(1);
}

console.log('verify-schema OK (0 FAQPage in dist/)');
