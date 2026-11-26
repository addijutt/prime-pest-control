/**
 * Prime Pest Control: lead click logger.
 *
 * Paste this into the Google Sheet "Prime Pest Control Leads (WhatsApp & Calls)":
 * Extensions > Apps Script, replace everything with this file, save, then
 * Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
 * Copy the web app URL into src/config/leadLog.ts (LEAD_LOG_URL) and redeploy the site.
 *
 * The website sends one small JSON message per WhatsApp tap, phone tap or contact form send.
 * Nothing personal is stored: no IP address, name, phone number or message text. For visits from a Google ad
 * the ad click ID is stored (columns N and O) so booked jobs can be uploaded to Google Ads as conversions.
 * Columns P to R (Booked?, Job value, Booked on) are filled in by hand and never written by this script.
 */

const SHEET_NAME = 'Leads';
// Must match LEAD_LOG_TOKEN in src/config/leadLog.ts. Not a password: it only filters out random posts.
const TOKEN = 'ppc-leads-2026';
const ACTIONS = ['WhatsApp', 'Call', 'Form'];

function doPost(e) {
  try {
    const d = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (d.token !== TOKEN || ACTIONS.indexOf(d.action) === -1) return reply_('ignored');

    const row = [
      new Date(),
      d.action,
      clean_(d.page, 200),
      clean_(d.title, 160),
      clean_(d.button, 60),
      clean_(d.landing, 200),
      clean_(d.source, 60),
      clean_(d.medium, 40),
      clean_(d.campaign, 100),
      clean_(d.referrer, 120),
      clean_(d.device, 20),
      clean_(d.visit, 20),
      d.test ? 'Yes' : 'No',
      clean_(d.clickId, 200),
      clean_(d.clickType, 10),
    ];

    const lock = LockService.getScriptLock();
    lock.tryLock(5000);
    SpreadsheetApp.getActive().getSheetByName(SHEET_NAME).appendRow(row);
    lock.releaseLock();
    return reply_('ok');
  } catch (err) {
    return reply_('error');
  }
}

// Plain text, one line, limited length, and never starting with a formula character
function clean_(value, max) {
  let s = String(value === undefined || value === null ? '' : value).replace(/[\r\n\t]+/g, ' ').trim();
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s.slice(0, max);
}

function reply_(text) {
  return ContentService.createTextOutput(text);
}
