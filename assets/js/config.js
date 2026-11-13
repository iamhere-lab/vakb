/*
 * Vaishnavi AT-ONE Krishna Brindavan landing page: deployment configuration.
 * Everything that differs between preview and production lives here.
 * Nothing secret belongs in this file: it is shipped to the browser.
 */
window.SS_CONFIG = {
  /* Lead delivery: the same Google Apps Script web app the page has always posted to.
   * It writes each enquiry to the Google Sheet. */
  leadEndpoint: "https://script.google.com/macros/s/AKfycbzkbDwYnUQSINKKTJoqXRui7NogVS_5ww7j2EUrTsXhqW_5W081FNsI9voa5k66Nzk2Aw/exec",

  /* "formdata" = multipart FormData POST with no-cors (what the Apps Script expects; unchanged).
   * "form" = URL-encoded POST (Pabbly / Zapier / Make webhooks). "json" = JSON POST. */
  leadEndpointMode: "formdata",
  leadEndpointSimpleRequest: false,

  /* Redirect here after a submission. The thank-you page carries the conversion tags. */
  thankYouUrl: "thank-you.html",

  /* Google Tag Manager (GTM-M7QC5JXZ) and the Google Ads tag (AW-18381098301) are hard-coded
   * in the <head> of every page, exactly as before. Leave this empty so GTM is not loaded twice. */
  gtmId: "",

  /* Phone shown on the page. */
  phoneDisplay: "98459 66334",
  phoneE164: "+919845966334",

  /* WhatsApp number, digits only with country code, e.g. "919845966334".
   * All WhatsApp buttons stay hidden until this is set. The previous page had no WhatsApp link. */
  whatsappNumber: "",
  whatsappMessage: "I am interested in Vaishnavi AT-ONE Krishna Brindavan, Banashankari. Please share price and floor plans.",

  /* Optional Google Ads call-click conversion, e.g. "AW-18381098301/xxxxxxxx". Empty = not fired. */
  callConversionSendTo: "",

  /* Auto-open the enquiry popup after this many seconds (once per session). 0 disables.
   * The previous page opened it after 20 seconds. */
  popupDelaySeconds: 20,

  /* Optional public brochure URL, offered after a "Download Brochure" enquiry when the page shows inline success. */
  brochureUrl: "",

  /* Final site URL for the canonical tag, e.g. "https://www.yourdomain.in/". Empty = use the live URL. */
  siteUrl: "",

  /* Privacy policy page. */
  privacyUrl: "privacy-policy.html"
};
