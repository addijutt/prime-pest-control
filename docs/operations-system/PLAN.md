# Prime Ops: Operations System Plan

**Status:** plan, not started (written 27 Nov 2026). Nothing in this document is built yet.
**Goal:** one system that runs the whole business: leads, bookings, technicians, visits, chemicals, stock,
cash, invoices, salaries, annual contracts and automatic WhatsApp messages, and that feeds real bookings back
to Google Ads and Meta ads.

**Start here when building:** read this file, then `CLAUDE.md`. Build phase by phase (section 9). A ready
prompt for Claude Code is at the end.

---

## 1. Who uses it

| User | Device | What they do |
|---|---|---|
| **Owner** | Laptop and phone | Everything: dashboard, money, salaries, settings, reports |
| **Office / dispatcher** (later) | Laptop | Enquiries, bookings, assigning jobs, WhatsApp inbox, cash handover |
| **Technicians** (4 to 5 at the start) | Company Android phone | Their jobs for the day, status buttons, photos, chemicals used, cash collected, expenses |
| **Customers** | Their own WhatsApp | Receive updates, confirm or reschedule, pay by link, give a rating |

Technicians are not tech-savvy. Their app must have very large buttons, few words, icons, and English,
Urdu and Hindi (Arabic later). Everything they do should take one or two taps.

---

## 2. Modules

### 2.1 Customers and enquiries
- Every enquiry from any channel: website (with the Ref code and ad click ID from the lead tracker), Google
  Ads, Meta ads, Google Business Profile, direct WhatsApp, phone call, referral.
