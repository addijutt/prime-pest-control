// GSC Data Fetcher — Prime Pest Control
// Usage: node scripts/fetch-gsc.js
// Requires: service account granted Full access in GSC

import { google } from 'googleapis';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const KEY_FILE = join(__dirname, '../.credentials/analytics-service-account.json');

const GSC_SITE = 'sc-domain:primepestcontrol.ae';
const DAYS = 30;

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_FILE,
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
});

const INSPECT_URLS = [
  'http://primepestcontrol.ae/',
  'https://primepestcontrol.ae/',
  'https://www.primepestcontrol.ae/',
];

async function listSites(sc) {
  const res = await sc.sites.list();
  console.log('\n📋 Sites accessible to this service account:');
  if (res.data.siteEntry?.length) {
    res.data.siteEntry.forEach(s => console.log(`  ${s.siteUrl}  (${s.permissionLevel})`));
  } else {
    console.log('  None found — make sure the service account is added in GSC → Settings → Users and permissions');
  }
}

async function query(sc, dimensions, label, limit = 15) {
  const endDate = new Date().toISOString().split('T')[0];
  const startDate = new Date(Date.now() - DAYS * 86400000).toISOString().split('T')[0];

  try {
    const res = await sc.searchanalytics.query({
      siteUrl: GSC_SITE,
      requestBody: {
        startDate,
        endDate,
        dimensions,
        rowLimit: limit,
        orderBy: [{ fieldName: 'clicks', sortOrder: 'DESCENDING' }],
      },
    });

    const rows = res.data.rows || [];
    console.log(`\n── ${label} (Last ${DAYS} Days) ${'─'.repeat(Math.max(0, 40 - label.length))}`);
    if (!rows.length) { console.log('  No data yet.'); return; }

    rows.forEach(row => {
      const keys = row.keys.join(' | ').substring(0, 50).padEnd(52);
      console.log(
        `  ${keys}  Clicks: ${String(row.clicks).padStart(4)}  Impr: ${String(row.impressions).padStart(6)}  CTR: ${(row.ctr * 100).toFixed(1).padStart(5)}%  Pos: ${row.position.toFixed(1).padStart(5)}`
      );
    });
  } catch (err) {
    console.log(`  Error fetching ${label}:`, err.message);
  }
}

async function inspectUrls(sc) {
  console.log('\n── URL Index Status ────────────────────────────────');
  for (const url of INSPECT_URLS) {
    try {
      const res = await sc.urlInspection.index.inspect({
        requestBody: { inspectionUrl: url, siteUrl: GSC_SITE },
      });
      const r = res.data.inspectionResult;
      const index = r.indexStatusResult;
      const verdict = index.verdict;
      const crawled = index.lastCrawlTime ? index.lastCrawlTime.substring(0, 10) : 'never';
      const canonical = index.googleCanonical || index.userDeclaredCanonical || '—';
      console.log(`  ${url.padEnd(40)} verdict: ${verdict.padEnd(12)} crawled: ${crawled}  canonical: ${canonical}`);
    } catch (err) {
      console.log(`  ${url.padEnd(40)} Error: ${err.message}`);
    }
  }
}

async function fetchGSC() {
  const authClient = await auth.getClient();
  const sc = google.searchconsole({ version: 'v1', auth: authClient });

  console.log('\n🔍 Google Search Console Report — Prime Pest Control\n');

  // Check site access first
  await listSites(sc);

  // URL index status check
  await inspectUrls(sc);

  // Top queries
  await query(sc, ['query'], 'Top Search Queries');

  // Top pages
  await query(sc, ['page'], 'Top Pages by Clicks');

  // Queries + pages combined (keyword → page mapping)
  await query(sc, ['query', 'page'], 'Keyword → Page Mapping', 20);

  // Device breakdown
  await query(sc, ['device'], 'Traffic by Device', 5);

  // Country breakdown
  await query(sc, ['country'], 'Traffic by Country', 10);

  console.log('\n✅ GSC report complete.\n');
}

fetchGSC().catch(console.error);
