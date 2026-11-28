import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HomeHero from '../../components/HomeHero';
import WhatWeDoSection from '../../components/sections/WhatWeDoSection';
import ServiceAreaSection from '../../components/sections/ServiceAreaSection';
import FreeQuoteSection from '../../components/sections/FreeQuoteSection';
import TrustedByCustomersSection from '../../components/sections/TrustedByCustomersSection';
import WhyChooseUsSection from '../../components/sections/WhyChooseUsSection';
import FaqSection from '../../components/sections/FaqSection';
import {
  GuideIntroSection,
  PriceBandSection,
  SignsSection,
  SafetySection,
} from '../../components/sections/ServiceGuideSection';
import { CommunityPestsSection, CommunityTipsSection } from '../../components/sections/CommunityGuideSection';
import { getPageContent } from '../../config/pageContent';
import { getServiceGuide } from '../../config/serviceGuides';
import { COMMUNITY_SLUGS, getCommunityBySlug } from '../../config/communities';
import { SEO_META } from '../../config/seoMeta';
import { heroPriceText, heroWarrantyText, lowestPrice, type PriceKey } from '../../config/prices';

const BASE_URL = 'https://www.primepestcontrol.ae';

// Service pages (seoMeta.ts) + community pages (communities.ts) share this route
const SERVICE_SLUGS = Object.keys(SEO_META);

export function generateStaticParams() {
  return [...SERVICE_SLUGS, ...COMMUNITY_SLUGS].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);
  const meta = community
    ? { title: community.metaTitle, description: community.metaDescription }
    : SEO_META[slug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `${BASE_URL}/${slug}` },
  };
}

/** Starting price for Google, from prices.ts */
function offerSchema(keys: PriceKey[]) {
  const low = lowestPrice(keys);
  return low === null
    ? undefined
    : { '@type': 'AggregateOffer', priceCurrency: 'AED', lowPrice: low, offerCount: keys.length };
}

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const url = `${BASE_URL}/${slug}`;

  // ── Community page: /pest-control-<community> ──
  const community = getCommunityBySlug(slug);
  if (community) {
    const name = `Pest Control in ${community.name}`;
    return (
      <>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': `${url}#service`,
            name,
            serviceType: 'Pest control',
            description: community.metaDescription,
            provider: { '@id': `${BASE_URL}/#business` },
            areaServed: {
              '@type': 'Place',
              name: `${community.name}, Dubai`,
              containedInPlace: { '@type': 'City', name: 'Dubai' },
            },
            offers: offerSchema(community.priceKeys),
            url,
          }}
        />
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
              { '@type': 'ListItem', position: 2, name, item: url },
            ],
          }}
        />
        {/* Order: answer → local pests → prices → local tips → trust + process → FAQ → areas → one closing CTA */}
        <HomeHero
          title={community.headline}
          fromPrice={heroPriceText(community.priceKeys, 'lowest')}
          warranty={heroWarrantyText(community.priceKeys)}
          pathname={`/${slug}`}
          tagline={community.metaDescription}
        />
        <GuideIntroSection
          eyebrow={community.homes}
          title={`Pest Control in ${community.name}`}
          answer={community.answer}
          body={community.body}
          photo={community.photos.intro}
        />
        <CommunityPestsSection community={community} />
        <PriceBandSection title={`Pest Control Prices in ${community.name}`} keys={community.priceKeys} />
        <CommunityTipsSection community={community} />
        <WhyChooseUsSection />
        <FaqSection faqs={community.faqs} faqTitle={`${community.name} Pest Control FAQs`} />
        <ServiceAreaSection />
        <FreeQuoteSection />
      </>
    );
  }

  // ── Service page ──
  if (!SERVICE_SLUGS.includes(slug)) {
    notFound();
  }

  const pathname = `/${slug}`;
  const pageContent = getPageContent(pathname);
  const guide = getServiceGuide(pathname);
  const heroTitle = pageContent?.hero.headline ?? 'Affordable Pest Control';
  const pageMeta = SEO_META[slug];
  const name = pageMeta.title.split('|')[0].trim();

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${url}#service`,
          name,
          description: pageMeta.description,
          provider: { '@id': `${BASE_URL}/#business` },
          areaServed: { '@type': 'City', name: 'Dubai' },
          offers: guide ? offerSchema(guide.priceKeys) : undefined,
          url,
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name, item: url },
          ],
        }}
      />
      {/* Order follows how a visitor decides: answer → price → is it my problem → what you treat →
          how it works + why us → safety → FAQ → areas → one closing CTA. Pages without a guide
          skip the guide sections. */}
      <HomeHero
        title={heroTitle}
        desktopPestIcons={pageContent?.hero.pestIcons}
        fromPrice={guide ? heroPriceText(guide.priceKeys) : undefined}
        warranty={guide ? heroWarrantyText(guide.priceKeys) : ''}
        pathname={pathname}
        tagline={pageMeta.description}
      />
      {guide ? (
        <>
          <GuideIntroSection
            eyebrow={`${guide.name} Guide`}
            title={guide.title}
            answer={guide.answer}
            body={guide.body}
            photo={guide.photos.intro}
          />
          <PriceBandSection title={`${guide.name} Prices in Dubai`} keys={guide.priceKeys} />
          {guide.signs?.length ? (
            <SignsSection
              eyebrow={guide.signsEyebrow ?? 'Know the Signs'}
              title={guide.signsTitle ?? 'Signs to Look For'}
              items={guide.signs}
              photo={guide.photos.signs}
            />
          ) : null}
        </>
      ) : null}
      <WhatWeDoSection content={pageContent?.expertise} />
      <TrustedByCustomersSection />
      <WhyChooseUsSection
        process={
          guide
            ? {
                eyebrow: 'HOW WE TREAT IT',
                heading: `How Our ${guide.name} Works`,
                body: 'What happens from your first message to a pest-free home. We tell you the price, the preparation and how long to stay out before we start.',
                steps: guide.steps,
              }
            : undefined
        }
      />
      {guide ? <SafetySection safety={guide.safety} prevention={guide.prevention} related={guide.related} /> : null}
      <FaqSection faqs={pageContent?.faqs} faqTitle={pageContent?.faqTitle} />
      <ServiceAreaSection />
      <FreeQuoteSection />
    </>
  );
}