- Status: New, Quoted, Inspection booked, Job booked, Done, Lost (with reason, for example "Went to Dubai
  Municipality", "Price too high", "No reply").
- Customer record: name, phone (hidden from technicians), area, address, property type (villa, apartment,
  office, restaurant), WhatsApp consent, history of jobs, contracts, payments, ratings.
- Not-customers list: job seekers, sales calls, spam (kept, but never counted as leads).

### 2.2 Jobs, visits and car trips
- One **job** can have several **visits**: inspection, treatment, follow-up, warranty call-back, contract visit.
- Each visit = one car trip: assigned technician, planned date and time window, actual times from the status
  buttons (On my way, Arrived, Done), GPS point at Arrived and Done.
- Problems: customer not found (GPS + photo + time as proof, call-out fee AED 50 per `prices.ts`), reschedule,
  extra work found (new quote for customer approval), access issue, complaint.
- Job value, agreed technician commission for this job (commission depends on the job), warranty end date.

### 2.3 Treatment records
- Per visit: pests found, areas treated, method, chemicals used (product, quantity, dilution, batch), before
  and after photos, safety instructions given, re-entry time, customer signature.
- Generates the **treatment report PDF** for the customer (also useful for Dubai Municipality checks and
  commercial clients' audits).

### 2.4 Inventory
- Product list: name, active ingredient, Dubai Municipality registration number, unit and pack size, cost,
  supplier, safety data sheet, expiry.
- Stock locations: main store and **each technician's van**.
- Stock in (purchase with supplier invoice, batch, expiry), issue to technician (technician confirms in app),
  automatic use per visit, returns, damage and wastage with reason.
- Monthly stock count per technician: expected vs actual; differences flagged.
- Alerts: low stock, near expiry, reorder suggestion. Chemical cost per job, so profit per job is real.
- Equipment register: sprayers, foggers, bait stations, traps (who has it, service due).

### 2.5 Cash and payments
- Every payment linked to an invoice: cash, bank transfer, card or payment link, and **who received it**
  (company account or a technician).
- **Technician cash wallet:** running balance of money collected that must be handed over. When a technician
  keeps his agreed commission from a payment (as on the AED 350 job: he kept AED 150), it is recorded as
  commission settled from the wallet, and the job still shows the full value.
- Cash handover: recorded by the office, confirmed by the technician in the app; alerts when a balance is too
  high or overdue.
- Expenses: fuel, parking, Salik, small purchases; photo of the receipt, owner approves, reimbursed or taken
  off the cash balance.
- Daily cash book, bank reconciliation, unpaid invoices (including contract instalments).
- Invoices with VAT (5%) if VAT registered. Check UAE e-invoicing rules with the accountant before go-live.

### 2.6 Technicians and salaries
- Profile: base salary (all technicians), commission (only some technicians, amount set **per job**),
  allowances (food, transport, phone), overtime rule, bank / WPS details, visa, Emirates ID and labour card
  expiry dates, leave balance.
- Attendance from the app (first check-in, last job done) and leave requests.
- Commission counted only for jobs that are **done and paid**.
- Advances and deductions with reason (within UAE labour law limits).
- Monthly payroll: base + commissions + allowances + overtime - advances - deductions = net. Payslip PDF sent
  to the technician on WhatsApp. Payroll export for WPS (salary file for the bank or exchange house).
- End-of-service gratuity accrued monthly (UAE labour law).
- Performance: jobs done, revenue, ratings, call-backs and complaints, stock differences, late arrivals.

### 2.7 Annual contracts (AMC)
- Contract: customer, property, services, visits per year (for example 4 or 6), price, payment schedule,
  start and end date.
- All visits created automatically for the year; reminder before each visit; instalment invoices.
- Renewal offer 30 days before the end; renewal rate in the dashboard.

### 2.8 WhatsApp (Meta WhatsApp Cloud API, direct)
- Company WhatsApp number on the Cloud API. Messages sent automatically from system events (section 3).
- **Shared inbox inside the ops app:** office replies to customers from the company number. Technicians never
  see customer numbers.
- Customer replies (confirm, reschedule, rating) are read by the system and update the job.

### 2.9 Ads and marketing
- Booked and paid jobs sent back to **Google Ads** (offline conversions, using the gclid the website already
  saves) and **Meta** (Conversions API), with the real job value.
- Customer lists for re-marketing and look-alike audiences (only customers who gave consent).
- Repeat business: reminders after one-off jobs (for example 6 months), seasonal offers (mosquitoes before
  summer), warranty-ending reminders, referral messages.

### 2.10 Owner dashboard and reports
- Today: jobs, technicians on the road, problems, cash held by technicians.
- Month: revenue, jobs, conversion rate (enquiries to jobs), lost reasons, revenue by service, area and
  source (which ads pay off), average rating, contracts active and up for renewal, chemical cost, profit per job.
- Daily summary to the owner on WhatsApp.

---

## 3. Automatic messages and actions

**Customer (WhatsApp)**

| Trigger | Message | Meta category |
|---|---|---|
| New enquiry (outside a chat) | Thanks, we'll reply in minutes; ask for a photo of the problem | Utility |
| Job booked | Date, time window, price, **preparation tips for that pest** | Utility |
| Day before | Reminder with buttons: Confirm / Reschedule | Utility |
| Technician taps **On my way** | "Ahmed from Prime Pest Control is on the way, about 30 minutes" | Utility |
| Technician taps **Arrived**, no answer | "Our technician is at your door" | Utility |
| Technician taps **Done** | Treatment report PDF, safety and re-entry time, warranty end date, invoice + payment link | Utility |
| Payment received | Receipt | Utility |
| Next day | Rating 1 to 5; 5 gets the Google review link (https://g.page/r/CQtAAXyhoqatEBM/review); 1 to 3 alerts the owner | Utility |
| Follow-up due | Follow-up visit booking (per service, for example bed bugs after 14 days) | Utility |
| Contract visit due | Reminder before each contract visit | Utility |
| Contract ending | Renewal offer 30 days before | Marketing |
| 6 months after a one-off job | "Time for your next treatment?" | Marketing |
| Season | Mosquito, termite or bird offers | Marketing |
| Happy customer | Referral message | Marketing |

**Technicians:** daily job list each morning, new or changed job alert, cash handover reminder, payslip.
**Owner:** daily summary, low rating alert, customer-not-found alert, low stock and expiry alerts, overdue
cash, expiring visas and IDs, contracts up for renewal.

---

## 4. Protecting customer data and stopping side deals

1. Technicians never see customer phone numbers (database rules, not just hidden on screen).
2. Technicians see only today's assigned jobs: address, time, service, notes. No customer history or lists.
3. All customer messages go through the company WhatsApp number (shared inbox in the app).
4. Payment only to the company: payment link or company bank account. Never to a technician's account.
5. Office follow-up (rating message) after every job; ratings and complaints visible per technician.
6. Warranty valid only through the company number (sticker or card left at every job).
7. Company phones and SIMs for technicians; access removed instantly when someone leaves.
8. Commission per job so working through the company pays better.
9. Contract clauses (confidentiality, customer non-solicitation) worded by a UAE lawyer.
10. Every action logged (who did what, when).

---

## 5. Tech stack

| Part | Choice | Why |
|---|---|---|
| App | **Next.js + React + TypeScript + Tailwind** (same as the website) | One stack to maintain; the website stays a separate static site |
| Where | New repository `prime-ops`, at **app.primepestcontrol.ae** | Keeps the live website safe and simple |
| Technician app | **Installable web app (PWA)** from the same code | No app store; works on any Android; offline queue for poor signal |
| Database, login, files | **Supabase** (Postgres, Auth, Storage, Row Level Security, scheduled jobs) | Row Level Security enforces "technicians can't see phone numbers" in the database itself; photos and PDFs in Storage; backups on Pro |
| Hosting | **Vercel** (Pro) | Same host as the website; runs the API routes and the WhatsApp webhook |
| WhatsApp | **Meta WhatsApp Cloud API, direct** | No provider fee; full control; shared inbox built into the app |
| Payments | **Stripe Payment Links** (alternatives: Ziina, N-Genius, Telr) | Works in the UAE, no monthly fee, webhook marks invoices paid |
| PDFs | React PDF | Invoices, treatment reports, payslips, contracts |
| Ads | Google Ads API (offline conversions), Meta Conversions API | Bookings and value back to the ad platforms |
| Maps | Google Maps links only (no paid Maps API) | Free; technician taps to open navigation |
| Errors | Sentry (free tier) | Know when something breaks |

Choose the Supabase region closest to the UAE and check UAE data protection (PDPL) requirements.

### Main data tables
`customers`, `properties`, `enquiries`, `jobs`, `visits`, `visit_events` (status + GPS + time),
`treatments`, `treatment_chemicals`, `photos`, `products`, `stock_locations`, `stock_movements`,
`stock_counts`, `equipment`, `invoices`, `payments`, `cash_wallet_entries`, `expenses`, `technicians`,
`attendance`, `leave`, `commissions`, `payroll_runs`, `payslips`, `advances_deductions`, `contracts`,
`contract_visits`, `whatsapp_messages`, `whatsapp_templates`, `consents`, `audit_log`, `settings`.

---

## 6. Costs

Prices checked 27 Nov 2026; check again before signing up. USD to AED at about 3.67.

### One-time
| Item | Cost | Notes |
|---|---|---|
| Building the system | **No license fee** | Built with Claude Code in this repo setup; you own the code. If you hire a developer instead, get quotes |
| Meta Business verification and WhatsApp Cloud API setup | **Free** | Needs trade licence and a verified Meta Business account |
| Phone number for the WhatsApp API | A new SIM (small one-time cost) | Or move your current number; Meta also offers "coexistence" (Business app + API on one number), check if available for your account |
| Company phones for 4 to 5 technicians | Basic Android phone per technician | Any recent Android with a camera and GPS; buy locally |
| Domain `app.primepestcontrol.ae` | **Free** | Subdomain of the existing domain |
| Stripe account | **Free** | Needs trade licence and UAE bank account |

### Monthly
| Item | Cost | Source |
|---|---|---|
| Supabase Pro (database, logins, files, backups) | **USD 25 (about AED 92)** | [Supabase pricing](https://supabase.com/pricing); free tier is enough while building |
| Vercel Pro (hosting) | **USD 20 (about AED 73)** platform fee, extra builder seats USD 20 each, viewer seats free | [Vercel Pro](https://vercel.com/docs/plans/pro-plan); the live website may already need Pro for business use |
| WhatsApp messages | **About AED 75 to 150** at the start (estimate) | Per delivered template message: UAE utility about USD 0.016, marketing about USD 0.05 (third-party figures, verify on [Meta's rate card](https://developers.facebook.com/docs/whatsapp/pricing)); replies inside a 24-hour chat are free. Example: 150 jobs a month x 6 updates = 900 utility (about USD 14) + 300 marketing (about USD 15). Meta lists AED billing from April 2026 |
| Card payments | **2.9% + AED 1 per card payment**, no monthly fee | [Stripe UAE pricing](https://stripe.com/ae/pricing); bank transfers cost nothing |
| Sentry, Google Maps links | **Free** | |
| **Total fixed monthly** | **About AED 250 to 330**, plus card fees | Grows slowly with messages and storage |

Not included: technician salaries and phones' SIM plans, Google Workspace (only if you want company email
accounts), accountant fees.

---

## 7. What the owner needs to prepare

1. **Meta Business account verified** (trade licence), then a WhatsApp Business Account and display name
   "Prime Pest Control" approved.
2. **Decide the WhatsApp number** for the API (new SIM, or move the current 055 304 5256 carefully; check the
   coexistence option first so the current number keeps working on the phone).
3. **Stripe** (or another gateway) account in the company name, linked to the company bank account.
4. **Service and price list** (already in `src/config/prices.ts`), follow-up rules per service, warranty
   rules, annual contract packages.
5. **Chemicals list:** product names, DM registration numbers, pack sizes, costs, current stock.
6. **Technicians list:** names, base salaries, allowances, who gets commission, typical commission per job
   type, visa / Emirates ID expiry dates.
7. **Company phones** for technicians.
8. Accountant: VAT registration status and e-invoicing timeline; lawyer: contract clauses.

---

## 8. Rules for the build

- Technician screens: very large buttons, icons, English / Urdu / Hindi, works with poor signal (offline
  queue), never shows customer phone numbers.
- Every money movement is a record (no editing totals by hand).
- Every automatic message uses an approved Meta template; respect opt-out ("STOP").
- Same writing rules as the website: no em dashes, no colons in headings.
- Show the owner screenshots (desktop and phone) before saying a feature is done.

---

## 9. Phases

### Phase 1: Core operations (about 2 to 3 weeks)
- Supabase project, roles (owner, office, technician), Row Level Security.
- Customers, enquiries (manual entry + import from the lead sheet), jobs, visits.
- Technician PWA: today's jobs, **On my way / Arrived / Done / Problem**, GPS + time, photos.
- WhatsApp Cloud API: templates approved; booking confirmation, day-before reminder, on my way, done,
  rating + Google review link.
- Cash wallet and handover; commission per job recorded on the job.
- Owner dashboard (today and this month).
- Import the existing jobs (for example the AED 350 job: value 350, bank transfer to the technician, AED 150
  agreed commission kept, AED 200 handed over, 2 visits).

### Phase 2: Money, stock and contracts
- Invoices (VAT), Stripe payment links and webhook, receipts, unpaid invoices.
- Expenses with receipt photos.
- Inventory: products, store and van stock, issue, automatic use per visit, stock counts, alerts.
- Treatment report PDF.
- Annual contracts: automatic visits, reminders, instalments, renewals.
- Shared WhatsApp inbox in the app.

### Phase 3: Payroll, ads and growth
- Payroll: attendance, commissions, allowances, advances, payslips on WhatsApp, WPS file, gratuity,
  document expiry alerts.
- Google Ads offline conversions and Meta Conversions API with job value.
- Marketing automations: 6-month reminders, seasonal offers, referrals, warranty ending.
- Reports: profit per job, per service, per area, per technician, per ad source.

---

## 10. Prompt to start building (paste into Claude Code)

> Read `docs/operations-system/PLAN.md` and `CLAUDE.md`. We are building Prime Ops, the operations system
> described in the plan, in a new repository `prime-ops` (Next.js, TypeScript, Tailwind, Supabase, Vercel,
> Meta WhatsApp Cloud API). Start with Phase 1. First list what you need from me (accounts, keys, lists),
> then propose the database schema and screens for Phase 1 for my approval before writing code. Never commit
> or push unless I ask, keep a CLAUDE.md in the new repo up to date, and show me desktop and phone screenshots
> before saying a feature is done.
