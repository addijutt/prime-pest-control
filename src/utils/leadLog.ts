import { LEAD_LOG_HOST, LEAD_LOG_TOKEN, LEAD_LOG_URL } from '../config/leadLog';

// Sends one row per WhatsApp tap, phone tap or contact form send to the lead sheet.
// No personal data: page, button, traffic source, device and a random visit ID only.

export type LeadAction = 'WhatsApp' | 'Call' | 'Form';

type Attribution = {
  landing: string;
  referrer: string;
  source: string;
  medium: string;
  campaign: string;
  visit: string;
};

const ATTR_KEY = 'ppc_lead_attr';
const TEST_KEY = 'ppc_lead_test';

function store(): Storage | null {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

/** Where this visit came from, worked out once on the first page and kept for the visit */
export function getAttribution(): Attribution {
  const s = store();
  try {
    const saved = s?.getItem(ATTR_KEY);
    if (saved) return JSON.parse(saved) as Attribution;
  } catch {
    /* ignore */
  }

  const params = new URLSearchParams(window.location.search);
  let refHost = '';
  try {
    refHost = document.referrer ? new URL(document.referrer).hostname : '';
  } catch {
    refHost = '';
  }
  const ownSite = refHost.endsWith('primepestcontrol.ae');
  const ref = ownSite ? '' : refHost;

  let source = params.get('utm_source') || '';
  let medium = params.get('utm_medium') || '';
  if (!source) {
    if (params.get('gclid') || params.get('gbraid') || params.get('wbraid')) {
      source = 'google';
      medium = 'cpc';
    } else if (ref) {
      const map: [RegExp, string, string][] = [
        [/google\./, 'google', 'organic'],
        [/bing\./, 'bing', 'organic'],
        [/yahoo\./, 'yahoo', 'organic'],
        [/duckduckgo\./, 'duckduckgo', 'organic'],
        [/(chatgpt\.com|openai\.com)/, 'chatgpt', 'ai'],
        [/perplexity\./, 'perplexity', 'ai'],
        [/(gemini\.google|copilot\.microsoft)/, 'ai assistant', 'ai'],
        [/(facebook\.|fb\.)/, 'facebook', 'social'],
        [/instagram\./, 'instagram', 'social'],
        [/(t\.co|twitter\.|x\.com)/, 'x', 'social'],
        [/linkedin\./, 'linkedin', 'social'],
        [/tiktok\./, 'tiktok', 'social'],
      ];
      const hit = map.find(([re]) => re.test(ref));
      source = hit ? hit[1] : ref;
      medium = hit ? hit[2] : 'referral';
    } else {
      source = '(direct)';
      medium = '(none)';
    }
  }

  const attr: Attribution = {
    landing: window.location.pathname,
    referrer: ref,
    source,
    medium: medium || '(none)',
    campaign: params.get('utm_campaign') || '',
    visit: Math.random().toString(36).slice(2, 8),
  };
  try {
    s?.setItem(ATTR_KEY, JSON.stringify(attr));
    if (params.get('leadtest') === '1') s?.setItem(TEST_KEY, '1');
  } catch {
    /* ignore */
  }
  return attr;
}

function isTest(): boolean {
  try {
    return store()?.getItem(TEST_KEY) === '1' || new URLSearchParams(window.location.search).get('leadtest') === '1';
  } catch {
    return false;
  }
}

function device(): string {
  const w = window.innerWidth;
  if (w < 768) return 'Mobile';
  if (w < 1024) return 'Tablet';
  return 'Desktop';
}

/** Which part of the page the tapped button is in */
export function describeButton(el: Element): string {
  const zones: [string, string][] = [
    ['.whatsapp-bar', 'Bottom bar (phone)'],
    ['.header-mobile-cta', 'Top bar (phone)'],
    ['.mobile-drawer', 'Menu'],
    ['header', 'Header'],
    ['.floating-btns', 'Floating button'],
    ['footer', 'Footer'],
    ['#hero', 'Hero'],
    ['#prices', 'Prices'],
    ['.guide-intro-section', 'Guide'],
    ['.guide-signs-section', 'Signs'],
    ['.what-we-do-section', 'What we do'],
    ['.why-choose-us-section', 'How it works'],
    ['.guide-safety-section', 'Safety'],
    ['#faq', 'FAQ'],
    ['#service-area', 'Service area'],
    ['#free-quote', 'Free quote'],
    ['.satisfaction-guarantee-section', 'Guarantee'],
    ['.contact-info-section', 'Contact page'],
  ];
  for (const [selector, name] of zones) if (el.closest(selector)) return name;
  return 'Page';
}

export function logLead(action: LeadAction, button: string): void {
  try {
    if (!LEAD_LOG_URL) return;
    const test = isTest();
    if (window.location.hostname !== LEAD_LOG_HOST && !test) return;

    const attr = getAttribution();
    const body = JSON.stringify({
      token: LEAD_LOG_TOKEN,
      action,
      page: window.location.pathname,
      title: document.title,
      button,
      landing: attr.landing,
      source: attr.source,
      medium: attr.medium,
      campaign: attr.campaign,
      referrer: attr.referrer,
      device: device(),
      visit: attr.visit,
      test,
    });
    // text/plain avoids a CORS preflight; sendBeacon survives the page opening WhatsApp or the dialler
    const blob = new Blob([body], { type: 'text/plain;charset=UTF-8' });
    if (!navigator.sendBeacon?.(LEAD_LOG_URL, blob)) {
      void fetch(LEAD_LOG_URL, { method: 'POST', mode: 'no-cors', keepalive: true, body });
    }
  } catch {
    /* logging must never break the page */
  }
}
