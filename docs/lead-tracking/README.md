# Lead tracking sheet: setup (about 5 minutes)

The website logs every WhatsApp tap, phone tap and contact form send to the Google Sheet
**Prime Pest Control Leads (WhatsApp & Calls)**:
https://docs.google.com/spreadsheets/d/1SuwZPOCvJgsef12X1W5kq0BMqD3w3p2xQlTLVQNt8-0/edit

One row per tap, with the page, the button, where the visit came from (Google, ads, Instagram,
ChatGPT, direct...), the device, a reference code and, for visits from a Google ad, the ad click ID.
No personal data is stored (no name, phone number, IP address or message text).

**Web app URL (live):** `https://script.google.com/macros/s/AKfycbzGD9csRlrIDIARV7pEUPpBqe6eVWycYBSRbpGVCgOnwFC-_A7VbBl7eSb10ozweEb4/exec`
(in `src/config/leadLog.ts`). The deployment must have **Who has access: Anyone**; with anything else Google
answers 401 and no rows arrive.

## 1. Add the receiver to the sheet (one time)

1. Open the sheet, then **Extensions > Apps Script**.
2. Delete everything in the editor and paste the contents of `docs/lead-tracking/apps-script.gs`.
3. Click **Save**.
4. Click **Deploy > New deployment**. Type: **Web app**.
   - Description: `Lead log`
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**, allow the permissions Google asks for (it needs to write to this sheet), and copy the
   **Web app URL** (it ends in `/exec`).

## 2. Connect the website

1. Paste the URL into `src/config/leadLog.ts`:
   `export const LEAD_LOG_URL = 'https://script.google.com/macros/s/.../exec';`
2. Build and deploy the site.

## 3. Test

Open any page with `?leadtest=1` added, for example
`https://www.primepestcontrol.ae/cockroach-control-dubai?leadtest=1`, and tap a WhatsApp or call button.
A row appears on the Leads tab within a few seconds, marked **Test = Yes** and greyed out. Test rows are left
out of the Dashboard. The same works on a preview deployment or on localhost with `?leadtest=1`.

Real leads are only logged on `www.primepestcontrol.ae`.

## Columns on the Leads tab

| Column | Filled by | What it is |
|---|---|---|
| A to K | website | Time, action, page, button, landing page, source, medium, campaign, referrer, device |
| L Ref (in WhatsApp) | website | 6-character code, the same for the whole visit. Every WhatsApp message from the site ends with "Ref: K7Q2X9", so a chat can be matched to its row |
| M Test | website | Yes for `?leadtest=1` rows (left out of the Dashboard) |
| N Ad click ID, O Click type | website | Google Ads click ID (gclid, or gbraid / wbraid on iPhones) when the visit came from an ad in the last 90 days |
| P Booked?, Q Job value (AED), R Booked on | **you** (yellow headers) | Fill in when the customer books and the job is done |

## Google Ads: report booked jobs back to Google (when ads run)

The site already sends `whatsapp_click`, `phone_call_click` and `generate_lead` to GA4. When campaigns
start, import those into Google Ads as conversions (Google Ads > Goals > Conversions > Import > Google
Analytics 4). That teaches Google which searches lead to contact.

To teach Google which searches lead to **paid jobs** (better results for the same budget):

1. In Google Ads create a conversion action: Goals > Conversions > New conversion action > Import >
   Other data sources or CRMs > Track conversions from clicks. Name it **Booked job** (it must match
   cell C5 on the "Ads settings" tab), value: "Use different values for each conversion", count: One.
2. When a WhatsApp chat starts, find its row by the Ref code at the end of the message (for calls: the time
   and page). When the job is booked and done, set **Booked? = Yes**, the **Job value** and **Booked on**.
3. The **Google Ads upload** tab lists every booked row that has an ad click ID, already in the format
   Google Ads asks for. Upload it weekly (Goals > Conversions > Uploads, choose Google Sheets or a CSV
   download), or set a schedule there so Google Ads reads the tab by itself.
4. Rows must be uploaded within 90 days of the ad click. Test rows are never included.

Once about 15 to 30 booked jobs a month come from ads, switch the campaign bidding to "Maximise
conversion value" with the Booked job conversion as the goal.

## Changing the script later

After editing the Apps Script, use **Deploy > Manage deployments > Edit > Version: New version** so the URL
stays the same. A brand new deployment gets a new URL, which would then need to go into `leadLog.ts` again.

## Files

| File | What it does |
|---|---|
| `src/components/LeadLogger.tsx` | Listens for WhatsApp and phone taps on every page, adds the Ref line to WhatsApp messages |
| `src/utils/leadLog.ts` | Works out the visit source, button and device, and sends the row |
| `src/config/leadLog.ts` | The sheet's web app URL, token and live host |
| `src/app/contact-us/ContactUsClient.tsx` | Logs contact form sends as "Form" |
| `docs/lead-tracking/apps-script.gs` | The receiver that writes rows into the sheet |
