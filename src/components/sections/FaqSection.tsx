'use client';

import React, { useState } from 'react';
import type { FaqItem } from '../../config/pageContentHelpers';
import { SERVICE_TERMS, aed, warrantyPeriod, warrantyText } from '../../config/prices';

const DEFAULT_FAQS: FaqItem[] = [
  { question: 'Do I need to know what pest I have?', answer: "No. Just describe what you're seeing. Our Dubai experts will identify the pest, explain what's causing the problem, and recommend the right treatment for your home or business." },
  { question: 'How quickly can you respond in Dubai?', answer: 'We are available 24/7 and offer same-day and next-day appointments across Dubai. WhatsApp us any time and we typically reply within minutes.' },
  { question: 'Are your treatments safe for children and pets?', answer: 'Yes. We use products and application methods that are safe for families and pets when used as directed. Our technicians will advise you on any precautions needed before and after treatment.' },
  { question: 'Do you offer a satisfaction guarantee?', answer: `Yes. Every service comes with our 100% satisfaction guarantee: if you are not happy with the result, tell us and we come back to put it right. On top of that, treatments carry a ${warrantyPeriod('cockroach-apartment')} warranty with free re-treatment if the same pest returns.` },
  { question: 'Do your treatments come with a warranty?', answer: `Yes. Our treatments come with a ${warrantyPeriod('cockroach-apartment')} warranty: if the same pest comes back in that time, we return and re-treat free of charge. This covers cockroaches, ants, bed bugs, rats and mice, termites, fleas, ticks and more, and bird netting and spikes come with a ${warrantyText('bird-net')}. Mosquitoes, flies, snakes, scorpions and camel spiders come in from outside, so those treatments have no warranty. The warranty for each service is shown on its price card.` },
  { question: 'Is the visit or quote free?', answer: `Yes. Quotes on WhatsApp are free, and survey visits are free for ${SERVICE_TERMS.freeSurveyFor}. A termite inspection with written findings is ${aed('termite-inspection')}, deducted from the treatment if you book it. Outside a warranty or annual contract, a visit has a call-out charge of ${aed('callout')}, which is deducted from the job price when you book the job and it is completed.` },
  { question: 'What does an annual pest control contract include?', answer: `Scheduled treatments through the year (3 to 4 for apartments, 4 for villas) and free call-outs between visits for ${SERVICE_TERMS.annualCoveredPests}, within ${SERVICE_TERMS.calloutResponseHours} hours. ${SERVICE_TERMS.annualExcluded.charAt(0).toUpperCase()}${SERVICE_TERMS.annualExcluded.slice(1)} need specialist treatment and are quoted separately. Contracts start from ${aed('annual-apartment')} a year for an apartment and ${aed('annual-villa')} for a villa.` },
  { question: 'How much does pest control cost in Dubai?', answer: `General pest control starts from ${aed('general-apartment')} for a studio or 1-bedroom apartment and ${aed('general-villa')} for a villa. The exact price depends on the pest, the size of the property and how bad the problem is. WhatsApp or call us for a free quote with the price in AED before we book, no hidden charges.` },
  { question: 'Do I need to leave my home during treatment?', answer: 'For most treatments you can stay at home and only keep out of the treated rooms for 1 to 4 hours. Bed bug treatment needs about 4 hours. We never use gas fumigation in homes; it is banned in residential buildings in the UAE. Our technician tells you exactly what to prepare and how long to stay out.' },
];

interface FaqSectionProps {
  faqs?: FaqItem[];
  faqTitle?: string;
}

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2a7a3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.7 10.5a19.79 19.79 0 01-3-8.57A2 2 0 012.68 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.64a16 16 0 006.29 6.29l1.01-1.01a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2a7a3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const FaqSection: React.FC<FaqSectionProps> = ({ faqs, faqTitle }) => {
  const items = faqs && faqs.length > 0 ? faqs : DEFAULT_FAQS;
  const title = faqTitle || 'Frequently Asked Questions';
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
    <section className="faq-section-v2" id="faq">
      <div className="faq-section-v2__inner">
        <div className="faq-section-v2__left">
          <span className="faq-section-v2__badge">Have Questions?</span>
          <h2 className="faq-section-v2__title">{title}</h2>
          <div className="faq-section-v2__contact-card">
            <div className="faq-section-v2__contact-row">
              <PhoneIcon />
              <div>
                <p className="faq-section-v2__contact-label">CALL US</p>
                <a href="tel:+971553045256" className="faq-section-v2__contact-value">055 304 5256</a>
              </div>
            </div>
            <div className="faq-section-v2__contact-divider" />
            <div className="faq-section-v2__contact-row">
              <EmailIcon />
              <div>
                <p className="faq-section-v2__contact-label">EMAIL</p>
                <a href="mailto:info@primepestcontrol.ae" className="faq-section-v2__contact-value">info@primepestcontrol.ae</a>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-section-v2__right">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-section-v2__item${isOpen ? ' faq-section-v2__item--open' : ''}`}>
                <button
                  type="button"
                  className="faq-section-v2__trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="faq-section-v2__question">{item.question}</span>
                  <span className={`faq-section-v2__toggle${isOpen ? ' faq-section-v2__toggle--open' : ''}`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-section-v2__answer">{item.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
};

export default FaqSection;