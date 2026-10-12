import Landing from './landing';
import { faqs, siteUrl } from './config';
export default function Page() {
 const schema = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'New Carat', url: 'https://newcarat.com/' },
  { '@type': 'WebPage', '@id': `${siteUrl}/#webpage`, url: siteUrl, name: 'Wholesale Jewellery Canada | New Carat', inLanguage: 'en-CA', about: { '@type': 'Service', name: 'B2B wholesale jewellery enquiries', provider: { '@id': `${siteUrl}/#organization` }, areaServed: { '@type': 'Country', name: 'Canada' }, serviceType: 'Wholesale engagement rings, wedding bands, earrings and bracelets' } },
  { '@type': 'FAQPage', mainEntity: faqs.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}})) },
 ]};
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/><Landing/></>;
}
