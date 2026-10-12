import type { MetadataRoute } from 'next';
import { siteUrl, localPath } from './config';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: localPath('/'), disallow: localPath('/thank-you/') }, sitemap: `${siteUrl}/sitemap.xml` }; }
