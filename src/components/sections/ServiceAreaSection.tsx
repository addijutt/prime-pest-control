'use client';

import React, { lazy, Suspense } from 'react';
import SectionContainer from '../layout/SectionContainer';
import PillCta from '../ui/PillCta';
import { noBreakPhone } from '../../utils/formatPhone';
import { useVisitorLocation } from '../../hooks/useVisitorLocation';

const ServiceAreaMap = lazy(() =>
  import('./service-area/ServiceAreaMap').then((m) => ({ default: m.ServiceAreaMap })),
);

const ServiceAreaSection: React.FC = () => {
  const phone = '055 304 5256';
  const whatsappUrl = 'https://wa.me/971553045256';
  const { city, region } = useVisitorLocation();

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
            Whether you are in Dubai Marina, Downtown, JBR, Business Bay, Jumeirah,
            Deira, Bur Dubai, DIFC, Palm Jumeirah, Al Barsha, Mirdif, or any other community, help is close by.
            WhatsApp us today and get a free, no-obligation quote in minutes.
          </p>
        </div>

        <Suspense fallback={<div className="service-area-map service-area-map--loading" />}>
          <ServiceAreaMap city={city} state={region} className="service-area-card__map" />
        </Suspense>

        <PillCta href={whatsappUrl} className="service-area-card__cta dynamic-href">
          <span className="dynamic-phone">WhatsApp for Free Quote in Dubai: {noBreakPhone(phone)}</span>
        </PillCta>
      </div>
    </SectionContainer>
  );
};

export default ServiceAreaSection;