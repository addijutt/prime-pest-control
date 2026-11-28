// Render a social post template to PNG with headless Chrome.
// node scripts/render-social.mjs social/before-after.html social/out/pigeon-feed.png 1080 1350 "v=2&price=1"
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const [, , html, out, w = '1080', h = '1350', extra = ''] = process.argv;
if (!html || !out) {
  console.error('Usage: node scripts/render-social.mjs <template.html> <out.png> [width] [height] [extra query]');
  process.exit(1);
}
const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const url = `${pathToFileURL(path.resolve(html)).href}?w=${w}&h=${h}${extra ? `&${extra}` : ''}`;
execFileSync(chrome, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--allow-file-access-from-files',
  '--force-device-scale-factor=1',
  `--window-size=${w},${h}`,
  '--virtual-time-budget=8000',
  `--screenshot=${path.resolve(out)}`,
  url,
], { stdio: 'ignore' });
console.log('wrote', out);
