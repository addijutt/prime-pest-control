import type { MetadataRoute } from 'next';
import { SEO_META } from '../config/seoMeta';
import { COMMUNITY_SLUGS } from '../config/communities';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.primepestcontrol.ae';

// Built from the same lists as the pages themselves, so the sitemap never drifts:
// service pages = seoMeta.ts, community pages = communities.ts
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (slug: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  });

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    page('free-quote', 0.8),
    ...Object.keys(SEO_META).map((slug) => page(slug, 0.8)),
    ...COMMUNITY_SLUGS.map((slug) => page(slug, 0.7)),
    page('about-us', 0.6),
    page('contact-us', 0.6),
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
