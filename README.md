# New Carat wholesale Canada

Next.js App Router + TypeScript landing page, using New Carat product photography and Inter typography referenced from Greenlab. Responsive black and white design with engagement ring, wedding band, earring and bracelet collections.

## Run

Requires Node.js 20.9 or newer. Run `npm install`, then `npm run dev`. `npm run build` produces the static site in `out/`.

## Contact and lead delivery

The WhatsApp links use New Carat's published business telephone +1 437 559 8980 from the existing site's Organization JSON-LD. WhatsApp registration for this number has not been verified. Copy `.env.example` to `.env.local` and override `NEXT_PUBLIC_WHATSAPP_NUMBER` if you use a different WhatsApp account. Set it to an empty string to offer a follow-up request through the enquiry form instead of a direct link.

The contact email `care@newcarat.com` is from the existing New Carat website. Without a configured lead endpoint, the form validates and prepares an email; it explicitly requires the buyer to send it and never claims a lead was received. Copy and download alternatives are included. Set `NEXT_PUBLIC_LEAD_ENDPOINT` to an HTTPS CRM/server endpoint accepting the JSON payload to enable direct submissions. Configure CORS for the production origin and implement server validation, abuse protection, consent retention and delivery. An HTTP 2xx response must mean the enquiry was accepted. Successful direct submissions redirect to `/thank-you/`; failed submissions display a retry message. Never put CRM secrets in NEXT_PUBLIC variables.

## SEO and analytics

Server-rendered content, Canada-specific title and description, social metadata, one H1, semantic headings, descriptive image alt text, canonical URL, sitemap, robots.txt, Organization/WebPage/FAQ JSON-LD and all provinces and territories. Set `NEXT_PUBLIC_SITE_URL` to the final canonical wholesale URL before rebuilding for your own domain. Private Sites publication is for review and requires public hosting before search engines can index it.

Form data includes UTM parameters, ad/campaign IDs, landing URL and referrer when using the configured endpoint. Analytics events are pushed to `window.dataLayer`: LandingPageView, LeadFormStart, CatalogueRequest, WhatsAppClick, EnquiryPrepared, EmailDraftOpened and Lead. Lead fires only after a successful endpoint response. Add your approved analytics tag manager separately; no third-party analytics or false conversion tracking is enabled by default.

## Assets and editorial choices

Photography is downloaded from New Carat's existing storefront. No invented reviews, partner counts, minimum order values, delivery guarantees, certifications or wholesale returns claims. Retail promotions in reference banners are not displayed. Image content and FAQ answers can be updated in `app/config.ts` and `app/landing.tsx`.

References: https://newcarat.com/ ; https://greenlab.diamonds/ ; supplied New_Carat_B2B_Wholesale_Landing_Page_Content_Canada.docx.
