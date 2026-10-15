import type { Metadata } from 'next';
import AboutUsIntroSection from '../../components/sections/AboutUsIntroSection';
import AboutUsWhyHireSection from '../../components/sections/AboutUsWhyHireSection';
import AboutUsCallToActionSection from '../../components/sections/AboutUsCallToActionSection';
import ServiceAreaSection from '../../components/sections/ServiceAreaSection';
import FreeQuoteSection from '../../components/sections/FreeQuoteSection';
import SatisfactionGuaranteeSection from '../../components/sections/SatisfactionGuaranteeSection';

export const metadata: Metadata = {
  title: 'About Prime Pest Control | Pest & Bird Control Dubai',
  description:
    'Learn about Prime Pest Control Dubai — your trusted pest and bird control specialists. Covering all Dubai communities with same-day service and 100% guaranteed results.',
  alternates: { canonical: 'https://www.primepestcontrol.ae/about-us' },
};

const whatsappUrl = 'https://wa.me/971553045256';

export default function AboutUsPage() {
  return (
    <>
      <div id="hero" className="about-hero" />

      <div className="about-us-mobile-cta">
        <a href={whatsappUrl} className="about-us-mobile-cta__btn dynamic-href">
          WhatsApp for a Free Estimate
        </a>
      </div>

      <AboutUsIntroSection />
      <AboutUsWhyHireSection />
      <AboutUsCallToActionSection />
      <ServiceAreaSection />
      <FreeQuoteSection />
      <SatisfactionGuaranteeSection />
    </>
  );
}