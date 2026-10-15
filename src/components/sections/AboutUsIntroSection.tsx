import React from 'react';
import SectionContainer from '../layout/SectionContainer';
import { UrgencyComponentImage } from '../../utils/images';
import { WHY_CHOOSE_US_ITEMS } from '../../utils/whyChooseUsItems';

const PESTS_LEFT = ['Wasps', 'Hornets', 'Bees', 'Ants', 'Spiders', 'Ticks', 'Mosquitoes'];
const PESTS_RIGHT = ['Fleas', 'Voles', 'Rats', 'Mice', 'Chipmunks', 'Other occasional invaders'];

const AboutUsIntroSection: React.FC = () => (
  <SectionContainer className="about-us-intro-section">
    <div className="about-us-intro-section__layout">
      <div className="about-us-intro-section__left">
        <div className="about-us-intro-section__team-photo">
          <img
            src={UrgencyComponentImage}
            alt="Prime Pest Control pest control team"
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
        <h2 className="about-us-intro-section__heading">About Us</h2>
        <h3 className="about-us-intro-section__subheading">Our Promise</h3>
        <p className="about-us-intro-section__body-text">
          Our team doesn&apos;t just provide a service. We provide a promise that your home will
          be taken care of. With each customer, we strive to build a lasting relationship based on
          trust. No matter the extent of your pest problem, you can count on our experts to
          thoroughly inspect your home and create a customized treatment plan aimed at lasting
          results.
        </p>
        <h3 className="about-us-intro-section__subheading">Our pest controllers can eliminate:</h3>
        <div className="about-us-intro-section__pest-columns">
          <ul className="about-us-intro-section__pest-list">
            {PESTS_LEFT.map((pest) => (
              <li key={pest} className="about-us-intro-section__pest-item">
                <span className="about-us-intro-section__pest-check" aria-hidden="true">
                  <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#007033" />
                    <path d="M3.5 6.5L5.5 8.5L9.5 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {pest}
              </li>
            ))}
          </ul>
          <ul className="about-us-intro-section__pest-list">
            {PESTS_RIGHT.map((pest) => (
              <li key={pest} className="about-us-intro-section__pest-item">
                <span className="about-us-intro-section__pest-check" aria-hidden="true">
                  <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#007033" />
                    <path d="M3.5 6.5L5.5 8.5L9.5 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {pest}
              </li>
            ))}
          </ul>
        </div>
        <p className="about-us-intro-section__body-text">
          Pests have no place in your home. The longer you wait, the more they spread. Don&apos;t let it get worse. Give us a call today for a fast, thorough inspection, and
          we&apos;ll get straight to work eliminating the problem for good.
        </p>
      </div>
    </div>
  </SectionContainer>
);

export default AboutUsIntroSection;