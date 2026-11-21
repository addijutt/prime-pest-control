import React from 'react';
import { noBreakPhone } from '../../utils/formatPhone';
import WhatsAppIcon from '../WhatsAppIcon';

const FEATURES = [
  { id: 'free-estimates', title: 'Free Pest & Bird Control Estimates', iconSrc: '/assets/img/why-choose-us-section/why-choose-us-free-estimates.png' },
  { id: 'prompt-service', title: '24/7 Same-Day Service in Dubai', iconSrc: '/assets/img/why-choose-us-section/why-choose-us-prompt-service.png' },
  { id: 'guaranteed', title: '100% Satisfaction Guarantee', iconSrc: '/assets/img/why-choose-us-section/why-choose-us-results-guarantee.png' },
  { id: 'dubai-specialists', title: 'Dubai Pest & Bird Specialists', iconSrc: '/assets/img/why-choose-us-section/why-choose-us-locally-owned.png' },
] as const;

const PROCESS_STEPS = [
  { id: 'step-01', number: '01', title: 'WhatsApp Us', description: 'Message us any time, day or night. We respond fast and offer same-day bookings across Dubai.' },
  { id: 'step-02', number: '02', title: 'Free Site Assessment', description: 'Our specialist visits your property, identifies every pest or bird problem, and explains the plan.' },
  { id: 'step-03', number: '03', title: 'Targeted Treatment', description: 'We apply the right solution for your specific pest or bird problem. It is safe, effective, and eco-responsible.' },
  { id: 'step-04', number: '04', title: '100% Satisfaction Guarantee', description: 'Not happy with the result? We come back and put it right. Treatments also carry a 90-day warranty with free re-treatment.' },
];

const DEFAULT_HEADING = 'From Your First Call to a Pest-Free Home';
const DEFAULT_BODY =
  'Getting rid of pests in Dubai has never been simpler. Our expert team handles everything from a free on-site assessment to guaranteed, eco-responsible treatments across all Dubai communities and free zones.';

export type ProcessContent = {
  eyebrow?: string;
  heading: string;
  body: string;
  steps: { title: string; text: string }[];
};

/** Icons row + dark "How it works" block. Service pages pass their own treatment steps via `process`. */
const WhyChooseUsSection: React.FC<{ process?: ProcessContent }> = ({ process }) => {
  const phone = '055 304 5256';
  const whatsappUrl = 'https://wa.me/971553045256';
  const steps = process
    ? process.steps.map((s, i) => ({
        id: `step-${i + 1}`,
        number: String(i + 1).padStart(2, '0'),
        title: s.title,
        description: s.text,
      }))
    : PROCESS_STEPS;

  return (
    <section className="why-choose-us-section" aria-labelledby="why-choose-us-title">
      <div className="why-choose-us-section__inner">
        <h2 id="why-choose-us-title" className="why-choose-us-section__title">Why Choose Us</h2>

        <ul className="why-choose-us-section__features">
          {FEATURES.map((feature) => (
            <li key={feature.id} className="why-choose-us-section__feature">
              <div className="why-choose-us-section__feature-icon">
                <img src={feature.iconSrc} alt="" loading="lazy" />
              </div>
              <p className="why-choose-us-section__feature-title">{feature.title}</p>
            </li>
          ))}
        </ul>

        <div className="process-block">
          <div className="process-block__left">
            <span className="process-block__eyebrow">{process?.eyebrow ?? 'HOW IT WORKS'}</span>
            <h3 className="process-block__heading">{process?.heading ?? DEFAULT_HEADING}</h3>
            <p className="process-block__body">{process?.body ?? DEFAULT_BODY}</p>
            <a href={whatsappUrl} className="process-block__cta dynamic-href">
              <WhatsAppIcon size={20} className="process-block__cta-icon" />
              <span>WhatsApp for a Free Quote: {noBreakPhone(phone)}</span>
            </a>
          </div>

          <div className="process-block__right">
            <div className={`process-block__steps process-block__steps--${steps.length}`}>
              {steps.map((step) => (
                <div key={step.id} className="process-block__step">
                  <span className="process-block__step-number">{step.number}</span>
                  <h4 className="process-block__step-title">{step.title}</h4>
                  <p className="process-block__step-desc">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
