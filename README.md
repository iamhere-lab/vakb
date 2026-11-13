# Vaishnavi AT-ONE Krishna Brindavan — landing page

Static site, no build step. Upload the folder as-is (GitHub Pages, Vercel, Hostinger, cPanel, any static host).

## Files
- `index.html`            — the page (all copy lives here)
- `thank-you.html`        — shown after a successful enquiry
- `privacy-policy.html`   — privacy policy (unchanged)
- `assets/css/styles.css` — layout, with the VAKB theme (colours, fonts) at the end of the file
- `assets/js/config.js`   — phone, WhatsApp, lead endpoint, popup delay
- `assets/js/main.js`     — forms, popup, gated floor plans, lightbox, tabs
- `assets/img/`           — project images and logos (served locally)

## Tracking and lead delivery (unchanged from the previous page)
- Google Tag Manager `GTM-M7QC5JXZ` and Google Ads tag `AW-18381098301` are in the `<head>` of all three pages.
- Leads post to the same Google Apps Script web app (URL in `config.js`) with the same field names:
  `source, project, name, phone, email, configuration, consent, page_url, submitted_at, ip_address`.
- New extra fields are also sent: `country_code, intent, form_id, lead_id`, UTM values, `gclid`/`fbclid`,
  `landing_page`, `referrer`. Add matching columns in the Apps Script / Sheet if you want them recorded.

## Still to set
- `thank-you.html`: the Google Ads conversion snippet is still the commented placeholder (`AW-XXXXXXXXXX`).
- `config.js`: `whatsappNumber` (WhatsApp buttons stay hidden until set), optional `siteUrl`, `brochureUrl`.
