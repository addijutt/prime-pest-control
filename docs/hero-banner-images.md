# Hero banner images (first screen of every page)

The hero at the top of every page (home, 32 service pages, 22 area pages) is built from **two images**:

| Layer | Current file | What it is |
|---|---|---|
| 1. Background | `public/assets/img/pest_control_near_me.webp` (1920 × 1280) | A street with a blurred building. Stock look, two pale round lights that look like slider dots, light area behind the white headline |
| 2. Technician | `public/assets/img/hero-guy-transparent.png` (428 × 560) | A stock-style model with the Prime logo, cut out on a transparent background. Too small: looks soft on large and retina screens |

The goal is a **real Prime technician** on a **real Dubai background**. Customers trust real people more than a
model, and it is the strongest trust signal we can put in the first screen.

You need **2 new images** (plus 2 optional ones). Both are reused on every page and every screen size, so the
framing rules below matter.

---

## Image 1: Technician cut-out (the most important one)

**What it shows:** one real Prime technician, friendly natural smile, looking at the camera, in a clean Prime
uniform (shirt with logo, cap with logo). Holding a sprayer, a bait gun or a tablet is good: it shows the job.

**How to shoot it**
- Plain backdrop: a white or light grey wall (or a green screen), so the person can be cut out cleanly.
- Soft, even light from the front, no hard shadows on the face. Daylight from a window or two lamps.
- Frame from **mid-thigh up to just above the cap**, with a little space above the cap (about 5% of the height).
- Body turned slightly **towards the left** (towards the headline), face and eyes to the camera.
- Keep both arms and anything in the hands **inside the frame**. Nothing may be cut off at the left edge: on the
  site the left side of the person is always visible.
- Camera at chest height, a bit back with zoom (50 to 85 mm on a phone's 2x or 3x lens), so the body is not
  distorted.
- Take 20 to 30 shots with different poses; pick the most natural one.

**Why the framing matters (how the site uses it)**

```
DESKTOP / LAPTOP (wider than 768 px)          PHONE (up to 767 px)
┌────────────────────────────┬─────────┐      ┌──────────────────────┐
│ Headline                   │  ┌───┐  │      │ Headline      ┌──────│──┐
│ ✔ proofs                   │  │ ☺ │  │      │ ✔ proofs      │  ☺   │  │
│ [WhatsApp button]          │  │/█\│  │      │ [button]      │ /█\  │  │ <- right ~30% of the
│ ┌ pests card ┐             │  │ █ │  │      │ chips         │  █   │  │    cut-out is off screen
└────────────────────────────┴──┴───┴──┘      └───────────────└──────┘──┘
  person stands on the bottom edge,              person hangs from the top,
  right side, full card height                   shifted to the right
```

- **Desktop:** the person stands on the bottom edge of the banner, on the right, and fills its full height (up to
  about 720 px tall on large screens). Up to 38% of the banner width.
- **Phone:** the person is anchored at the top and pushed to the right, so about the **right 30% of the cut-out
  is cut off**. The **face and the logo on the chest must be in the left 65%** of the image. A raised arm on the
  right side may be cut; the face may not.
- **Phone:** the headline and the button sit over the lower left of the person, so the face must be in the **top
  third** of the image.

**File to deliver**
- Transparent background, cut out cleanly (hair and cap edges smooth, no white halo).
- Portrait, about **3 : 4** (for example 1200 × 1600 px). At least **1500 px tall**, ideally 1900 px (sharp on
  retina laptops and phones).
- Save as **WebP with transparency**, under **300 KB** (squoosh.app: WebP, quality 80, keep alpha). Keep the
  full-size PNG as the master.
- Name: `public/assets/img/hero-technician.webp`

---

## Image 2: Background

**What it shows:** a real Dubai setting where we work, **without people**: the entrance of a villa in a
community (Arabian Ranches, Springs style), a tower lobby or a residential street with palm trees. The Prime
van parked on the right half is a strong extra if it looks clean.

**Rules**
- **Calm, darker left half.** The white headline, proofs and button sit on the left 55%. A shaded wall, greenery
  or a darker sky works; bright white buildings or sky behind the text do not.
- **Interest in the middle and right**, where the person stands in front of it.
- **No round lights, bokeh balls or reflections** (they look like slider dots), no readable street signs, no car
  number plates, no other company's branding.
- Slightly out of focus is fine and even good: the person and the text should be the sharpest things.
- Shoot in the early morning or late afternoon light, not harsh midday sun.

**How the site crops it (keep the important part in the safe zone)**

```
Full photo, 3 : 2 (for example 2400 × 1600)
┌──────────────────────────────────────────────┐
│ top ~10% may be cut on wide screens          │
│        ┌─────────────────────┐               │
│ text   │ PHONE shows only    │  person       │
│ area   │ this band (about    │  stands       │
│ (keep  │ 48% to 84% of the   │  here on      │
│ calm,  │ width, full height) │  desktop      │
│ dark)  └─────────────────────┘               │
│ bottom ~10% may be cut on wide screens       │
└──────────────────────────────────────────────┘
```

- **Desktop:** the whole width shows; on wide screens about 10% is cut from the top and from the bottom.
- **Phone:** only a tall strip from about **48% to 84% of the width** shows (the banner is portrait there). That
  strip should still look good on its own: for example the villa door, a palm tree or the van.

**File to deliver**
- Landscape **3 : 2**, at least **2400 × 1600 px**.
- WebP, quality 75 to 80, under **250 KB**.
- Name: `public/assets/img/hero-background.webp`

---

## Optional extra images (later)

| # | Image | Use |
|---|---|---|
| 3 | Second technician cut-out (another team member, or one person in protective gear for bed bugs / disinfection) | Different face on business or bed bug pages |
| 4 | Business background (restaurant kitchen, office or warehouse, no people) | Hero on Commercial, Restaurant, Office and Fumigation pages |

Same rules as images 1 and 2. The site uses one hero image set for every page today; ask Claude to "use
image 3 / 4 on the business pages" once they exist.

---

## Checklist before sending the photos

- [ ] Real Prime technician, uniform clean, logo visible, cap on
- [ ] Face and chest logo in the left 65% and the top third of the cut-out
- [ ] Nothing cut off at the left edge of the person
- [ ] Cut-out: transparent background, at least 1500 px tall, WebP under 300 KB
- [ ] Background: no people, calm and darker left half, no round lights, no plates or other brands
- [ ] Background: at least 2400 × 1600, WebP under 250 KB
- [ ] The technician agreed to be shown on the website

## Adding them to the site (Claude or the developer)

1. Save the files as `public/assets/img/hero-technician.webp` and `public/assets/img/hero-background.webp`.
2. In `src/components/HomeHero.tsx`, change both `src="/assets/img/hero-guy-transparent.png"` to
   `src="/assets/img/hero-technician.webp"`.
3. In `src/app/globals.css`, change both `url(/assets/img/pest_control_near_me.webp)` (in `.home-hero__card` and
   `.home-hero-mobile__photo`) to `url(/assets/img/hero-background.webp)`.
4. Check the hero on a large screen, a 1366 × 768 laptop and a 390 px and 360 px phone: face fully visible,
   headline easy to read, button above the fold. If the face is too low or cut on phones, adjust
   `object-position` / `right` in `.home-hero-mobile__guy`.

Prompt for Claude Code: *"The new hero images are in public/assets/img (hero-technician.webp and
hero-background.webp). Put them in the hero as described in docs/hero-banner-images.md and show me desktop and
phone screenshots."*
