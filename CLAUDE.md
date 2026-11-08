# CLAUDE.md

This file is the single source of truth for Claude Code working in this repository.
It combines technical architecture, business context, and a living project tracker.
**Update this file whenever a task is completed, a decision is made, or new work is planned.**

---

## Commands

```bash
npm run dev       # start dev server (localhost:3000)
npm run build     # static export → out/
npm run lint      # ESLint
npx tsc --noEmit  # type check without emitting
```

---

## Stack

- **Next.js 16.4.1** App Router, **React 19**, **TypeScript 5**, **Tailwind CSS 4**
- `output: 'export'` in `next.config.ts` — **static site**. No server components, no API routes, no `getServerSideProps`. Everything must be statically renderable.
- `images.unoptimized: true` — use plain `<img>` tags, not `next/image`.
- Path alias: `@/*` → `./src/*`

---

## Architecture

### Routing

| File | Route |
|------|-------|
| `src/app/page.tsx` | `/` (homepage) |
| `src/app/[slug]/page.tsx` | All service pages (e.g. `/cockroach-exterminator-near-me`) |

Every service page renders the same layout: `HomeHero → UrgencySection → WhatWeDoSection → ServiceAreaSection → WhyCallUsSection → TrustedByCustomersSection → WhyChooseUsSection → FreeQuoteSection → SatisfactionGuaranteeSection → FaqSection`.

Valid slugs are defined in `SEO_META` inside `src/app/[slug]/page.tsx`. Adding a new page requires an entry in both `SEO_META` (routing/metadata) and `PAGE_CONTENT` in `src/config/pageContent.ts` (content).

### Page Content System

`src/config/pageContent.ts` — central content registry, `Record<string, PageContent>` keyed by pathname. Access with `getPageContent(pathname)`.

Each `PageContent` entry has:
- `hero.headline` — the H1
- `hero.pestIcons` — array of `PestImageRef` for the pest grid
- `expertise` — title, subtitle, service grid images, bullet checklist
- `faqs` / `faqTitle` — optional FAQ overrides

All sections have hardcoded defaults; entries only need to override what differs.

### Pest Image System (`src/config/pageContentHelpers.ts`)

Images: `/assets/img/pests/{key}.webp` (base), `{key}-d.webp` (desktop), `{key}-m.webp` (mobile).
Use `pest(label, href?, imageKey?)` helper. Missing keys → add to `PEST_IMAGE_FALLBACKS`.

### CSS Architecture

- `src/app/globals.css` — `@import "tailwindcss"` then custom CSS. No CSS modules.
- `CRITICAL_CSS` in `src/app/layout.tsx` — inlined `<style>` in `<head>` for hero `margin-top`. `globals.css` loads before it, so `!important` in `CRITICAL_CSS` wins. Be careful.
- Breakpoints: `768px` (mobile/desktop), `767px`, `480px`.
- Fonts: Nunito Sans (primary), Oswald, Roboto — Google Fonts in `layout.tsx`.
- Font Awesome 6 via CDN.

### Phone & Contact Utilities (`src/utils/formatPhone.ts`)

Always use `noBreakPhone(phone)` for phone numbers in JSX.
- `PHONE_DISPLAY` = `'055 304 5256'`
- `PHONE_RAW` = `'+971553045256'`
- `WHATSAPP_URL` = `'https://wa.me/971553045256'`

Never hardcode phone strings in JSX. Each component declares its own local constants — keep that pattern.

### Image Exports (`src/utils/images.ts`)

All image paths live here. Import from here, never hardcode `/assets/img/...` paths.

### Key Components

- `FloatingWhatsApp` — fixed floating call + WhatsApp buttons with slide-in label (`.floating-btns__label` in `globals.css`)
- `Header` — fixed navbar, desktop dropdowns + mobile right-side drawer. Phone: `Call 24/7: {phone}`
- `HomeHero` — dual layout. Desktop: card + pest grid. Mobile: photo panel + pest selector + benefits list
- `ServiceAreaSection` — uses `useVisitorLocation` hook to personalise city/region
- `dynamic-href` / `dynamic-phone` — CSS classes on CTAs for client-side location-based swap
- `FaqSection` — accordion FAQ with FAQPage JSON-LD schema injected dynamically from props

### Tracking

- GTM: `GTM-MLXL4T5N`
- GA4: `G-VF1DJE32KE` (stream: Prime Pest Control - Web, stream ID: 16289271366)
- Phone click → `gtag event: phone_call_click` and WhatsApp click → `gtag event: whatsapp_click` both fire to GA4
- Google Ads (`AW-17105539352`) removed for now — re-add when campaigns start
- All in `src/app/layout.tsx`

