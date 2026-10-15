import React from 'react';
import SectionContainer from '../layout/SectionContainer';
import PillCta from '../ui/PillCta';
import { FreeQuoteSectionImage } from '../../utils/images';
import { noBreakPhone } from '../../utils/formatPhone';

const FreeQuoteSection: React.FC = () => {
  const phone = '055 304 5256';
  const whatsappUrl = 'https://wa.me/971553045256';

  return (
    <SectionContainer className="free-quote-section" id="free-quote">
      <div className="free-quote-section__layout">
        <div className="free-quote-section__media">
          <img
            src={FreeQuoteSectionImage}
            alt="Prime Pest Control pest control technician Dubai"
            className="free-quote-section__image"
            loading="lazy"
          />
        </div>
        <div className="free-quote-section__card">
          <p className="free-quote-section__eyebrow">Get Started</p>
          <h2 className="free-quote-section__title">Request Your Free Instant Quote</h2>
          <p className="free-quote-section__description">
            Receive an instant pest &amp; bird control quote in Dubai now!
          </p>
          <PillCta href={whatsappUrl} className="dynamic-href free-quote-section__cta">
            <span className="dynamic-phone">WhatsApp for Free Instant Quote: {noBreakPhone(phone)}</span>
          </PillCta>
        </div>
      </div>
    </SectionContainer>
  );
};

export default FreeQuoteSection;