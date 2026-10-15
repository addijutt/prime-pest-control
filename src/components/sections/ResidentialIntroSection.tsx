import React from 'react';
import SectionContainer from '../layout/SectionContainer';
import { WHY_CHOOSE_US_ITEMS } from '../../utils/whyChooseUsItems';
import { noBreakPhone } from '../../utils/formatPhone';

const PESTS_LEFT = ['Cockroaches', 'Wasps', 'Hornets', 'Bees', 'Ants', 'Mosquitoes', 'Bed Bugs'];
const PESTS_RIGHT = ['Termites', 'Rats', 'Mice', 'Pigeons', 'Mynahs', 'Fleas', 'Other occasional invaders'];

const CheckCircle = () => (
  <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6.5" cy="6.5" r="6.5" fill="#007033" />
    <path d="M3.5 6.5L5.5 8.5L9.5 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ResidentialIntroSection: React.FC = () => {
  const phone = '055 304 5256';
  const whatsappUrl = 'https://wa.me/971553045256';

  return (
    <SectionContainer className="about-us-intro-section">
      <div className="about-us-intro-section__layout">
        <div className="about-us-intro-section__left">
          <div className="about-us-intro-section__team-photo">
            <img
              src="/assets/img/urgency-component/urgency-component-image.webp"
              alt="Pest control professionals"
              loading="eager"
              className="about-us-intro-section__team-img"
            />
          </div>
          <div className="about-us-intro-section__why-card">
            <h2 className="about-us-intro-section__why-title">Why Choose Us</h2>
            <ul className="about-us-intro-section__why-list">
              {WHY_CHOOSE_US_ITEMS.map((item) => (
                <li key={item.id} className="about-us-intro-section__why-item">
                  <span className="about-us-intro-section__why-icon" aria-hidden="true">
                    {item.iconSrc ? (
                      <img src={item.iconSrc} alt="" loading="lazy" />
                    ) : (
                      <i className={item.iconClass} />
                    )}
                  </span>
                  <span className="about-us-intro-section__why-label">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-us-intro-section__right">
          <h2 className="about-us-intro-section__heading">Residential Pest & Bird Control in Dubai</h2>
          <p className="about-us-intro-section__body-text">
            When choosing a pest and bird control professional in Dubai, nobody provides you with better service,
            treatment options and personnel than us. Take your time reviewing our pest and bird control
            service options and rest assured knowing, you have a friend in the fight against
            unwanted pests and birds in and around your Dubai home.
          </p>
          <h3 className="about-us-intro-section__subheading">
            We provide service for various kinds of pests and birds including but not limited to:
          </h3>
          <div className="about-us-intro-section__pest-columns">
            <ul className="about-us-intro-section__pest-list">
              {PESTS_LEFT.map((pest) => (
                <li key={pest} className="about-us-intro-section__pest-item">
                  <span className="about-us-intro-section__pest-check" aria-hidden="true">
                    <CheckCircle />
                  </span>
                  {pest}
                </li>
              ))}
            </ul>
            <ul className="about-us-intro-section__pest-list">
              {PESTS_RIGHT.map((pest) => (
                <li key={pest} className="about-us-intro-section__pest-item">
                  <span className="about-us-intro-section__pest-check" aria-hidden="true">
                    <CheckCircle />
                  </span>
                  {pest}
                </li>
              ))}
            </ul>
          </div>
          <div className="residential-intro__cta-group">
            <a href={whatsappUrl} className="residential-intro__cta-btn dynamic-href">
              WhatsApp Us <span className="dynamic-phone">{noBreakPhone(phone)}</span>
            </a>
            <a href="/contact-us" className="residential-intro__cta-link">
              WhatsApp for a Free Estimate
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ResidentialIntroSection;