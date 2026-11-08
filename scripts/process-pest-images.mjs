// Download pest PNGs from Canva and convert to WebP at 3 sizes
// BFS flood-fill removes dark backgrounds from AI-generated designs
import https from 'https';
import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PESTS_DIR = join(__dirname, '../public/assets/img/pests');

const pests = [
  {
    key: 'arabian-fat-tailed-scorpion',
    url: 'https://export-download.canva.com/jU5oI/DAHaWmjU5oI/-1/0/0001-2138605483358547245.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH4R7NKVBA%2F20261108%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261108T030120Z&X-Amz-Expires=64559&X-Amz-Signature=96c3bb90f74ea5964e50e51f88a37b4470ce3cc81d69ddf30b2527eb51cdd7f5&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Sun%2C%2008%20Nov%202026%2020%3A57%3A19%20GMT'
  },
  {
    key: 'deathstalker-scorpion',
    url: 'https://export-download.canva.com/x72P0/DAHaWtx72P0/-1/0/0001-8883871828043146989.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH4R7NKVBA%2F20261108%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261108T150832Z&X-Amz-Expires=21248&X-Amz-Signature=c3e5732476295459a6f5a4e370e35000332b17692d818cce5fe2361c7ac1ae01&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Sun%2C%2008%20Nov%202026%2021%3A02%3A40%20GMT'
  },
  {
    key: 'yellow-scorpion',
    url: 'https://export-download.canva.com/f9lWs/DAHaWvf9lWs/-1/0/0001-148014449303342673.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH4R7NKVBA%2F20261108%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261108T100909Z&X-Amz-Expires=36358&X-Amz-Signature=dc868a48c05c4f76de3dacfa57e455d19968a293fec213c875e2e9c4d7942e3b&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Sun%2C%2008%20Nov%202026%2020%3A15%3A07%20GMT'
  },
  {
    key: 'black-scorpion',
    url: 'https://export-download.canva.com/Jmjic/DAHaWtJmjic/-1/0/0001-2948127519071864944.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH4R7NKVBA%2F20261107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261107T194604Z&X-Amz-Expires=88286&X-Amz-Signature=1257c7de2a291182df0bd3ee527f0b2fd8130177c767fa4e78474a22d45f7394&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Sun%2C%2008%20Nov%202026%2020%3A17%3A30%20GMT'
  },
  {
    key: 'drain-fly',
    url: 'https://export-download.canva.com/nv2HI/DAHaWhnv2HI/-1/0/0001-6311190538389292194.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH4R7NKVBA%2F20261108%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261108T152127Z&X-Amz-Expires=17270&X-Amz-Signature=2ecc50b1852104c5e86cf973e7efa7df754736c741aad0edac4a089829325cf2&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Sun%2C%2008%20Nov%202026%2020%3A09%3A17%20GMT'
  },
  {
    key: 'carpet-beetle',
    url: 'https://export-download.canva.com/MJqk0/DAHaWkMJqk0/-1/0/0001-1078007772914140842.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH4R7NKVBA%2F20261107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261107T225156Z&X-Amz-Expires=76269&X-Amz-Signature=79f09d2580c016882e627e6949d0a244fe4873f48112a06985661d8607e842eb&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Sun%2C%2008%20Nov%202026%2020%3A03%3A05%20GMT'
  }
];

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadBuffer(res.headers.location).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url.slice(0, 80)}`));
        return;
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

// BFS flood-fill background removal. Seeds from all border pixels.
async function ensureTransparent(buf) {
  const meta = await sharp(buf).metadata();
  if (meta.hasAlpha) {
    console.log('    Has alpha channel — checking if background still opaque');
    // Even with alpha, the design background may have been composited in as opaque
    // Check if border pixels are non-transparent (indicating background still present)
    const { data, info } = await sharp(buf).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
    const { width, height } = info;
    // Sample corner alpha values
    const corners = [
      data[(0 * width + 0) * 4 + 3],
      data[(0 * width + (width-1)) * 4 + 3],
      data[((height-1) * width + 0) * 4 + 3],
      data[((height-1) * width + (width-1)) * 4 + 3],
    ];
    const avgCornerAlpha = corners.reduce((a, b) => a + b, 0) / 4;
    if (avgCornerAlpha < 10) {
      console.log('    Corners are transparent — image already clean');
      return buf;
    }
    console.log(`    Corner alpha=${avgCornerAlpha.toFixed(0)} — removing opaque background via flood fill`);
    return floodFillRemove(buf, true);
  }
  return floodFillRemove(buf, false);
}

async function floodFillRemove(buf, hasAlpha) {
  const { data, info } = await sharp(buf).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const channels = 4;

  const pts = [
    [0,0],[width-1,0],[0,height-1],[width-1,height-1],
    [Math.floor(width/2),0],[Math.floor(width/2),height-1],
    [0,Math.floor(height/2)],[width-1,Math.floor(height/2)],
  ];
  let rS=0, gS=0, bS=0;
  for (const [x,y] of pts) {
    const i = (y*width+x)*channels;
    rS+=data[i]; gS+=data[i+1]; bS+=data[i+2];
  }
  const bgR=Math.round(rS/pts.length), bgG=Math.round(gS/pts.length), bgB=Math.round(bS/pts.length);
  console.log(`    Detected background: rgb(${bgR},${bgG},${bgB}) — removing via flood fill`);

  const THRESHOLD = 50;
  function dist(x, y) {
    const i = (y*width+x)*channels;
    return Math.sqrt((data[i]-bgR)**2 + (data[i+1]-bgG)**2 + (data[i+2]-bgB)**2);
  }

  const visited = new Uint8Array(width*height);
  const isBg = new Uint8Array(width*height);
  const queue = [];
  let qi = 0;

  function seed(x, y) {
    const idx = y*width+x;
    if (visited[idx]) return;
    visited[idx] = 1;
    if (dist(x, y) < THRESHOLD) { isBg[idx] = 1; queue.push(x, y); }
  }

  for (let x=0; x<width; x++) { seed(x,0); seed(x,height-1); }
  for (let y=0; y<height; y++) { seed(0,y); seed(width-1,y); }

  while (qi < queue.length) {
    const cx = queue[qi++], cy = queue[qi++];
    for (const [dx,dy] of [[-1,0],[1,0],[0,-1],[0,1]]) {
      const nx=cx+dx, ny=cy+dy;
      if (nx<0||nx>=width||ny<0||ny>=height) continue;
      const ni=ny*width+nx;
      if (visited[ni]) continue;
      visited[ni]=1;
      if (dist(nx,ny)<THRESHOLD) { isBg[ni]=1; queue.push(nx,ny); }
    }
  }

  const rgba = Buffer.alloc(width*height*4);
  for (let i=0; i<width*height; i++) {
    const s=i*channels, d=i*4;
    rgba[d]=data[s]; rgba[d+1]=data[s+1]; rgba[d+2]=data[s+2];
    rgba[d+3] = isBg[i] ? 0 : 255;
  }

  return sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();
}

async function processPest(key, url) {
  console.log(`\nDownloading ${key}...`);
  let buf = await downloadBuffer(url);
  const meta = await sharp(buf).metadata();
  console.log(`  Downloaded: ${meta.width}x${meta.height}px, channels: ${meta.channels}, hasAlpha: ${meta.hasAlpha}`);

  buf = await ensureTransparent(buf);

  const sizes = [
    { suffix: '',   px: 300 },
    { suffix: '-d', px: 150 },
    { suffix: '-m', px: 100 },
  ];

  for (const { suffix, px } of sizes) {
    const outPath = join(PESTS_DIR, `${key}${suffix}.webp`);
    await sharp(buf)
      .resize(px, px, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .webp({ quality: 90, lossless: false, effort: 4 })
      .toFile(outPath);
    const stat = await import('fs').then(m => m.promises.stat(outPath));
    console.log(`  Saved ${key}${suffix}.webp — ${Math.round(stat.size/1024*10)/10} KB`);
  }
}

async function main() {
  console.log('Pest image processing started...\n');
  for (const { key, url } of pests) {
    await processPest(key, url);
  }
  console.log('\nAll pest images processed successfully!');
}

main().catch(err => { console.error('FAILED:', err.message); process.exit(1); });
