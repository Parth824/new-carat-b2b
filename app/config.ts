export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://new-carat-wholesale-canada.parth-globalsurat.chatgpt.site').replace(/\/+$/, '');
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/+$/, '');
export function localPath(path: string) { return `${basePath}/${path.replace(/^\/+/, '')}`; }
// Published New Carat business telephone. Confirm WhatsApp registration before public launch.
export const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '14375598980').replace(/\D/g, '');
export const leadEndpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT || '';
export const collections = [
  { name: 'Engagement rings', image: 'engagement', detail: 'Solitaire, three-stone & statement settings', slug: 'engagement-rings' },
  { name: 'Wedding bands', image: 'wedding', detail: 'Timeless bands. A lasting connection.', slug: 'wedding-bands' },
  { name: 'Earrings', image: 'earrings', detail: 'Everyday studs to occasion-ready hoops', slug: 'earring' },
  { name: 'Bracelets', image: 'bracelets', detail: 'Tennis bracelets & modern essentials', slug: 'bracelet' },
];
export const faqs = [
  ['Who can request wholesale pricing?', 'Jewellery stores, boutiques, online retailers, resellers and retail buying teams across Canada can submit a B2B enquiry. Tell us about your business and the collections you would like to stock.'],
  ['What is the minimum wholesale order?', 'Minimum order requirements may vary by product and collection. Share your product interests and estimated order size so our team can confirm the applicable requirements with your quotation.'],
  ['Do you serve businesses across Canada?', 'We welcome B2B enquiries from all Canadian provinces and territories. Shipping availability, costs and delivery timing are confirmed for your location and order before purchase.'],
  ['How do I receive a wholesale catalogue?', 'Choose “Get wholesale catalogue” and complete the enquiry form. Select the collections you are interested in so our team can share relevant catalogue and pricing information.'],
  ['Can I request specific styles or larger quantities?', 'Yes. Include the styles, quantities and timing you have in mind in your enquiry. Our team will review availability and provide the relevant ordering information.'],
  ['What are the payment, return and warranty terms?', 'Wholesale payment, return and warranty terms are confirmed with your quotation before you place an order. Please request the B2B terms applicable to your selected products.'],
];
