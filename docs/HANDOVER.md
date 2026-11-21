# Handover: SEO, content and lead tracking work (21 Nov 2026)

**Branch:** `seo-content-overhaul`. **Not live.** The live site (`main`) is unchanged.
Everything below is on this branch until the images are added and it is merged into `main`.

If Vercel builds a preview for this branch, the preview is on a `*.vercel.app` address, which
`vercel.json` already marks `noindex`, and Google Analytics / Tag Manager only run on
`www.primepestcontrol.ae`, so a preview does not affect Google or the visitor numbers.

Full project notes for developers and for Claude: `CLAUDE.md` (read it first).

---

## 1. What was done

**Technical**
- One `<h1>` per page; h1 added to Contact and About.
- Google Analytics 4 and Tag Manager only load on the live domain (previews and localhost no longer count).
- Contact form sends a `generate_lead` event to GA4.
- Next.js upgraded 16.4.1 → 16.4.6 (security advisory fixed).
- Fake review markup (4.9 / 127) removed; made-up testimonials hidden (`src/config/siteFlags.ts`).
- Service-area map fixed (was "Dallas, Texas" from a US template and sent visitor IPs to outside services).
- Opening hours set to **24/7** everywhere on the site and in Google's structured data.
- "Bur Dubai" removed everywhere.

**Structure**
- 44 competing/US-style pages merged into strong Dubai pages, 30 permanent redirects in `vercel.json`
  (old links keep working). "Near me" addresses changed to "-dubai" addresses.
- Crow and Sparrow pages merged into Bird Control (no search demand of their own).

**Content**
- **32 service pages**, each with its own Dubai guide (answer, problem, signs, treatment steps, safety,
  prevention, prices, FAQs). New: villa, apartment, move-in/move-out, lizards, snakes, disinfection,
  pre-construction anti-termite, fumigation, restaurant, office, fly control.
- **22 community pages** (Dubai Marina, JVC, JLT, Al Barsha, Arabian Ranches, Dubai Hills, Al Barari, Mirdif,
  Palm Jumeirah, Discovery Gardens, Business Bay, Downtown, Jumeirah, Silicon Oasis, Springs & Meadows,
  Jumeirah Park & Islands, DAMAC Hills, Motor City / Sports City / Studio City, International City, Deira,
  Dubai South, Dubailand).
- Bird control now covers netting, spikes, wire, gel and solar panel mesh.
- US pest species removed from every pest grid; Dubai species and "signs" tiles added.

**Design**
- New sections built in the site's existing style; page order rebuilt for conversions; duplicate
  call-to-action sections removed; mobile and tablet checked on every page.

**Prices**
- All prices live in one file: `src/config/prices.ts`. Change a number there and it updates everywhere
  (price cards, text, and the price Google sees). Current prices are market-based and need the owner's
  confirmation: `docs/prices-for-review-whatsapp.txt` is a ready WhatsApp message for that.

**Lead tracking**
- Google Sheet "Prime Pest Control Leads (WhatsApp & Calls)" with a live dashboard:
  https://docs.google.com/spreadsheets/d/1SuwZPOCvJgsef12X1W5kq0BMqD3w3p2xQlTLVQNt8-0/edit
- The website code is ready; it only needs the sheet's Apps Script deployed (section 3).

**Reports**
- `docs/seo-review-2026-11-21/`: SEO and GA4 review (PDF), page merge plan, service gap analysis.

---

## 2. What is left before going live

### A. Images (the main job)
1. **Photos (110):** `docs/photo-shot-list.md` lists every photo by page and what it should show.
   Real job photos, landscape 4:3, at least 1200 × 900 px, no customer faces or flat numbers.
   - Save as WebP in `public/assets/img/jobs/`, e.g. `cockroach-control-dubai-intro.webp`.
   - In `src/config/serviceGuides.ts`, `serviceGuidesMore.ts`, `communities.ts` or `communitiesMore.ts`,
     add `src: '/assets/img/jobs/<file>.webp'` to that page's photo brief.
   - Until a photo is added, the preview (`npm run dev`) shows a labelled placeholder, and the live site
     shows an existing team photo, so going live with some photos missing is safe.
2. **Pest images (58 + 2 to replace):** `docs/pest-image-list.md` lists every pest tile that uses a stand-in
   image, with the file name and what it should show (cut-out on white, 3 sizes). After adding the files,
   remove the key from `PEST_IMAGE_FALLBACKS` in `src/config/pageContentHelpers.ts`.
   The existing `mynah` image shows a bird of prey and `house-crow` has a yellow background: replace both.

### B. Information from the owner
- Confirm or change the prices (`docs/prices-for-review-whatsapp.txt`), warranty days per service, VAT,
  call-out charge, and whether to keep the "AED 299 special" offer.
- Dubai Municipality licence / approval numbers, street address, years in business (for trust badges and
  Google). Check which badges are real: the badge image shows DM Approved, ISO 9001, ISO 14001 and NPMA.
- Google Business Profile: set the hours to **Open 24 hours** (it still says "Closes 10 PM").

### C. Lead sheet (5 minutes, needs the sheet owner's Google account)
Follow `docs/lead-tracking/README.md`: paste `docs/lead-tracking/apps-script.gs` into the sheet
(Extensions > Apps Script), deploy as a web app, and put the URL in `src/config/leadLog.ts`.

### D. Going live
1. `npx tsc --noEmit && npm run lint && npm run build` must pass.
2. Merge `seo-content-overhaul` into `main` and push; Vercel deploys the live site.
3. On the live site, check a few old addresses redirect (e.g. `/roach-exterminator-near-me`,
   `/crow-control-dubai`) and that pages load.
4. Google Search Console: resubmit `https://www.primepestcontrol.ae/sitemap.xml`.
5. GA4 Admin > Events: mark `phone_call_click`, `whatsapp_click` and `generate_lead` as key events.
6. Test the lead sheet: open a page with `?leadtest=1` and tap WhatsApp; a grey test row appears.

### E. Later improvements (from `docs/seo-review-2026-11-21/service-gap-analysis.md`)
- Warranty terms on every page; Dubai Municipality free-service FAQ; flying cockroach FAQ;
  bed bug inspection price; pantry and fabric pests page; water tank cleaning (only with DM approval).
- Trust badge section with the licence number once the owner provides it.
- A short quote form on every page.
- More community pages (Arjan, Al Furjan, Town Square, Mudon, Al Qusais, Al Nahda, The Greens, Emirates Hills).

---

## 3. Continue in Claude Code

Open the project folder in Claude Code, check out the branch, and paste this prompt:

```
Read CLAUDE.md and docs/HANDOVER.md first. We are on branch seo-content-overhaul, which is not live yet.
Continue from section 2 of the handover:
1. I added these photos and pest images: [list the files you added]. Wire each photo into its brief
   (src field) and remove the replaced pest keys from PEST_IMAGE_FALLBACKS. Show me desktop and phone
   screenshots of the pages that changed.
2. Here are the owner's answers to the price review: [paste the WhatsApp reply]. Update
   src/config/prices.ts (prices change only there) and add the warranty to the price cards and FAQs.
3. Here is the lead sheet web app URL: [paste]. Put it in src/config/leadLog.ts.
Run tsc, lint and build after each step, keep CLAUDE.md up to date, and do not merge into main or push
until I ask. Rules: no em dashes, no colons in headings, prices only via prices.ts.
```

Replace the brackets with what you have; leave out any step you are not ready for.
