# CLAUDE.md

This file is the single source of truth for Claude Code working in this repository.
It combines technical architecture, business context, and a living project tracker.
**Update this file whenever a task is completed, a decision is made, or new work is planned.**

> **Current state (25 Nov 2026):** the SEO, content and lead-tracking work is **live** (`seo-content-overhaul` merged into `main` on 25 Nov 2026). Photo slots show existing team photos on the live site until the real photos are added; placeholders only show in `npm run dev`. Work from `main` now. What was done, what is left (photos, owner tasks) and a ready prompt to continue: `docs/HANDOVER.md`.

---

## Commands

```bash
npm run dev       # start dev server (localhost:3000)
npm run build     # static export → out/
npm run lint      # ESLint
npx tsc --noEmit  # type check without emitting
npm run preview   # serve the production build (out/) at localhost:4000: what the live site shows (team photos, no placeholders)
```

---

## Stack

- **Next.js 16.4.6** App Router, **React 19**, **TypeScript 5**, **Tailwind CSS 4**
- `output: 'export'` in `next.config.ts` — **static site**. No server components, no API routes, no `getServerSideProps`. Everything must be statically renderable.
- `images.unoptimized: true` — use plain `<img>` tags, not `next/image`.
- Path alias: `@/*` → `./src/*`

---

## Architecture

### Routing

| File | Route |
|------|-------|
| `src/app/page.tsx` | `/` (homepage) |
| `src/app/[slug]/page.tsx` | 32 service pages (e.g. `/cockroach-control-dubai`) **and** 22 community pages (`/pest-control-<community>`) |

**Page layouts (UX order, 21 Nov 2026).** The order follows how a visitor decides: answer → price → "is it my problem" → what we treat → how it works + why us → safety → FAQ → areas → one closing CTA. One CTA per section type; no repeated "WhatsApp us" sections.

- Service page: `HomeHero → GuideIntroSection → PriceBandSection → SignsSection → WhatWeDoSection → WhyChooseUsSection (process = this service's steps) → SafetySection → FaqSection → ServiceAreaSection → FreeQuoteSection`. Pages without a guide skip the four guide sections.
- Community page: `HomeHero → GuideIntroSection → CommunityPestsSection → PriceBandSection → CommunityTipsSection → WhyChooseUsSection → FaqSection → ServiceAreaSection → FreeQuoteSection`.
- Homepage: `HomeHero → WhatWeDoSection (service grid first: visitors pick their pest) → GuideIntroSection → PriceBandSection → SignsSection → WhyChooseUsSection → SafetySection → SatisfactionGuaranteeSection → FaqSection → ServiceAreaSection → FreeQuoteSection`.
- Not used any more (still in the code): `UrgencySection` (its "AED 299 special" coupon contradicted the price cards), `WhyCallUsSection` (duplicate of Why Choose Us). `SatisfactionGuaranteeSection` only on the homepage.
- Guide sections live in `ServiceGuideSection.tsx` / `CommunityGuideSection.tsx` and reuse the site patterns (`SplitSection`, `CheckmarkList`, `PillCta`, muted band, dark `process-block`). Don't add new visual patterns for content; reuse these.

**Writing rules (owner):** no em dashes anywhere; no colons in headings (use Title Case like the rest of the site); prices only via `prices.ts`.

**Hero images:** `src/config/heroImages.ts`: 6 sets (default, indoor, outdoor, birds, business, construction), `HERO_SET_BY_PAGE` maps each service page to a set (homepage and area pages: default). A set without files falls back to default, then to the current stock images (`pest_control_near_me.webp` background, `hero-guy-transparent.png` 428 × 560 cut-out). Background goes in as the CSS variable `--hero-bg`. Brief per set (framing per screen size, sizes, file names): `docs/hero-banner-images.md`.

**Hero claims per page (v2):** price = the page's main service (first `priceKeys` entry) via `heroPriceText()`, area pages use `'lowest'`; warranty = the main service's `warrantyDays` via `heroWarrantyDays()` (no warranty line on mosquito, fly, snake, scorpion, camel spider, bird, business pages). Phone pest grid = the page's own pests + General Pest Control + "50+ more".

