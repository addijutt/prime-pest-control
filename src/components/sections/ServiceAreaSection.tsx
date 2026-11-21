'use client';

import React, { lazy, Suspense } from 'react';
import SectionContainer from '../layout/SectionContainer';
import PillCta from '../ui/PillCta';
import { noBreakPhone } from '../../utils/formatPhone';
import Link from 'next/link';
import { COMMUNITIES } from '../../config/communities';

const ServiceAreaMap = lazy(() =>
  import('./service-area/ServiceAreaMap').then((m) => ({ default: m.ServiceAreaMap })),
);

// Centre of the service-area map. Fixed: the business only serves Dubai (the map used to follow the
// visitor's IP city, defaulting to Dallas, Texas, from the original template)
const DUBAI_CENTER = { lat: 25.15, lng: 55.25 };

const ServiceAreaSection: React.FC = () => {
  const phone = '055 304 5256';
  const whatsappUrl = 'https://wa.me/971553045256';

  return (
    <SectionContainer className="service-area-section" id="service-area">
      <div className="service-area-card">
        <div className="service-area-card__content">
          <div className="service-area-card__label">
            <svg
              className="service-area-card__pin"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M9 1.5C6.51472 1.5 4.5 3.51472 4.5 6C4.5 8.48528 6.51472 10.5 9 10.5C11.4853 10.5 13.5 8.48528 13.5 6C13.5 3.51472 11.4853 1.5 9 1.5ZM9 12C6.07125 12 1.5 13.6575 1.5 16.5V17.25C1.5 17.6642 1.83579 18 2.25 18H15.75C16.1642 18 16.5 17.6642 16.5 17.25V16.5C16.5 13.6575 11.9287 12 9 12Z"
                fill="currentColor"
              />
            </svg>
            <span>PROUDLY SERVING</span>
          </div>

          <h2 className="service-area-card__city">Dubai, UAE</h2>
          <p className="service-area-card__subtitle">&amp; All Surrounding Communities</p>
          <p className="service-area-card__body">
            Apartments, villas and businesses in every Dubai community, from the Marina to Mirdif. Choose your
            area for the local pests, tips and prices, or WhatsApp us for a free quote in minutes.
          </p>
          {/* Community pages (communities.ts): internal links help Google find and rank them */}
          <nav className="service-area-card__areas" aria-label="Pest control by community">
            <p className="service-area-card__areas-title">Popular areas</p>
            <ul className="service-area-card__communities">
              {COMMUNITIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/pest-control-${c.slug}`}>{c.name.replace(/ \(.*\)$/, '')}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <PillCta href={whatsappUrl} className="service-area-card__cta dynamic-href">
            <span className="dynamic-phone">WhatsApp for a Free Quote: {noBreakPhone(phone)}</span>
          </PillCta>
        </div>

        <div className="service-area-card__map-wrap">
          <Suspense fallback={<div className="service-area-map service-area-map--loading" />}>
            <ServiceAreaMap
              label="Dubai, UAE"
              lat={DUBAI_CENTER.lat}
              lng={DUBAI_CENTER.lng}
              className="service-area-card__map"
            />
          </Suspense>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ServiceAreaSection;