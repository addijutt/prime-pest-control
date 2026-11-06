# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (localhost:3000)
npm run build     # static export → out/
npm run lint      # ESLint
npx tsc --noEmit  # type check without emitting
```

## Stack

- **Next.js 16.4.1** App Router, **React 19**, **TypeScript 5**, **Tailwind CSS 4**
- `output: 'export'` in `next.config.ts` — this is a **static site**. No server components, no API routes, no `getServerSideProps`. Everything must be statically renderable.
- `images.unoptimized: true` — use plain `<img>` tags, not `next/image`.
- Path alias: `@/*` → `./src/*`

## Architecture

### Routing

There are only two route files:

| File | Route |
|------|-------|
| `src/app/page.tsx` | `/` (homepage) |
| `src/app/[slug]/page.tsx` | All service pages (e.g. `/cockroach-exterminator-near-me`) |

Every service page renders the **exact same section layout** as the homepage: `HomeHero → UrgencySection → WhatWeDoSection → ServiceAreaSection → WhyCallUsSection → TrustedByCustomersSection → WhyChooseUsSection → FreeQuoteSection → SatisfactionGuaranteeSection → FaqSection`.

Valid slugs are defined in `SEO_META` inside `src/app/[slug]/page.tsx`. Adding a new service page requires an entry in both `SEO_META` (for metadata/routing) and `PAGE_CONTENT` in `src/config/pageContent.ts` (for content).

### Page Content System

`src/config/pageContent.ts` is the central content registry — a `Record<string, PageContent>` keyed by pathname (e.g. `'/cockroach-exterminator-near-me'`). Access it with `getPageContent(pathname)`.

Each `PageContent` entry has:
- `hero.headline` — the H1
- `hero.pestIcons` — array of `PestImageRef` for the pest grid
- `expertise` — title, subtitle, service grid images, bullet checklist
- `faqs` / `faqTitle` — optional FAQ overrides

All sections have sensible hardcoded defaults so entries in `PAGE_CONTENT` only need to override what differs from the homepage defaults.

### Pest Image System (`src/config/pageContentHelpers.ts`)

Pest images follow the convention `/assets/img/pests/{key}.webp` (base), `{key}-d.webp` (desktop), `{key}-m.webp` (mobile).

Use the `pest(label, href?, imageKey?)` helper to create `PestImageRef` objects. If the image key doesn't have a matching asset, add it to `PEST_IMAGE_FALLBACKS` in `pageContentHelpers.ts` to map it to an existing asset.

### CSS Architecture

- `src/app/globals.css` — starts with `@import "tailwindcss"` then custom CSS. No CSS modules used anywhere.
- `CRITICAL_CSS` string in `src/app/layout.tsx` — inlined as a `<style>` tag in `<head>`. This controls hero `margin-top` positioning. **Important:** in Next.js App Router the linked `globals.css` loads before the inline `<style>` tag in the cascade, so `!important` rules in `CRITICAL_CSS` override `globals.css` rules at the same specificity. Be careful adding `!important` to either location.
- Responsive breakpoints in use: `768px` (mobile/desktop split), `767px`, `480px`.
- Fonts: Nunito Sans (primary), Oswald, Roboto — loaded via Google Fonts in `layout.tsx`.
- Font Awesome 6 is loaded via CDN for icons.

### Phone & Contact Utilities (`src/utils/formatPhone.ts`)

Always use `noBreakPhone(phone)` when rendering a phone number in JSX — it prevents mid-number line breaks. Constants:
- `PHONE_DISPLAY` = `'055 304 5256'`
- `PHONE_RAW` = `'+971553045256'`
- `WHATSAPP_URL` = `'https://wa.me/971553045256'`

Never hardcode phone strings directly in JSX. Each component currently declares its own local `phone` / `whatsappUrl` constants — keep that pattern.

### Image Exports (`src/utils/images.ts`)

All named image path exports live here. Import from this file rather than hardcoding `/assets/img/...` paths directly in components.

### Key Components

- `FloatingWhatsApp` — fixed floating call + WhatsApp buttons with slide-in label on hover (defined in `globals.css` via `.floating-btns__label`)
- `Header` — fixed navbar with desktop dropdowns + mobile right-side drawer. Phone displayed as `Call 24/7: {phone}`
- `HomeHero` — dual desktop/mobile layout. Desktop: card with pest grid. Mobile: photo panel + pest selector panel + benefits list
- `ServiceAreaSection` — uses `useVisitorLocation` hook to personalise city/region display
- `dynamic-href` / `dynamic-phone` CSS class names — applied to CTA links/spans so a client-side script can swap URLs or phone numbers based on visitor location

### Tracking

- GTM: `GTM-MND7JS6X`
- Google Ads: `AW-17105539352` with phone click conversion `AW-17105539352/Ec_9CJLs87AbEJiix9w_`
- Both configured in `src/app/layout.tsx`

## Business Details

- **Company**: Prime Pest Control Dubai
- **Phone**: 055 304 5256 (`+971553045256`)
- **WhatsApp**: `https://wa.me/971553045256`
- **Domain**: `https://www.primepestcontrol.ae`
- **Services**: Pest control (cockroaches, bed bugs, termites, rodents, ants, mosquitoes, wasps, fleas, scorpions, etc.) + bird control (pigeons, mynahs, crows, sparrows, bird netting/proofing) across Dubai
- **Pricing reference**: AED 299 promo, AED 299–2000 range (in schema)
