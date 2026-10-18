'use client';

import React, { useState } from 'react';
import type { FaqItem } from '../../config/pageContentHelpers';

const DEFAULT_FAQS: FaqItem[] = [
  { question: 'Do I need to know what pest I have?', answer: "No. Just describe what you're seeing. Our Dubai experts will identify the pest, explain what's causing the problem, and recommend the right treatment for your home or business." },
  { question: 'How quickly can you respond in Dubai?', answer: 'We are available 24/7 and offer same-day and next-day appointments across Dubai. WhatsApp us any time — we typically reply within minutes.' },
  { question: 'Are your treatments safe for children and pets?', answer: 'Yes. We use products and application methods that are safe for families and pets when used as directed. Our technicians will advise you on any precautions needed before and after treatment.' },
  { question: 'Do you offer a satisfaction guarantee?', answer: 'Yes. We offer a 100% satisfaction guarantee on all our pest and bird control services in Dubai. If the problem persists after treatment, we will return and re-treat at no additional cost.' },
  { question: 'How much does pest control cost in Dubai?', answer: 'Prices vary depending on the type of pest, size of the property, and severity of the infestation. WhatsApp or call us for a free, no-obligation quote with upfront pricing in AED and no hidden fees.' },
  { question: 'Do I need to leave my home during treatment?', answer: 'For most treatments, you can stay home. However, for certain chemical treatments such as fumigation, we may ask you to vacate for a few hours. Our technician will advise you in advance.' },
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

  return (
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
  );
};

export default FaqSection;