### Schema / Structured Data (`src/app/layout.tsx`)

Two global schemas injected in `<head>`:
1. **LocalBusiness** — full entity with aggregateRating, areaServed (22 areas), sameAs (3 platforms), knowsAbout, hasOfferCatalog
2. **WebSite** — links site to business entity

Per-page schemas:
- **Homepage** (`src/app/page.tsx`) — WebPage schema
- **Every service page** (`src/app/[slug]/page.tsx`) — Service schema + BreadcrumbList schema
- **Every page with FAQ** (`src/components/sections/FaqSection.tsx`) — FAQPage schema (dynamic, built from props)

---

## Business Details

- **Company**: Prime Pest Control Dubai
- **Phone**: 055 304 5256 (`+971553045256`)
- **Email**: info@primepestcontrol.ae
- **WhatsApp**: `https://wa.me/971553045256`
- **Domain**: `https://www.primepestcontrol.ae`
- **Pricing**: AED 299 promo, AED 299–2000 range
- **Services**: Pest control (cockroaches, bed bugs, termites, rodents, ants, mosquitoes, wasps, fleas, scorpions, camel spiders, drain flies, silverfish, centipedes) + bird control (pigeons, mynahs, crows, sparrows, netting, proofing, solar panel bird-proofing) across Dubai
- **Hours**: Monday–Saturday 08:00–20:00

### Business Profiles (all verified, all in schema `sameAs`)

| Platform | URL | Status |
|----------|-----|--------|
| Google My Business | `https://maps.app.goo.gl/qB9B8YiMyvSbGfxj7` | ✅ Live |
| Instagram | `https://www.instagram.com/primepestdubai/` | ✅ Live |
| Facebook | `https://www.facebook.com/profile.php?id=61595101124439` | ✅ Live |

### GMB Technical Details

- **Coordinates**: `25.0760224, 55.227488` (exact GMB pin — matches schema)
- **Place ID (hex)**: `0x63714ac16dc297a3:0xada6a2a17c01400b`
- **KG ID**: `/g/11zzm2kjkl`
- **Category**: `pest_control_service`

> **NAP gap**: GMB full street address is not yet in the schema (only `addressLocality: Dubai`). Once the owner provides the street address, add it to `localBusinessSchema.address` in `layout.tsx` for full NAP consistency.

---

## Project Tracker

### ✅ Completed

| Date | Task | Files Changed |
|------|------|---------------|
| 2026-11-08 | Replaced Google Ads (`AW-17105539352`) with GA4 (`G-VF1DJE32KE`); added phone + WhatsApp click events to GA4 | `layout.tsx` |
| 2026-11-07 | Updated GTM container ID from `GTM-MND7JS6X` to `GTM-MLXL4T5N` | `layout.tsx` |
| 2026-11-07 | Fixed all header call buttons to "Call 24/7" | `Header.tsx` |
| 2026-11-07 | Added 24/7 availability messaging across homepage | Multiple sections |
| 2026-11-07 | Updated all service page hero headlines | `pageContent.ts` |
| 2026-11-07 | Created `sitemap.ts` — 46 URLs including all service pages | `src/app/sitemap.ts` |
| 2026-11-07 | Created `robots.ts` — allows all bots, points to sitemap | `src/app/robots.ts` |
| 2026-11-07 | Added `export const dynamic = 'force-static'` to sitemap + robots (required for static export) | Both files |
| 2026-11-07 | Enhanced LocalBusiness schema: merged AggregateRating in, added sameAs, email, knowsAbout, 22 areaServed, expanded hasOfferCatalog | `layout.tsx` |
| 2026-11-07 | Added WebSite schema | `layout.tsx` |
| 2026-11-07 | Added FAQPage JSON-LD to FaqSection (dynamic, per-page) | `FaqSection.tsx` |
| 2026-11-07 | Added Service + BreadcrumbList schemas to every service page | `[slug]/page.tsx` |
| 2026-11-07 | Added WebPage schema to homepage | `page.tsx` |
| 2026-11-07 | Fixed GeoCoordinates to match exact GMB pin (was generic Dubai center) | `layout.tsx` |
| 2026-11-07 | Added GMB, Instagram, Facebook URLs to schema `sameAs` | `layout.tsx` |

---

### 🔄 Ongoing

- **NAP consistency audit** — GMB street address not yet in schema. Owner to provide full address → add to `localBusinessSchema.address`.
- **Content coverage** — not all 46 service page slugs have custom `PAGE_CONTENT` entries. Pages without entries fall back to generic defaults. Gradually adding per-pest custom content improves AEO rankings.

---

### 🔴 Important / Urgent

