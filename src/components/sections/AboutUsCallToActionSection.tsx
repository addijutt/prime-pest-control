import React from 'react';
import SectionContainer from '../layout/SectionContainer';
import { CallUsComponentImage } from '../../utils/images';
import { noBreakPhone } from '../../utils/formatPhone';

const AboutUsCallToActionSection: React.FC = () => {
  const phone = '055 304 5256';
  const whatsappUrl = 'https://wa.me/971553045256';

  return (
    <SectionContainer className="about-us-cta-section">
      <div className="about-us-cta-section__layout">
        <div className="about-us-cta-section__content">
          <h2 className="about-us-cta-section__heading">WhatsApp us today!</h2>
          <p className="about-us-cta-section__body">
            We care about our customers and take pride in what we do. Using a proactive, year-round
            approach, we help keep Dubai homes and businesses safe, comfortable, and pest-free. Our pest
            and bird control specialists are trained and follow proven practices with every service, paying close
            attention to eaves, cracks, the full perimeter, and the interior of your property to
            effectively eliminate pests and birds and restore comfort to your home. Don&apos;t wait for the
            problem to get worse. WhatsApp us today and let our Dubai team take care of it.
          </p>
          <div className="about-us-cta-section__actions">
            <a href={whatsappUrl} className="about-us-cta-section__call-btn dynamic-href">
              WhatsApp Us <span className="dynamic-phone">{noBreakPhone(phone)}</span>
            </a>
            <a href="/contact-us" className="about-us-cta-section__estimate-link">
              WhatsApp for a Free Estimate
            </a>
          </div>
        </div>
        <div className="about-us-cta-section__media">
          <img
            src={CallUsComponentImage}
            alt="Pest control professional"
            loading="lazy"
            className="about-us-cta-section__img"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutUsCallToActionSection;