import { localPath } from '../config';
import type { Metadata } from 'next';
export const metadata: Metadata = {title:'Thank you | New Carat Wholesale',robots:{index:false,follow:false}};
export default function ThankYou(){return <main style={{minHeight:'100vh',display:'grid',placeItems:'center',padding:30,background:'#f6f5f2'}}><div style={{maxWidth:550}}><p className="eyebrow">NEW CARAT / WHOLESALE</p><h1 style={{fontSize:44,fontWeight:400,letterSpacing:-2}}>Thank you for your wholesale enquiry.</h1><p>Our team has received your details and will review your requirements. We’ll contact you with the relevant wholesale information.</p><a className="button" href={localPath("/")}>Back to the collection ↗</a></div></main>}
