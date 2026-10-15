import React from 'react';
import SplitSection from '../layout/SplitSection';
import PillCta from '../ui/PillCta';
import IconFeatureList from '../ui/IconFeatureList';
import { CallUsComponentImage } from '../../utils/images';
import { noBreakPhone } from '../../utils/formatPhone';

const WHY_CALL_US_FEATURES = [
  {
    id: 'free-quote',
    iconSrc: '/assets/img/why-call-us-section/why-call-us-free-quote.png',
    title: 'Free quote, zero obligation',
    description: 'WhatsApp us, get a price, and decide. No pressure, no visit required. Two minutes, no cost.',
  },
  {
    id: 'same-day',
    iconSrc: '/assets/img/why-call-us-section/why-call-us-same-day.png',
    title: 'Same-day and next-day service across Dubai',
    description: "Pest problems don't wait. Technicians across Dubai communities are often available the same day you contact us.",
  },
  {
    id: 'bird-and-pest',
    iconSrc: '/assets/img/why-call-us-section/why-call-us-ask-about.png',
    title: 'Pest AND bird control specialists',
    description: 'From cockroaches and termites to pigeons and mynahs, we handle both pest and bird infestations across Dubai.',
  },
  {
    id: 'all-dubai',
    iconSrc: '/assets/img/why-call-us-section/why-call-us-locally-owned.png',
    title: 'Serving all Dubai communities & free zones',
    description: 'Dubai Marina, Downtown, JBR, Business Bay, Jumeirah, Deira, Bur Dubai, DIFC, Palm Jumeirah, Al Barsha, Mirdif and more.',
  },
  {
    id: 'licensed',
    iconSrc: '/assets/img/why-call-us-section/why-call-us-licensed-professionals.png',
    title: 'Licensed & insured professionals only',
    description: 'Every specialist we connect you with is fully licensed and insured in the UAE. They are certified experts, not generalists.',
  },
] as const;

const WhyCallUsSection: React.FC = () => {
  const phone = '055 304 5256';
  const whatsappUrl = 'https://wa.me/971553045256';

  return (
    <SplitSection
      className="why-call-us-section"
      reversed
      imageSrc={CallUsComponentImage}
      imageAlt="Prime Pest Control pest control technician Dubai"
      title="Why WhatsApp Us"
      body={<IconFeatureList items={[...WHY_CALL_US_FEATURES]} />}
      cta={
        <PillCta href={whatsappUrl} className="dynamic-href">
          <span className="dynamic-phone">WhatsApp Now – Free Quote: {noBreakPhone(phone)}</span>
        </PillCta>
      }
    />
  );
};

export default WhyCallUsSection;