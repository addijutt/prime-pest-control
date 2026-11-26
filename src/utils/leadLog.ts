import { LEAD_LOG_HOST, LEAD_LOG_TOKEN, LEAD_LOG_URL } from '../config/leadLog';

// Sends one row per WhatsApp tap, phone tap or contact form send to the lead sheet.
// No personal data: page, button, traffic source, device, a random visit reference and, for visits from a
// Google ad, the ad click ID (gclid / gbraid / wbraid) so booked jobs can be reported back to Google Ads.
// The visit reference is added to the WhatsApp message ("Ref: K7Q2X9") so a chat can be matched to its row.

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
const CLICK_KEY = 'ppc_ads_click';
/** Google Ads accepts booked-job uploads up to 90 days after the ad click */
const CLICK_DAYS = 90;

type AdsClick = { id: string; type: 'gclid' | 'gbraid' | 'wbraid'; at: number };

/** Short code customers see in the WhatsApp message; no 0/O/1/I so it is easy to read back */
function newRef(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let out = '';
  for (let i = 0; i < 6; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

function longStore(): Storage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

/** Saves the ad click ID from the address (kept 90 days, so a later direct visit still counts) */
function rememberAdsClick(params: URLSearchParams): void {
  const types = ['gclid', 'gbraid', 'wbraid'] as const;
  const type = types.find((t) => params.get(t));
  if (!type) return;
  const click: AdsClick = { id: (params.get(type) || '').slice(0, 200), type, at: Date.now() };
  try {
    longStore()?.setItem(CLICK_KEY, JSON.stringify(click));
  } catch {
    /* ignore */
  }
}

function adsClick(): AdsClick | null {
  try {
    const raw = longStore()?.getItem(CLICK_KEY);
    if (!raw) return null;
    const click = JSON.parse(raw) as AdsClick;
    if (Date.now() - click.at > CLICK_DAYS * 86400000) return null;
    return click;
  } catch {
    return null;
  }
}

function store(): Storage | null {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

/** Where this visit came from, worked out on the first page and kept for the visit. A new ad click or
 *  campaign link during the visit replaces the source but keeps the visit's reference code. */
export function getAttribution(): Attribution {
  const s = store();
  const params = new URLSearchParams(window.location.search);
  rememberAdsClick(params);
  const tagged = ['gclid', 'gbraid', 'wbraid', 'utm_source'].some((k) => params.get(k));
  let saved: Attribution | null = null;
  try {
    const raw = s?.getItem(ATTR_KEY);
    if (raw) saved = JSON.parse(raw) as Attribution;
  } catch {
    saved = null;
  }
  if (saved && !tagged) return saved;

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
    // Keep the reference the customer may already have seen in a WhatsApp message during this visit
    visit: saved && /^[A-Z2-9]{6}$/.test(saved.visit) ? saved.visit : newRef(),
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
    const click = adsClick();
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
      clickId: click?.id || '',
      clickType: click?.type || '',
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

/** The default WhatsApp greeting when a button has no message of its own */
const WHATSAPP_GREETING = 'Hi Prime Pest Control, I would like a free quote.';

/** This visit's reference line for WhatsApp messages, e.g. "Ref: K7Q2X9" */
export function whatsappRefLine(): string {
  try {
    return `Ref: ${getAttribution().visit}`;
  } catch {
    return '';
  }
}

/** Adds the greeting (if none) and the visit reference to a wa.me link */
export function withWhatsAppRef(href: string): string {
  try {
    const ref = whatsappRefLine();
    if (!ref) return href;
    const url = new URL(href, window.location.href);
    const text = url.searchParams.get('text') || WHATSAPP_GREETING;
    if (text.includes('Ref: ')) return href;
    url.searchParams.delete('text');
    const rest = url.searchParams.toString();
    // encodeURIComponent writes spaces as %20; URLSearchParams would write "+", which WhatsApp may show as is
    return `${url.origin}${url.pathname}?${rest ? `${rest}&` : ''}text=${encodeURIComponent(`${text}\n${ref}`)}`;
  } catch {
    return href;
  }
}
