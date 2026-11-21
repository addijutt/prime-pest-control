# Lead tracking sheet: setup (about 5 minutes)

The website logs every WhatsApp tap, phone tap and contact form send to the Google Sheet
**Prime Pest Control Leads (WhatsApp & Calls)**:
https://docs.google.com/spreadsheets/d/1SuwZPOCvJgsef12X1W5kq0BMqD3w3p2xQlTLVQNt8-0/edit

One row per tap, with the page, the button, where the visit came from (Google, ads, Instagram,
ChatGPT, direct...), the device and a random visit ID. No personal data is stored.

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

## Changing the script later

After editing the Apps Script, use **Deploy > Manage deployments > Edit > Version: New version** so the URL
stays the same. A brand new deployment gets a new URL, which would then need to go into `leadLog.ts` again.

## Files

| File | What it does |
|---|---|
| `src/components/LeadLogger.tsx` | Listens for WhatsApp and phone taps on every page |
| `src/utils/leadLog.ts` | Works out the visit source, button and device, and sends the row |
| `src/config/leadLog.ts` | The sheet's web app URL, token and live host |
| `src/app/contact-us/ContactUsClient.tsx` | Logs contact form sends as "Form" |
| `docs/lead-tracking/apps-script.gs` | The receiver that writes rows into the sheet |
