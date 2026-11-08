import type { Metadata } from 'next';
import HomeHero from '../components/HomeHero';
import UrgencySection from '../components/sections/UrgencySection';
import WhatWeDoSection from '../components/sections/WhatWeDoSection';
import ServiceAreaSection from '../components/sections/ServiceAreaSection';
import WhyCallUsSection from '../components/sections/WhyCallUsSection';
import FreeQuoteSection from '../components/sections/FreeQuoteSection';
import SatisfactionGuaranteeSection from '../components/sections/SatisfactionGuaranteeSection';
import TrustedByCustomersSection from '../components/sections/TrustedByCustomersSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import FaqSection from '../components/sections/FaqSection';
import { getPageContent } from '../config/pageContent';

export const metadata: Metadata = {
  title: 'Pest & Bird Control Dubai | Prime Pest Control | 055 304 5256',
  description:
    'Expert pest and bird control across all Dubai communities. Cockroaches, bed bugs, termites, pigeons, mynahs & 50+ more. Same-day service, 100% guaranteed. WhatsApp 055 304 5256.',
  alternates: { canonical: 'https://www.primepestcontrol.ae/' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.primepestcontrol.ae/#webpage',
  url: 'https://www.primepestcontrol.ae',
  name: 'Pest & Bird Control Dubai | Prime Pest Control',
  description: 'Expert pest and bird control across all Dubai communities. Cockroaches, bed bugs, termites, pigeons, mynahs & 50+ more. Same-day service, 100% guaranteed.',
  isPartOf: { '@id': 'https://www.primepestcontrol.ae/#website' },
  about: { '@id': 'https://www.primepestcontrol.ae/#business' },
  inLanguage: 'en-AE',
};

export default function HomePage() {
  const pageContent = getPageContent('/');
  const heroTitle = pageContent?.hero.headline ?? 'Expert Pest & Bird Control in Dubai';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <HomeHero
        title={heroTitle}
        desktopPestIcons={pageContent?.hero.pestIcons}
      />
      <UrgencySection variant="default" utahOnlyCoupon={true} />
      <WhatWeDoSection content={pageContent?.expertise} />
      <ServiceAreaSection />
      <WhyCallUsSection />
      <TrustedByCustomersSection />
      <WhyChooseUsSection />
      <FreeQuoteSection />
      <SatisfactionGuaranteeSection />
      <FaqSection faqs={pageContent?.faqs} faqTitle={pageContent?.faqTitle} />
    </>
  );
}