**Photos:** every guide/community has `photos` briefs. `ImagePlaceholder` shows a labelled placeholder in `npm run dev` and an existing team photo in production. Add the real photo by setting `src` on the brief. Full list for the team: `docs/photo-shot-list.md` (52 photos). Missing pest / bird / method tile images (62): `docs/pest-image-list.md`, with AI image prompts in `docs/pest-image-prompts.md` (photo-realistic cut-out on white, three-quarter top view; delivered as `<key>.png` 1024 px, converted to 300 / 150 / 100 px WebP with transparency).

**Where things live (one place each):**

| What | File |
|------|------|
| **Prices** (every "From AED …", price cards, schema `offers`) | `src/config/prices.ts`. In content text use `${aed('key')}`, never a typed number |
| Service page list + title/description (also drives routing and the sitemap) | `src/config/seoMeta.ts` |
| Hero, pest grid, expertise bullets, FAQs | `src/config/pageContent.ts` |
| Long-form Dubai guide per page (answer, signs, steps, safety, prevention, related, `priceKeys`) | `src/config/serviceGuides.ts` |
| Community pages (add one = one entry; route, sitemap and Service Area links follow) | `src/config/communities.ts` |
| Sitemap | `src/app/sitemap.ts` builds from `seoMeta.ts` + `communities.ts` (no manual list) |

**Adding a service page:** entry in `seoMeta.ts` + `pageContent.ts` (+ `serviceGuides.ts` / `serviceGuidesMore.ts` for the guide), menu link in `src/config/navigation.ts`, line in `public/llms.txt`.

