// Download bird PNGs from Canva and convert to WebP at 3 sizes
// Includes BFS flood-fill background removal for images exported without transparency
import https from 'https';
import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PESTS_DIR = join(__dirname, '../public/assets/img/pests');

const birds = [
  {
    key: 'pigeon',
    url: 'https://export-download.canva.com/PNK6E/DAHaVFPNK6E/-1/0/0001-9088785606847691212.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH4R7NKVBA%2F20261108%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261108T172531Z&X-Amz-Expires=8036&X-Amz-Signature=8565496d8b2aed24dbf4b462e250e9425db6aff570e16b143d33016e87f07c4d&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Sun%2C%2008%20Nov%202026%2019%3A39%3A27%20GMT'
  },
  {
    key: 'mynah',
    url: 'https://export-download.canva.com/7OAEM/DAHaVC7OAEM/-1/0/0001-1761429013103158598.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH4R7NKVBA%2F20261108%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261108T004919Z&X-Amz-Expires=70511&X-Amz-Signature=c885031bd8f30600ac66b8991589127fb524e5c0cea7a808023aa37d080779d4&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Sun%2C%2008%20Nov%202026%2020%3A24%3A30%20GMT'
  },
  {
    key: 'house-crow',
    url: 'https://export-download.canva.com/7fkJk/DAHaVE7fkJk/-1/0/0001-4991635842614081322.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH4R7NKVBA%2F20261107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261107T214906Z&X-Amz-Expires=79485&X-Amz-Signature=14608eb56d59b5a9f68c5d3eb715c97cd4366cb4b81daefde897dc91eef2c0ef&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Sun%2C%2008%20Nov%202026%2019%3A53%3A51%20GMT'
  },
  {
    key: 'house-sparrow',
    url: 'https://export-download.canva.com/gwqtI/DAHaVNgwqtI/-1/0/0001-5566970694884823199.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH4R7NKVBA%2F20261108%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261108T043735Z&X-Amz-Expires=54315&X-Amz-Signature=8ea39a3822092fa62563b5f75e1cf723d71d190d089f07e578e29f5747c9e213&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Sun%2C%2008%20Nov%202026%2019%3A42%3A50%20GMT'
  },
  {
    key: 'bird',
    url: 'https://export-download.canva.com/kAc1Q/DAHaVPkAc1Q/-1/0/0001-8272508174202883552.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH4R7NKVBA%2F20261108%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261108T092403Z&X-Amz-Expires=38381&X-Amz-Signature=398387d7b39d8a8cd4325c7bcc00285b943e8c5c55aceaa5485ae8dd8fead2c9&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Sun%2C%2008%20Nov%202026%2020%3A03%3A44%20GMT'
  }
];

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

// BFS flood-fill background removal for images that lack an alpha channel.
// Seeds from all border pixels, identifies contiguous background region,
// then sets those pixels to transparent.
async function ensureTransparent(buf) {
  const meta = await sharp(buf).metadata();
  if (meta.hasAlpha) return buf;

  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Sample 8 border points to estimate background color
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

  const THRESHOLD = 40;
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

async function processBird(key, url) {
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
  console.log('Bird image processing started...\n');
  for (const { key, url } of birds) {
    await processBird(key, url);
  }
  console.log('\nAll bird images processed successfully!');
}

main().catch(err => { console.error('FAILED:', err.message); process.exit(1); });
