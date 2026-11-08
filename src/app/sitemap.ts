import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.primepestcontrol.ae';

const slugs = [
  'free-quote',
  '24-7-service',
  'same-day-appointment',
  'local-pest-control',
  'pest-control-near-me',
  'exterminator-near-me',
  'local-pest-control-in-my-area',
  'rodent-control-near-me',
  'rat-exterminator-near-me',
  'mice-exterminator-near-me',
  'yellow-jacket-nest-removal',
  'ant-exterminator-near-me',
  'spider-exterminator-near-me',
  'carpenter-bee-exterminator-near-me',
  'cockroach-exterminator-near-me',
  'roach-exterminator-near-me',
  'exterminator-for-house-centipedes',
  'pest-control-for-fleas',
  'professional-flea-control',
  'mosquito-spraying-near-me',
  'tick-control-near-me',
  'pest-control-for-bugs',
  'bed-bug-exterminator-near-me',
  'termite-control',
  'residential-pest-control',
  'residential-pest-control-service',
  'rodent-control',
  'insect-control',
  'hornet-nest-removal',
  'wasp-nest-removal',
  'bee-removal',
  'critter-control',
  'bird-control-dubai',
  'pigeon-control-dubai',
  'mynah-bird-control',
  'bird-netting-dubai',
  'bird-proofing-dubai',
  'scorpion-control-dubai',
  'camel-spider-control-dubai',
  'drain-fly-control-dubai',
  'silverfish-control-dubai',
  'commercial-pest-control-dubai',
  'crow-control-dubai',
  'sparrow-control-dubai',
  'solar-panel-bird-proofing-dubai',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...servicePages,
  ];
}
