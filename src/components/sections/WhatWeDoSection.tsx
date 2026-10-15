import React from 'react';
import SplitSection from '../layout/SplitSection';
import PillCta from '../ui/PillCta';
import ServiceGrid, { ServiceGridItem } from '../ui/ServiceGrid';
import CheckmarkList from '../ui/CheckmarkList';
import { noBreakPhone, PRIMARY_CTA_LABEL } from '../../utils/formatPhone';
import type { PageContent } from '../../config/pageContentHelpers';
import { toServiceGridItem } from '../../config/pageContentHelpers';

const SERVICES: ServiceGridItem[] = [
  { label: 'General Pest Control', href: '/residential-pest-control', imageDesktop: '/assets/img/pests/residential-pc.webp', imageMobile: '/assets/img/pests/residential-pc-m.webp' },
  { label: 'Commercial Pest Control', href: '/contact-us', imageDesktop: '/assets/img/pests/commercial-pc-d.webp', imageMobile: '/assets/img/pests/commercial-pc-m.webp' },
  { label: 'Bed Bugs', href: '/bed-bug-exterminator-near-me', imageDesktop: '/assets/img/pests/common-bed-bug-d.webp', imageMobile: '/assets/img/pests/common-bed-bug-m.webp' },
  { label: 'Mosquitoes', href: '/mosquito-spraying-near-me', imageDesktop: '/assets/img/pests/mosquito-d.webp', imageMobile: '/assets/img/pests/mosquito-m.webp' },
  { label: 'Roaches', href: '/roach-exterminator-near-me', imageDesktop: '/assets/img/pests/roach-d.webp', imageMobile: '/assets/img/pests/roach-m.webp' },
  { label: 'Termites', href: '/termite-control', imageDesktop: '/assets/img/pests/termite-d.webp', imageMobile: '/assets/img/pests/termite-m.webp' },
  { label: 'Stinging Insects', href: '/wasp-nest-removal', imageDesktop: '/assets/img/pests/wasp-d.webp', imageMobile: '/assets/img/pests/wasp-m.webp' },
  { label: 'Rodents', href: '/rodent-control', imageDesktop: '/assets/img/pests/rodent-d.webp', imageMobile: '/assets/img/pests/rodent-m.webp' },
  { label: '50+ Pests & Birds', href: '/residential-pest-control', imageDesktop: '/assets/img/pests/shield.webp', imageMobile: '/assets/img/pests/shield-m.webp' },
];

const BENEFITS = [
  "Interior treatment for hiding spots, moisture areas, and entry points. This is critical in Dubai's humid climate.",
  "Exterior barrier treatment to stop pests before they get in, including Dubai's notorious cockroaches and ants",
  'Bird control solutions for pigeons and mynahs causing damage across Dubai communities and free zones',
  'Custom plans based on your specific pest or bird problem and your property type',
  "Not sure what you're dealing with? Just describe what you're seeing and we'll help you figure out the rest.",
];

type WhatWeDoSectionProps = {
  content?: PageContent['expertise'];
};

const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({ content }) => {
  const phone = '055 304 5256';
  const whatsappUrl = 'https://wa.me/971553045256';

  const title = content?.title ?? (
    <>
      We Handle 50+
      <br />
      Pest &amp; Bird Problems
    </>
  );
  const intro = content?.subtitle ?? 'From common Dubai pests to pigeon infestations, we have the expertise to get the job done right.';
  const gridItems = content?.images?.length ? content.images.map(toServiceGridItem) : SERVICES;
  const bullets = content?.bullets ?? BENEFITS;

  return (
    <SplitSection
      className="what-we-do-section"
      reversed
      media={
        <div className="what-we-do-section__left">
          <div className="theme-split__media-header">
            <p className="theme-split__eyebrow">OUR EXPERTISE</p>
            <h2 className="theme-split__title">{title}</h2>
            <p className="what-we-do-section__intro">{intro}</p>
          </div>
          <ServiceGrid items={gridItems} />
        </div>
      }
      body={<CheckmarkList items={bullets} />}
      cta={
        <div className="what-we-do-section__cta">
          <PillCta href={whatsappUrl} className="dynamic-href">
            <span className="dynamic-phone">{PRIMARY_CTA_LABEL} {noBreakPhone(phone)}</span>
          </PillCta>
          <a href={whatsappUrl} className="what-we-do-section__cta-link dynamic-href">
            Talk to a Dubai expert today.
          </a>
        </div>
      }
    />
  );
};

export default WhatWeDoSection;