**Removing or renaming a page:** add a 301 in `vercel.json` `redirects` (old path → final page, one hop), remove/rename it in `seoMeta.ts`, `pageContent.ts` and `serviceGuides.ts`, and repoint links in `Header.tsx`, `Footer.tsx`, `HomeHero.tsx`, `WhatWeDoSection.tsx`, `relatedHref()` in `pageContentHelpers.ts`, `related` links in `serviceGuides.ts`/`communities.ts` and `public/llms.txt`. Redirects only work on Vercel (locally an old path is a 404).

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
- `ServiceAreaSection` — fixed Dubai map (`DUBAI_CENTER`); no visitor IP lookup, no runtime geocoding
- `src/config/siteFlags.ts` — `SHOW_CUSTOMER_REVIEWS` (false): hides the reviews carousel and the guarantee-section quote until there are real Google reviews. `HERO_V2` (true): the new hero (WhatsApp button, proof points with the page's starting price, trust chips, compact phone header and pest grid). `false` brings back the original hero exactly; the old markup is kept in `HomeHero.tsx`
- `dynamic-href` / `dynamic-phone` — CSS classes on CTAs for client-side location-based swap
- `FaqSection` — accordion FAQ with FAQPage JSON-LD schema injected dynamically from props

### Tracking

- **Lead sheet** (live log of every WhatsApp tap, phone tap and contact form send, by page, button, source and device): Google Sheet "Prime Pest Control Leads (WhatsApp & Calls)" https://docs.google.com/spreadsheets/d/1SuwZPOCvJgsef12X1W5kq0BMqD3w3p2xQlTLVQNt8-0/edit (tabs: Dashboard, Leads, About; Dubai time zone). Site side: `LeadLogger.tsx` (click listener, mounted in `layout.tsx`), `utils/leadLog.ts` (attribution per visit in sessionStorage, button zones, sendBeacon as text/plain), `config/leadLog.ts` (`LEAD_LOG_URL`, token, live host). Receiver: `docs/lead-tracking/apps-script.gs` pasted into the sheet and deployed as a web app; setup in `docs/lead-tracking/README.md`. Real rows only from www.primepestcontrol.ae; `?leadtest=1` sends test rows anywhere (Test = Yes, left out of the dashboard). No personal data stored. **`LEAD_LOG_URL` set 26 Nov 2026** (web app .../AKfycbzGD9cs.../exec). Deployment access must stay "Who has access: Anyone" (otherwise 401). Tested end to end 26 Nov 2026: test row arrives with all columns incl. ad click ID. **Google Ads ready (26 Nov 2026):** the visit keeps the ad click ID (gclid / gbraid / wbraid, localStorage 90 days) and sends it (Leads N, O); every WhatsApp link gets "Ref: XXXXXX" (the visit code, Leads L) added to its message at click time (`withWhatsAppRef` in `LeadLogger`, contact form via `whatsappRefLine`). Owner fills Booked? / Job value / Booked on (P to R); tab "Google Ads upload" builds the offline conversion file (FILTER formula, TimeZone +0400, conversion name on "Ads settings"). Steps: `docs/lead-tracking/README.md`. Owner redeployed the updated script 26 Nov 2026. Live on the site since commit fcede7f (checked: Ref in the WhatsApp message, row arrives). Script now also formats each new row's time (commit b055c88; needs pasting + new version in Apps Script).

- GTM: `GTM-MLXL4T5N`
- GA4: `G-VF1DJE32KE` (stream: Prime Pest Control - Web, stream ID: 16289271366)
- Phone click → `gtag event: phone_call_click` and WhatsApp click → `gtag event: whatsapp_click` both fire to GA4
- Google Ads (`AW-17105539352`) removed for now — re-add when campaigns start
- All in `src/app/layout.tsx`

### Schema / Structured Data (`src/app/layout.tsx`)

Two global schemas injected in `<head>`:
1. **LocalBusiness** — full entity (no aggregateRating: removed 21 Nov 2026, GMB has 1 review), areaServed (22 areas), sameAs (3 platforms), knowsAbout, hasOfferCatalog
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
- **Hours**: Open 24/7, every day (owner, 21 Nov 2026). Schema: Mo–Su 00:00–23:59. Google Business Profile shows "Open 24 hours" (checked 26 Nov 2026).

### Business Profiles (all verified, all in schema `sameAs`)

| Platform | URL | Status |
|----------|-----|--------|
| Google My Business | `https://maps.app.goo.gl/qB9B8YiMyvSbGfxj7` | ✅ Live |
| Instagram | `https://www.instagram.com/primepestdubai/` | ✅ Live |
| Facebook | `https://www.facebook.com/primepestdubai` (same handle as Instagram, @primepestdubai) | ✅ Live |

### GMB Technical Details

- **Coordinates**: `25.0760224, 55.227488` (exact GMB pin — matches schema)
- **Place ID (hex)**: `0x63714ac16dc297a3:0xada6a2a17c01400b`
- **KG ID**: `/g/11zzm2kjkl`
- **Category**: `pest_control_service`

> **Address (decided 26 Nov 2026)**: service-area business, no public street address (same as the GBP). Schema keeps `addressLocality: Dubai` only; every directory hides the address and sets the service area to Dubai. Listing details and progress: Google Sheet "Prime Pest Control: Business Listings" https://docs.google.com/spreadsheets/d/1hKH5XsYmGam4C_3OxbivxF4l6bx3VB1D28F9D1bzyT8/edit (same content as `docs/business-listing-sheet.md`). Reviews: Google Sheet "Prime Pest Control: Google Reviews" https://docs.google.com/spreadsheets/d/1__zQe2tkt_EmPUrw7gDxI0btV8RzxsTD_qhvlLFtA2o/edit (messages, review tracker, replies, rules; same as `docs/review-messages.md`). Review link: https://g.page/r/CQtAAXyhoqatEBM/review

---

## Project Tracker

### ✅ Completed

| Date | Task | Files Changed |
|------|------|---------------|
| 2026-11-26 | **Listing sheet + review messages**: `docs/business-listing-sheet.md` (exact name, phone, website, hours, categories, short/medium/long descriptions, services with links, images, directories in order with status, local link ideas) and `docs/review-messages.md` (review link, WhatsApp messages in English, Arabic and Roman Urdu, reminder, what to do when a customer asks you to write the review, Google rules, reply templates). Search Console grouped by service (90 days): birds 115 impressions avg position 66, cockroaches 57 / 73, bed bugs 52 / 43, rats 35 / 70, scorpions + camel spiders 22 / 18, wasps 20 / 49, mosquitoes 18 / 67; all 15 clicks from the brand name | `docs/` |
| 2026-11-26 | **Unique phone snippet per page**: Google showed the generic phone-hero line "We specialize in pest control, bird control & pest removal across Dubai!" as the snippet (same on all 54 pages). `HomeHero` now takes `tagline` (service pages: their meta description, area pages: theirs, homepage: own line). Bird FAQ gained "What do your bird control services include?". Keyword-specific wording changes for one search were tried and reverted (owner): optimise pages for the whole query group from Search Console, not single searches | `HomeHero.tsx`, `[slug]/page.tsx`, `pageContent.ts` |
| 2026-11-26 | **New brand kit logos + icons**: `scripts/build-brand-assets.mjs <kit folder>` builds everything in `public/assets/img/brand/` from the brand kit (Downloads/Prime-Pest-Control-Complete-Brand-Kit): trimmed horizontal logo for the desktop header (60px), vertical logo for the phone header (58px) and phone menu (52px) (`logo-vertical.webp`: the kit version with the gap between mark and name tightened, so the name is readable at phone size), white-text version for the black footer, `src/app/favicon.ico` (16/32/48 on a white tile so it shows on dark tabs), apple-touch-icon, 192/512 + maskable icons for the new `src/app/manifest.ts`, schema `logo` (600px square) and a 1200 × 630 share image `og-image.jpg` (logo + one line, no AI technician photo; the kit says that photo is illustrative). Old `prime-brand-kit` folder removed. Facebook link is now `facebook.com/primepestdubai` (footer + schema `sameAs`). LocalBusiness `name` = "Prime Pest Control" (same as GBP and Facebook), `alternateName` "Prime Pest Control Dubai". GBP checked 26 Nov: Open 24 hours, 5.0 (1 review), website link still without the UTM tag | `images.ts`, `layout.tsx`, `manifest.ts`, `Footer.tsx`, `globals.css`, `scripts/build-brand-assets.mjs`, `public/assets/img/brand/` |
| 2026-11-26 | **Mega menu v2 (responsive)**: every panel = light intro column on the left (menu name, help line from `footer` in `navigation.ts`, green WhatsApp "Get a free quote" button) + link columns sized to their content (`width: max-content`, no fixed column widths, so no empty space). Wide panels (Pest Control, Areas; `columns > 1`) hang from the right edge of the nav list (`.site-nav__mega-item--wide` is static, `.site-nav__list` relative), so they no longer run off to the left on small laptops; Bird Control and Business hang from their own item. Below 1024px the intro becomes a strip under the links; Pest Control keeps 4 columns down to 768px. Checked at 1920, 1024, 820 and 390px | `Header.tsx`, `globals.css` |
| 2026-11-25 | **Mega menu redesign (minimal)**: softer panel (16px radius, light border, soft shadow, short fade-in, off with reduced motion), small grey uppercase headings without the green rule, 15px links with a light green hover, and a help strip at the bottom of each panel with a WhatsApp "Get a free quote" link (text per menu: `footer` in `navigation.ts`). Columns now live in `.mega-menu__cols`; one-column panels stack the help line. Hover fix: no `overflow: hidden` on the panel (it clipped the invisible hover bridge and closed the menu on the way down), 16px bridge, 150 ms close delay | `Header.tsx`, `navigation.ts`, `globals.css` |
| 2026-11-25 | **Pre-launch fixes**: call-out fee AED 50 (was 100), deducted from the job price when the job is booked and completed (`prices.ts` `callout`, homepage FAQ, price message, handover). Wrong pest pictures fixed: mynah (showed a bird of prey) → generic `bird` via `PEST_IMAGE_FALLBACKS`; house-crow background cleaned (`scripts/fix-crow-background.mjs`); phone hero Pigeons/Mynahs icons were a ladybird → pigeon / bird images; gecko and snake shield tiles removed from the Lizard and Snake heroes until real images exist (`docs/pest-image-list.md`). Placeholders confirmed dev-only (0 in `out/`). `npm run preview` added. Live data review (GSC 15 clicks / 593 impressions since 5 Nov, GA4 43 sessions in 90 days, 2 WhatsApp + 1 call taps; birds are the biggest search demand; camel spider is the only service page on page 1) | `prices.ts`, `FaqSection.tsx`, `pageContentHelpers.ts`, `HomeHero.tsx`, `pageContent.ts`, `public/assets/img/pests/house-crow*.webp`, `scripts/`, `package.json`, `docs/` |
| 2026-11-21 | **Page-specific heroes (review point 7)**: hero price and warranty now come from the page's own main service (were the lowest price / a 90-day warranty from any related service: commercial showed the AED 599 apartment contract, snake the rat price, mosquito and snake a warranty they don't have); bird netting shows "From AED 8 / sq ft", quote-only pages "Free quote on WhatsApp". Phone pest grid shows only the page's pests. Hero image sets per page type (`heroImages.ts`) with briefs in `docs/hero-banner-images.md`; tested with a temporary image, then removed | `prices.ts`, `heroImages.ts`, `HomeHero.tsx`, `[slug]/page.tsx`, `page.tsx`, `globals.css`, `docs/hero-banner-images.md` |
| 2026-11-21 | **Hero v2 (revertable) + 100% satisfaction guarantee back**: behind `HERO_V2` in `siteFlags.ts`. In the first screen: proofs (Dubai Municipality approved; 100% satisfaction guarantee, 90-day warranty; "From AED x" from the page's `priceKeys` via `fromPrice`), yellow "WhatsApp for a Free Quote" button + "or call", chips (Open 24/7, Same-day visits, All Dubai areas). Desktop bottom CTA bar dropped; phone: green WhatsApp bar and the first banner sentence hidden, pest grid 5 + "50+ more". Button inside the fold at 1366×768 and on phones. "100% Satisfaction Guarantee" restored (owner) next to the 90-day warranty: Why Choose Us, contact page, guarantee section title, meta and schema descriptions, new homepage FAQ | `siteFlags.ts`, `HomeHero.tsx`, `Header.tsx`, `[slug]/page.tsx`, `page.tsx`, `globals.css`, `FaqSection.tsx`, `WhyChooseUsSection.tsx`, `whyChooseUsItems.ts`, `ContactUsClient.tsx`, `SatisfactionGuaranteeSection.tsx`, `layout.tsx`, `about-us/page.tsx` |
| 2026-11-21 | **90-day warranty + new header menu**: every warranty is 90 days (3 months), shown as "90-day (3-month) warranty"; homepage warranty FAQ rewritten. Header rebuilt from `src/config/navigation.ts`: desktop mega menus (Pest Control in 4 columns: For your home / Crawling insects / Flying insects / Other pests; Bird Control; Business; Areas built from communities), About, Contact; "Home" dropped from desktop (logo links home), duplicate "Residential Pest Control" removed; items named by pest ("Cockroaches"); opens on hover and keyboard focus, Escape closes; phone drawer uses the same groups with headings. `docs/page-links.md` lists every page (preview + live URL) | `prices.ts`, `FaqSection.tsx`, `navigation.ts`, `Header.tsx`, `globals.css`, `docs/` |
| 2026-11-21 | **Warranty, quotes and call-outs**: owner asked us to decide. `prices.ts` now has `warrantyDays` per service (60 / 30 days, 1 year for termites and for netting/spikes installation), `SERVICE_TERMS` (free survey list, 48 h annual call-outs, covered / excluded pests), `callout` price (AED 100, deducted if treatment booked), termite inspection deducted from treatment; helpers `warrantyText()` / `warrantyPeriod()`. Price cards show the warranty; terms strip under every price band; homepage FAQs: warranty, free visit, annual contract, cost (all from prices.ts). All "100% guaranteed" claims (meta, schema, hero, Why Choose Us, contact, guarantee section title) replaced with the defined warranty; home FAQ no longer mentions fumigation in homes. WhatsApp review message regenerated with warranties and terms | `prices.ts`, `ServiceGuideSection.tsx`, `FaqSection.tsx`, `globals.css`, `layout.tsx`, `page.tsx`, `about-us/page.tsx`, `ContactUsClient.tsx`, `HomeHero.tsx`, `WhyChooseUsSection.tsx`, `whyChooseUsItems.ts`, `SatisfactionGuaranteeSection.tsx`, `docs/` |
| 2026-11-21 | **Gap pages + bird merge**: 4 new service pages with guides, prices and pest grids: Fumigation (businesses, containers, ISPM 15 pallets, certificate; clearly never in homes), Restaurant pest control, Office pest control, Fly control. 2 new communities: Dubai South, Dubailand. Crow and Sparrow pages merged into Bird Control (UAE autocomplete: no demand of their own; 2 more 301s, bird hub got crow, sparrow and spikes FAQs). Spider and Silverfish kept (real searches). New price keys: `fly` (from AED 249) and quote-only `restaurant-contract`, `office-contract`, `fumigation-commercial`, `fly-commercial`. Menu, Commercial related links, llms.txt, image fallbacks, photo list (110) and pest image list (58) updated. 62 pages, 60 sitemap URLs, 30 redirects | `seoMeta.ts`, `pageContent.ts`, `serviceGuidesMore.ts`, `serviceGuides.ts`, `communitiesMore.ts`, `prices.ts`, `pageContentHelpers.ts`, `Header.tsx`, `vercel.json`, `public/llms.txt`, `docs/` |
| 2026-11-21 | **Lead tracking sheet + service gap analysis**: Google Sheet with live Dashboard (KPIs, by page / source / button / device / landing page, 30-day chart, latest leads), Leads log and About tab; site logger for WhatsApp, calls and contact form; Apps Script receiver and setup guide. Service gap analysis from UAE Google autocomplete and competitors: `docs/seo-review-2026-11-21/service-gap-analysis.md` (missing: fumigation, office, restaurant, fly control, water tank cleaning (needs DM approval), bed bug inspection, Dubai South / Dubailand; incomplete: warranty terms, DM free-service FAQ) | `LeadLogger.tsx`, `utils/leadLog.ts`, `config/leadLog.ts`, `layout.tsx`, `ContactUsClient.tsx`, `docs/lead-tracking/`, `docs/seo-review-2026-11-21/service-gap-analysis.md` |
| 2026-11-21 | **24/7 hours + Bur Dubai + bird coverage + Dubai pest grids + all guides + 10 more communities**: hours 24/7 everywhere (schema Mo–Su 00:00–23:59, contact page, llms.txt); Bur Dubai removed everywhere (schema areaServed, WhyCallUs, llms.txt). Bird control hub covers netting, spikes, wire, gel, solar mesh, AC covers (headline, title, guide, grid); `bird-spikes` price (from AED 50/m, weak market data, owner to confirm). US species removed from every pest grid and the About page (Dubai species + sign tiles; bird pages now show birds + methods); stand-in images via `PEST_IMAGE_FALLBACKS`, list in `docs/pest-image-list.md` (53 new + 2 to replace: mynah shows a bird of prey, house-crow has a yellow background). Guides for the 15 remaining pages (`serviceGuidesMore.ts`); per-page `signsEyebrow`. 10 more communities (`communitiesMore.ts`): Business Bay, Downtown, Jumeirah, Silicon Oasis, Springs & Meadows, Jumeirah Park & Islands, DAMAC Hills, Motor City/Sports City/Studio City, International City, Deira. Photo shot list now 102 photos. 58 pages, 56 sitemap URLs, no dead links, no em dashes; 360px audit clean | `layout.tsx`, `ContactUsClient.tsx`, `WhyCallUsSection.tsx`, `AboutUsIntroSection.tsx`, `pageContent.ts`, `pageContentHelpers.ts`, `prices.ts`, `seoMeta.ts`, `serviceGuides.ts`, `serviceGuidesMore.ts`, `communities.ts`, `communitiesMore.ts`, `guideTypes.ts`, `[slug]/page.tsx`, `public/llms.txt`, `docs/` |
| 2026-11-21 | **Service area section redesign + responsive pass**: section no longer touches the one above (normal top padding); map fills the full card height (no empty strip); CTA moved into the text column; shorter text without the duplicate area list (Bur Dubai removed from the visible text; still in schema `areaServed` and llms.txt); communities as "Popular areas" chips. Tablet: desktop menu stays on one line (768–1100px), 3 price cards in one row, 4 cards 2 × 2; homepage shows 4 price cards. Audit: all 46 pages at 360px, key templates at 390/768px: no horizontal overflow | `ServiceAreaSection.tsx`, `globals.css`, `serviceGuides.ts` |
| 2026-11-21 | **UX redesign of content pages**: guide split into sections in the site's own patterns (answer split + photo, prices band with cards, signs split + photo, service-specific steps in the dark process block, safety/prevention columns, related chips; community pest cards and tips split). Section order rebuilt for conversion; removed repeated CTA sections (Urgency with conflicting AED 299 coupon, Why WhatsApp Us; Satisfaction only on home). Headings Title Case without colons; all em dashes removed (also About meta, privacy policy, FAQ default). `ImagePlaceholder` + 52 photo briefs + `docs/photo-shot-list.md` | `ServiceGuideSection.tsx`, `CommunityGuideSection.tsx`, `ImagePlaceholder.tsx`, `WhyChooseUsSection.tsx`, `[slug]/page.tsx`, `page.tsx`, `serviceGuides.ts`, `communities.ts`, `guideTypes.ts`, `globals.css` |
| 2026-11-21 | **Content gap (report §3/§7, plan v2 D + E)**: (1) `prices.ts` = one place for all prices (market-based starting prices, owner says ours are about the same), shown in price cards, sentences (`aed()`) and Service schema `AggregateOffer`. (2) `ServiceGuideSection`: unique Dubai guide (answer-first paragraph, problem, signs, treatment steps, safety incl. UAE fogging/aluminium phosphide ban, prevention, related links) on home + 15 pages: cockroach, bed bugs, termites, pre-construction termite, rodents, pigeons, bird netting, commercial, ticks, villa, apartment, move-in/out, lizards, snakes, disinfection. (3) 7 new service pages: villa, apartment, move-in/out, lizard, snake, disinfection, pre-construction anti-termite (all confirmed by the owner). (4) 10 community pages: Dubai Marina, JVC, JLT, Al Barsha, Arabian Ranches, Dubai Hills Estate, Al Barari, Mirdif, Palm Jumeirah, Discovery Gardens, linked from the Service Area section. (5) `SEO_META` moved to `seoMeta.ts`; sitemap generated. 48 pages, 46 sitemap URLs. Shared text cockroach vs bed bugs: 47% (was ~78%; the rest is CTA/trust sections) | `prices.ts`, `serviceGuides.ts`, `communities.ts`, `guideTypes.ts`, `seoMeta.ts`, `ServiceGuideSection.tsx`, `CommunityGuideSection.tsx`, `[slug]/page.tsx`, `page.tsx`, `sitemap.ts`, `pageContent.ts`, `ServiceAreaSection.tsx`, `Header.tsx`, `globals.css`, `public/llms.txt` |
| 2026-11-21 | **Page merge (plan v2, A + C)**: 44 → 23 service pages. 21 pages merged into the page that covers the same search (FAQs moved: wasp + bee → hornet page, critter → scorpion), 6 "near me" pages moved to "-dubai" addresses (cockroach-control-dubai, bed-bug-treatment-dubai, ant-control-dubai, mosquito-control-dubai, spider-control-dubai, tick-control-dubai). 27 one-hop 301s in `vercel.json`. Menu, footer, hero icons, grid, sitemap, llms.txt updated. Hornet page = "Wasp, Hornet & Bee Removal"; rodent page = "Rat & Mouse Control". Also fixed: Pigeons/Mynahs hero icons and Commercial grid tile linked to the wrong page; camel spider and sparrow icon links; "Carpet Beetle" linked to the wasp page. Tick added to the menu and phone hero | `vercel.json`, `[slug]/page.tsx`, `pageContent.ts`, `pageContentHelpers.ts`, `sitemap.ts`, `Header.tsx`, `Footer.tsx`, `HomeHero.tsx`, `WhatWeDoSection.tsx`, `public/llms.txt` |
| 2026-11-21 | Reviews hidden (`SHOW_CUSTOMER_REVIEWS = false`): the "Customer Reviews" carousel (home, /free-quote, all service pages) and the quote in "100% Satisfaction Guarantee". Turn on with real Google reviews | `siteFlags.ts`, `TrustedByCustomersSection.tsx`, `SatisfactionGuaranteeSection.tsx` |
| 2026-11-21 | Service-area map fixed: always Dubai (fixed coordinates). Removed the US-template `useVisitorLocation` hook (default "Dallas, Texas", sent every visitor's IP to ipapi.co / ipinfo.io) and the failing Nominatim lookup | `ServiceAreaMap.tsx`, `ServiceAreaSection.tsx`, deleted `src/hooks/useVisitorLocation.ts` |
| 2026-11-21 | Removed `aggregateRating` (4.9 / 127) from the LocalBusiness schema: the Google Business Profile has 1 review. Add back only with real GMB numbers | `layout.tsx` |
| 2026-11-21 | Next.js 16.4.1 → 16.4.6 (+ `eslint-config-next`): fixes the security advisory; `npm audit` 0 vulnerabilities; `npm run dev` works again | `package.json`, `package-lock.json` |
| 2026-11-21 | /about-us gets an h1 ("About Prime Pest Control Dubai", was the h2 "About Us") | `AboutUsIntroSection.tsx` |
| 2026-11-21 | Hero: long headlines no longer run under the pest card (desktop: card is a flex column with `overflow: clip`, pest card in the flow with `margin-top: auto`; phone: headline padding-bottom matches the panel overlap). Checked on 13 pages at 800–1920px and 320–767px | `globals.css` |
| 2026-11-21 | One `<h1>` per page: the mobile hero title is now a `<p>` (same look; `.home .home-hero-mobile__title` added to the phone rule in `CRITICAL_CSS`); /contact-us gets an h1 ("Contact Prime Pest Control in Dubai") | `HomeHero.tsx`, `layout.tsx`, `ContactUsClient.tsx` |
| 2026-11-21 | GTM + GA4 load only on `www.primepestcontrol.ae` (localhost had been counted as 6 visitors / 28 page views); `gtag()` always defined | `layout.tsx` |
| 2026-11-21 | Contact form sends GA4 `generate_lead` + `whatsapp_click` (it opens WhatsApp with `window.open`, which the link listener never saw) | `ContactUsClient.tsx` |
| 2026-11-21 | `/free-quote` removed from `SEO_META` (it has its own page; the route was built twice) | `[slug]/page.tsx` |
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

- **Directory listings**: owner works through the Directories tab of the Business Listings sheet (Bing Places, Apple Business Connect, 2GIS, Yellow Pages UAE, Dubizzle, LinkedIn, Foursquare).
- **Content**: all 30 service pages have a guide (`serviceGuides.ts` + `serviceGuidesMore.ts`). Next: review older expertise texts and FAQs page by page.
- **More communities** (owner wants more later): 20 live (`communities.ts` + `communitiesMore.ts`). Next candidates: Arjan, Al Furjan, Town Square, Mudon, Dubai Investments Park, Al Qusais, Al Nahda, The Greens / The Views, Emirates Hills, Nad Al Sheba.
- **Prices in `prices.ts` are market-based**: owner to confirm or adjust each line once.
- **Short quote form on every page** (report §7, P2) and **real job photos** (lizard and snake pages use a shield icon) still to do.
- **After deploy of the merge**: check every old address 301s to its page on the live site, resubmit `sitemap.xml` in Search Console, and watch Search Console "Pages" for the old URLs dropping out.
- Phone hero: Pigeons and Mynahs icons use `specialty.webp` (a ladybird); needs real bird icons.

---

### 🔴 Important / Urgent

- **SEO + GA4 review 21 Nov 2026** (full report: `docs/seo-review-2026-11-21/Prime-Pest-Control-SEO-Lead-Review-2026-11-21.pdf`, raw Search Console + GA4 data in `docs/seo-review-2026-11-21/data/`). Waiting on the owner:
  - **Dubai Municipality approval / trade licence number**, years in business: needed for trust badges and NAP. The badge image (`TrustBadgesCombined`, in "100% Satisfaction Guarantee") shows Dubai Municipality "Approved", ISO 9001, ISO 14001 and NPMA: owner confirmed (26 Nov 2026) the business holds all of them, so the badge stays.
  - **Page plan v2** in `docs/seo-review-2026-11-21/merge-map.md`. Done (21 Nov): Q0 licences (owner has all approvals incl. termite, bird, fumigation), A merges, C address changes. Still open: Q3 which extra services they offer (move-in/out, lizards, snakes, disinfection, pre-construction termite), Q4 prices and visits per service, Q5 main communities. Then section D (new pages) and E (content).
  - **GA4 key events**: `phone_call_click` and `whatsapp_click` marked as key events, counting once per session (done 26 Nov 2026, checked in Admin > Events). `generate_lead` still to star once it has fired (send the contact form once with `?leadtest=1`).
- "Top Rated Customer Service" (Why Choose Us list, contact page): owner keeps it (26 Nov 2026); plan is 5+ Google reviews in the next 10 days. Once reviews are in, consider `SHOW_CUSTOMER_REVIEWS` and `aggregateRating` with the real GMB numbers.
- Service pages share ~78% of their text (only hero + expertise differ per page): unique content per money page is the main ranking job.

- **Review count**: the schema has no rating now. Once GMB has enough real reviews, add `aggregateRating` back with the exact GMB numbers and keep it in sync.
- **Sitemap submission** — submit `https://www.primepestcontrol.ae/sitemap.xml` to Google Search Console and Bing Webmaster Tools if not already done.

---

### 📋 Upcoming Tasks (Prioritised)

#### SEO / AEO / GEO

- [x] **Street address**: not shown (service-area business, decided 26 Nov 2026)
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
