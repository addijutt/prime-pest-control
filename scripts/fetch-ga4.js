// GA4 Data Fetcher — Prime Pest Control
// Usage: node scripts/fetch-ga4.js
// Uses googleapis (analyticsdata v1beta) — same package as GSC script

import { google } from 'googleapis';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const KEY_FILE = join(__dirname, '../.credentials/analytics-service-account.json');

// Find this in GA4 → Admin → Property Settings → Property ID (numbers only, no "properties/")
const GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID || '562978109';

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_FILE,
  scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
});

async function discoverPropertyId(authClient) {
  console.log('\n📋 Discovering GA4 Property ID...');
  const adminClient = google.analyticsadmin({ version: 'v1beta', auth: authClient });
  try {
    const res = await adminClient.accountSummaries.list();
    const summaries = res.data.accountSummaries || [];
    if (!summaries.length) {
      console.log('  No GA4 accounts accessible. Add the service account email as Viewer in GA4 → Admin → Account Access Management.');
      return null;
    }
    summaries.forEach(account => {
      console.log(`\n  Account: ${account.displayName}`);
      (account.propertySummaries || []).forEach(prop => {
        const id = prop.property.replace('properties/', '');
        console.log(`    ✅ Property: "${prop.displayName}" → Property ID: ${id}`);
        console.log(`       Set this: GA4_PROPERTY_ID=${id}  (or update the script)`);
      });
    });
    return summaries[0]?.propertySummaries?.[0]?.property?.replace('properties/', '') || null;
  } catch (err) {
    console.log('  Error listing properties:', err.message);
    return null;
  }
}

async function runReport(analyticsData, propertyId, body, label) {
  try {
    const res = await analyticsData.properties.runReport({
      property: `properties/${propertyId}`,
      requestBody: body,
    });
    const rows = res.data.rows || [];
    const dimHeaders = res.data.dimensionHeaders?.map(h => h.name) || [];
    const metHeaders = res.data.metricHeaders?.map(h => h.name) || [];

    console.log(`\n── ${label} ${'─'.repeat(Math.max(0, 42 - label.length))}`);
    if (!rows.length) { console.log('  No data yet.'); return; }

    rows.forEach(row => {
      const dims = row.dimensionValues.map((d, i) => `${dimHeaders[i]}: ${d.value}`).join('  ');
      const mets = row.metricValues.map((m, i) => `${metHeaders[i]}: ${m.value}`).join('  ');
      console.log(`  ${dims}  |  ${mets}`);
    });
  } catch (err) {
    console.log(`  Error: ${err.message}`);
  }
}

async function fetchGA4() {
  const authClient = await auth.getClient();
  const analyticsData = google.analyticsdata({ version: 'v1beta', auth: authClient });

  console.log('\n📊 GA4 Report — Prime Pest Control\n');

  let propertyId = GA4_PROPERTY_ID;

  if (!propertyId) {
    propertyId = await discoverPropertyId(authClient);
    if (!propertyId) return;
    console.log(`\n  Using Property ID: ${propertyId}\n`);
  }

  const dateRange = { startDate: '30daysAgo', endDate: 'today' };

  await runReport(analyticsData, propertyId, {
    dateRanges: [dateRange],
    dimensions: [{ name: 'sessionDefaultChannelGroup' }],
    metrics: [{ name: 'sessions' }, { name: 'totalUsers' }, { name: 'bounceRate' }, { name: 'averageSessionDuration' }],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
  }, 'Traffic by Channel (Last 30 Days)');

  await runReport(analyticsData, propertyId, {
    dateRanges: [dateRange],
    dimensions: [{ name: 'pagePath' }],
    metrics: [{ name: 'screenPageViews' }, { name: 'totalUsers' }],
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
    limit: 15,
  }, 'Top Pages (Last 30 Days)');

  await runReport(analyticsData, propertyId, {
    dateRanges: [dateRange],
    dimensions: [{ name: 'eventName' }],
    metrics: [{ name: 'eventCount' }],
    orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
    limit: 20,
  }, 'Events incl. phone_call_click & whatsapp_click');

  await runReport(analyticsData, propertyId, {
    dateRanges: [dateRange],
    dimensions: [{ name: 'city' }],
    metrics: [{ name: 'totalUsers' }],
    orderBys: [{ metric: { metricName: 'totalUsers' }, desc: true }],
    limit: 10,
  }, 'Top Cities');

  console.log('\n✅ GA4 report complete.\n');
}

fetchGA4().catch(console.error);