- **GMB street address** — add to schema once confirmed. Required for full NAP consistency (critical for local SEO).
- **Review count** — schema has `ratingCount: 127`. Keep this in sync with the actual GMB review count. Update when review count changes significantly.
- **Sitemap submission** — submit `https://www.primepestcontrol.ae/sitemap.xml` to Google Search Console and Bing Webmaster Tools if not already done.

---

### 📋 Upcoming Tasks (Prioritised)

#### SEO / AEO / GEO

- [ ] **Add full street address to LocalBusiness schema** — waiting on owner confirmation
- [x] **Google Search Console** — Domain property (`primepestcontrol.ae`) verified via DNS TXT record ✅
- [ ] **Submit sitemap in GSC** — go to GSC → Sitemaps → submit `https://www.primepestcontrol.ae/sitemap.xml`
- [ ] **Add `Review` schema items** — add 3–5 individual reviews as JSON-LD to boost E-E-A-T for AI engines (use real GMB reviews)
- [ ] **Add `HowTo` schema** — for treatment process pages (e.g. termite control, bed bug treatment). AI engines surface these as step-by-step answers
- [ ] **Add per-page `WebPage` schema to service pages** — currently only homepage has it; service pages only have Service + BreadcrumbList
- [ ] **Expand FAQ content** — add 3–4 more Dubai-specific FAQs per key pest page (cockroaches, bed bugs, termites). Longer, more specific FAQs = more AI answer coverage
- [ ] **Add `speakable` property** — mark key paragraphs as speakable for voice search / AI assistants
- [ ] **Google Search Console setup** — verify domain, monitor coverage errors, check Core Web Vitals

#### Content

- [ ] **Fill PAGE_CONTENT gaps** — service pages with no custom content entry use generic hero/FAQ. Priority pages to fill: `termite-control`, `bed-bug-exterminator-near-me`, `commercial-pest-control-dubai`, `bird-netting-dubai`
- [ ] **Add About Us page schema** — `AboutPage` JSON-LD with founder/team info strengthens E-E-A-T
- [ ] **Blog / Articles section** — AI engines heavily favour sites with original educational content. Even 5–10 articles (e.g. "How to spot bed bugs in Dubai", "Cockroach prevention in UAE summer") would significantly boost GEO visibility
- [ ] **Add Dubai community landing pages** — e.g. `/pest-control-dubai-marina`, `/pest-control-jumeirah`. Each targets a specific location + service query

#### Technical

- [ ] **Core Web Vitals audit** — run Lighthouse on homepage and top 3 service pages. CWV is a ranking factor
- [ ] **Image optimisation pass** — verify all hero/pest images are served as `.webp` and appropriately sized
- [ ] **Add `canonical` tags to all static pages** — about-us, contact-us, terms, privacy-policy currently missing canonicals
- [ ] **Fix stale `out/` build artifacts** — old build output may contain green-nest-pc.com references. Run `npm run build` to regenerate clean output before next deploy

#### Conversion / UX

- [ ] **Add WhatsApp click conversion tracking** — currently only phone clicks are tracked in Google Ads. Add WhatsApp click event to GTM/gTag
- [ ] **Add trust badges section** — Dubai Municipality licence number, years in business, number of treatments completed. Strengthens both conversion and E-E-A-T
- [ ] **Add Google Reviews widget** — embed live GMB reviews on homepage and contact page

---

### 💡 Trend Watch (AEO / GEO 2025–2026)

Keep these in mind when planning new work:

| Trend | Action for This Site |
|-------|----------------------|
| **Google AI Overviews** dominate position 0 | More FAQs, HowTo schemas, speakable markup, direct answer-style content |
| **ChatGPT / Perplexity citations** favour authoritative entities | Strengthen `sameAs`, add Review schemas, build backlinks from local directories |
| **Voice search in UAE** growing (Arabic + English) | Add concise answer paragraphs at top of service pages, speakable schema |
| **Multilingual SEO** — Arabic-speaking market in Dubai is large | Consider Arabic-language versions of top pages (`/ar/` prefix) |
| **Hyperlocal content** wins in Dubai | Add community-specific landing pages (Marina, JBR, Downtown, etc.) |
| **Video content** boosts AI visibility | Short explainer videos per pest type → embed on service pages with `VideoObject` schema |
| **E-E-A-T signals** are increasingly weighted | Add team bios, licence numbers, before/after photos, real customer reviews |

---

## Deployment Notes

- Build command: `npm run build` → generates static files in `out/`
- The `out/` directory is what gets deployed to the CDN/hosting
- Always run `npx tsc --noEmit` before building to catch type errors
- After any schema change, validate at: `https://validator.schema.org/` and `https://search.google.com/test/rich-results`
