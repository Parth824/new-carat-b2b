import type { Metadata, Viewport } from 'next';
import { siteUrl } from './config';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Wholesale Jewellery Canada | B2B Lab Grown Diamonds | New Carat',
  description: 'Source wholesale engagement rings, wedding bands, earrings and bracelets from New Carat. Lab grown diamond jewellery for Canadian retailers. Request B2B pricing.',
  keywords: ['wholesale jewellery Canada', 'B2B jewellery supplier Canada', 'wholesale engagement rings Canada', 'wholesale wedding bands', 'lab grown diamond jewellery wholesale', 'wholesale diamond earrings', 'wholesale tennis bracelets', 'jewellery supplier for Canadian retailers'],
  alternates: { canonical: `${siteUrl}/` },
  openGraph: { type: 'website', url: `${siteUrl}/`, locale: 'en_CA', siteName: 'New Carat Wholesale', title: 'Exceptional jewellery. A stronger business. | New Carat', description: 'Wholesale lab grown diamond jewellery for Canadian retailers, boutiques and online sellers.', images: [{ url: `${siteUrl}/images/engagement.webp`, width: 700, height: 700, alt: 'New Carat diamond engagement ring' }] },
  twitter: { card: 'summary_large_image', title: 'New Carat | Wholesale Jewellery Canada', description: 'Engagement rings, wedding bands, earrings and bracelets for Canadian businesses.', images: [`${siteUrl}/images/engagement.webp`] },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#111111' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
 return <html lang="en-CA"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/></head><body>{children}</body></html>;
}
