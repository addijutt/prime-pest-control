import type { Metadata } from 'next';
import HomeHero from '../components/HomeHero';
import WhatWeDoSection from '../components/sections/WhatWeDoSection';
import ServiceAreaSection from '../components/sections/ServiceAreaSection';
import FreeQuoteSection from '../components/sections/FreeQuoteSection';
import SatisfactionGuaranteeSection from '../components/sections/SatisfactionGuaranteeSection';
import TrustedByCustomersSection from '../components/sections/TrustedByCustomersSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import FaqSection from '../components/sections/FaqSection';
import { getPageContent } from '../config/pageContent';
import {
  GuideIntroSection,
  PriceBandSection,
  SignsSection,
  SafetySection,
} from '../components/sections/ServiceGuideSection';
import { getServiceGuide } from '../config/serviceGuides';
import { heroPriceText, heroWarrantyText } from '../config/prices';

export const metadata: Metadata = {
  title: 'Pest & Bird Control Dubai | Prime Pest Control | 055 304 5256',
  description:
    'Expert pest and bird control across all Dubai communities. Cockroaches, bed bugs, termites, pigeons, mynahs & 50+ more. Open 24/7, free quotes, 100% satisfaction guarantee. WhatsApp 055 304 5256.',
  alternates: { canonical: 'https://www.primepestcontrol.ae/' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.primepestcontrol.ae/#webpage',
  url: 'https://www.primepestcontrol.ae',
  name: 'Pest & Bird Control Dubai | Prime Pest Control',
  description: 'Expert pest and bird control across all Dubai communities. Cockroaches, bed bugs, termites, pigeons, mynahs & 50+ more. Open 24/7, free quotes, 100% satisfaction guarantee.',
  isPartOf: { '@id': 'https://www.primepestcontrol.ae/#website' },
  about: { '@id': 'https://www.primepestcontrol.ae/#business' },
  inLanguage: 'en-AE',
};

export default function HomePage() {
  const pageContent = getPageContent('/');
  const guide = getServiceGuide('/');
  const heroTitle = pageContent?.hero.headline ?? 'Expert Pest & Bird Control in Dubai';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <HomeHero
        title={heroTitle}
        desktopPestIcons={pageContent?.hero.pestIcons}
        fromPrice={guide ? heroPriceText(guide.priceKeys) : undefined}
        warranty={guide ? heroWarrantyText(guide.priceKeys) : ''}
        pathname="/"
      />
      {/* Home: visitors are less sure what they need, so the service grid comes first (one tap to the right page),
          then the answer, prices, when to call, how it works + why us, safety, trust badges, FAQ, areas, closing CTA */}
      <WhatWeDoSection content={pageContent?.expertise} />
      {guide ? (
        <>
          <GuideIntroSection eyebrow="Pest Control Dubai" title={guide.title} answer={guide.answer} body={guide.body} photo={guide.photos.intro} />
          <PriceBandSection title="Pest Control Prices in Dubai" keys={guide.priceKeys} />
          {guide.signs?.length ? (
            <SignsSection eyebrow="Know the Signs" title={guide.signsTitle ?? 'When to Call Us'} items={guide.signs} photo={guide.photos.signs} />
          ) : null}
        </>
      ) : null}
      <TrustedByCustomersSection />
      <WhyChooseUsSection
        process={guide ? { heading: 'From Your First Call to a Pest-Free Home', body: 'Send a photo or describe the problem on WhatsApp. We tell you what it is, the price and how we treat it before we book.', steps: guide.steps } : undefined}
      />
      {guide ? <SafetySection safety={guide.safety} prevention={guide.prevention} related={guide.related} /> : null}
      <SatisfactionGuaranteeSection />
      <FaqSection faqs={pageContent?.faqs} faqTitle={pageContent?.faqTitle} />
      <ServiceAreaSection />
      <FreeQuoteSection />
    </>
  );
}