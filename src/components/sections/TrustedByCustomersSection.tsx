import React from 'react';
import PillCta from '../ui/PillCta';
import TestimonialMarquee from '../ui/TestimonialMarquee';
import { noBreakPhone } from '../../utils/formatPhone';

const REVIEWS = [
  {
    quote: "Fantastic service! We had a severe cockroach infestation in our apartment in Business Bay and Prime Pest Control sorted it out completely within one visit. The technician was professional, on time, and very thorough. Highly recommended for anyone dealing with pests in Dubai.",
    author: 'Mohammed Al R., Business Bay',
  },
  {
    quote: "I was really impressed with how quickly they responded. Had a pigeon problem on our balcony in JBR. They came the next day, installed deterrents, and we haven't had an issue since. Great pest and bird control service across Dubai!",
    author: 'Priya S., JBR',
  },
  {
    quote: "Used Prime Pest Control for a bed bug issue at our villa in Jumeirah. They were professional, discreet, and the treatment worked perfectly. First person I'd call again or recommend to anyone in Dubai needing pest control.",
    author: 'James T., Jumeirah',
  },
] as const;

const CommentIcon: React.FC = () => (
  <span className="customer-reviews-section__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM7 11C6.45 11 6 10.55 6 10C6 9.45 6.45 9 7 9C7.55 9 8 9.45 8 10C8 10.55 7.55 11 7 11ZM12 11C11.45 11 11 10.55 11 10C11 9.45 11.45 9 12 9C12.55 9 13 9.45 13 10C13 10.55 12.55 11 12 11ZM17 11C16.45 11 16 10.55 16 10C16 9.45 16.45 9 17 9C17.55 9 18 9.45 18 10C18 10.55 17.55 11 17 11Z"
        fill="currentColor"
      />
    </svg>
  </span>
);

const TrustedByCustomersSection: React.FC = () => {
  const phone = '055 304 5256';
  const whatsappUrl = 'https://wa.me/971553045256';

  return (
    <section className="customer-reviews-section" aria-labelledby="customer-reviews-title">
      <div className="customer-reviews-section__inner">
        <header className="customer-reviews-section__header">
          <CommentIcon />
          <p className="customer-reviews-section__eyebrow">Customer Reviews</p>
          <h2 id="customer-reviews-title" className="customer-reviews-section__title">
            Trusted by <span className="theme-heading-accent">Residents &amp; Businesses Across Dubai</span>
          </h2>
          <p className="customer-reviews-section__subtitle">
            Real reviews from real customers who count on us for pest and bird-free premises.
          </p>
        </header>

        <TestimonialMarquee items={REVIEWS} />

        <div className="customer-reviews-section__cta">
          <PillCta href={whatsappUrl} className="dynamic-href">
            <span className="dynamic-phone">WhatsApp Now for a Free Quote: {noBreakPhone(phone)}</span>
          </PillCta>
        </div>
      </div>
    </section>
  );
};

export default TrustedByCustomersSection;