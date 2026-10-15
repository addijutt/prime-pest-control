import type { Metadata } from 'next';
import HomeHero from '../../components/HomeHero';
import UrgencySection from '../../components/sections/UrgencySection';
import WhatWeDoSection from '../../components/sections/WhatWeDoSection';
import ServiceAreaSection from '../../components/sections/ServiceAreaSection';
import WhyCallUsSection from '../../components/sections/WhyCallUsSection';
import FreeQuoteSection from '../../components/sections/FreeQuoteSection';
import SatisfactionGuaranteeSection from '../../components/sections/SatisfactionGuaranteeSection';
import TrustedByCustomersSection from '../../components/sections/TrustedByCustomersSection';
import WhyChooseUsSection from '../../components/sections/WhyChooseUsSection';
import FaqSection from '../../components/sections/FaqSection';
import { getPageContent } from '../../config/pageContent';

export const metadata: Metadata = {
  title: 'Free Pest & Bird Control Quote Dubai | Prime Pest Control',
  description:
    'Get a free, no-obligation pest and bird control quote in Dubai. WhatsApp us in seconds for a same-day response guaranteed.',
  alternates: { canonical: 'https://www.primepestcontrol.ae/free-quote' },
};

export default function FreeQuotePage() {
  const pageContent = getPageContent('/free-quote');
  const heroTitle = pageContent?.hero.headline ?? 'Pest Control Get Free Quote';

  return (
    <>
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