// Lead click log → Google Sheet "Prime Pest Control Leads (WhatsApp & Calls)".
// Setup: docs/lead-tracking/README.md. Leave LEAD_LOG_URL empty to switch logging off.

/** Web app URL from the sheet's Apps Script deployment (https://script.google.com/macros/s/.../exec) */
export const LEAD_LOG_URL = '';

/** Must match TOKEN in docs/lead-tracking/apps-script.gs */
export const LEAD_LOG_TOKEN = 'ppc-leads-2026';

/** Real leads are only logged on this host. Elsewhere, add ?leadtest=1 to the URL to send test rows. */
export const LEAD_LOG_HOST = 'www.primepestcontrol.ae';
