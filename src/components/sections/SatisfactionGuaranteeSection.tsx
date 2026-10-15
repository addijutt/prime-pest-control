import React from 'react';
import SectionContainer from '../layout/SectionContainer';
import PillCta from '../ui/PillCta';
import { TrustBadgesCombined } from '../../utils/images';
import { noBreakPhone } from '../../utils/formatPhone';

const TESTIMONIAL = {
  quote: "I want to thank you. The technician did a wonderful job. He listened to everything I needed to tell him and explained a few things that I really appreciated. He solved our cockroach problem in Dubai Marina completely. He is an asset to your company, and I feel lucky that he works for you.",
  author: 'Ahmad K., Dubai Marina',
} as const;

const QuoteIcon: React.FC = () => (
  <span className="satisfaction-guarantee-section__quote-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.583 17C3.075 17 2 15.925 2 14.417V10.75C2 7.298 4.798 4.5 8.25 4.5H9.5V7H8.25C6.317 7 4.75 8.567 4.75 10.5V11.25H7.333C8.437 11.25 9.333 12.146 9.333 13.25V14.417C9.333 15.925 8.258 17 6.75 17H4.583ZM14.25 17C12.742 17 11.667 15.925 11.667 14.417V10.75C11.667 7.298 14.465 4.5 17.917 4.5H19.167V7H17.917C15.984 7 14.417 8.567 14.417 10.5V11.25H17C18.104 11.25 19 12.146 19 13.25V14.417C19 15.925 17.925 17 16.417 17H14.25Z"
        fill="currentColor"
      />
    </svg>
  </span>
);

const SatisfactionGuaranteeSection: React.FC = () => {
  const phone = '055 304 5256';
  const whatsappUrl = 'https://wa.me/971553045256';
  const cityState = 'Dubai';

  return (
    <SectionContainer className="satisfaction-guarantee-section" id="satisfaction-guarantee">
      <div className="satisfaction-guarantee-section__layout">
        <div className="satisfaction-guarantee-section__content">
          <h2 className="satisfaction-guarantee-section__title">100% Satisfaction Guarantee</h2>
          <p className="satisfaction-guarantee-section__description">
            Our services are designed to rid your home or business of pests such as cockroaches, ants, bed bugs,
            termites, wasps, rodents, mosquitoes and more, as well as bird problems including pigeon and mynah infestations
            across Dubai. We treat interior spaces, garages, and outdoor areas as part of every service. If a problem persists,
            simply WhatsApp us and we&apos;ll work with you to find the right solution.
          </p>
          <blockquote className="satisfaction-guarantee-section__testimonial">
            <QuoteIcon />
            <p className="satisfaction-guarantee-section__quote-text">{TESTIMONIAL.quote}</p>
            <cite className="satisfaction-guarantee-section__quote-author">{TESTIMONIAL.author}</cite>
          </blockquote>
        </div>

        <div className="satisfaction-guarantee-section__card">
          <h2 className="satisfaction-guarantee-section__card-title">
            Trusted Pest &amp; Bird Control in {cityState}!
          </h2>
          <p className="satisfaction-guarantee-section__card-subtitle">
            Effective Treatments, Personalized Service
          </p>
          <p className="satisfaction-guarantee-section__card-body">
            Our environmentally responsible pest and bird management techniques are designed to have minimal
            impact on your surroundings, while still providing the level of protection you and your
            family or business expect across all Dubai communities and free zones.
          </p>
          <div className="satisfaction-guarantee-section__badges">
            <img
              src={TrustBadgesCombined}
              alt="100% satisfaction guarantee, customer satisfaction, and sustainable pest control badges"
              className="satisfaction-guarantee-section__badges-image"
              width={428}
              height={64}
              loading="lazy"
            />
          </div>
          <PillCta href={whatsappUrl} className="dynamic-href satisfaction-guarantee-section__cta">
            <span className="dynamic-phone">WhatsApp Now for a Free Quote: {noBreakPhone(phone)}</span>
          </PillCta>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SatisfactionGuaranteeSection;