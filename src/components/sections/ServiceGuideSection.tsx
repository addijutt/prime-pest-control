import React from 'react';
import Link from 'next/link';
import SectionContainer from '../layout/SectionContainer';
import SplitSection from '../layout/SplitSection';
import PillCta from '../ui/PillCta';
import CheckmarkList from '../ui/CheckmarkList';
import ImagePlaceholder, { type PhotoBrief } from '../ui/ImagePlaceholder';
import { PRICES, SERVICE_TERMS, priceText, warrantyText, type PriceItem, type PriceKey } from '../../config/prices';
import type { GuideLink } from '../../config/guideTypes';
import { noBreakPhone } from '../../utils/formatPhone';

// Building blocks for the long-form service and community content. They reuse the site's own
// patterns (SplitSection, CheckmarkList, PillCta, grey band) so new pages look like the rest of the site.

const PHONE = '055 304 5256';
const WHATSAPP_URL = 'https://wa.me/971553045256';

/** "Cockroach Control in Dubai" -> green "Cockroach Control" + black "in Dubai", like the site's two-tone titles */
function TwoToneTitle({ text }: { text: string }) {
  const i = text.lastIndexOf(' in ');
  if (i <= 0) return <>{text}</>;
  return (
    <>
      <span className="theme-heading-accent">{text.slice(0, i)}</span> {text.slice(i + 1)}
    </>
  );
}

function WhatsAppCta({ label }: { label: string }) {
  return (
    <PillCta href={WHATSAPP_URL} className="dynamic-href">
      <span className="dynamic-phone">{label} {noBreakPhone(PHONE)}</span>
    </PillCta>
  );
}

/** 1. The answer: split section, text + photo */
export const GuideIntroSection: React.FC<{
  eyebrow: string;
  title: string;
  answer: string;
  body: string[];
  photo: PhotoBrief;
}> = ({ eyebrow, title, answer, body, photo }) => (
  <SplitSection
    className="guide-intro-section"
    id="guide"
    eyebrow={eyebrow}
    title={<TwoToneTitle text={title} />}
    body={
      <div className="guide-copy">
        <p className="guide-copy__answer">{answer}</p>
        {body.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>
    }
    media={<ImagePlaceholder photo={photo} fallbackIndex={0} />}
  />
);

/** 2. Prices: grey band with price cards (numbers from prices.ts) */
export const PriceBandSection: React.FC<{ title: string; keys: PriceKey[] }> = ({ title, keys }) => (
  <div className="theme-section-band theme-section-band--muted price-band">
    <SectionContainer className="price-band__section" id="prices">
      <div className="price-band__header">
        <p className="theme-split__eyebrow">Prices</p>
        <h2 className="theme-split__title price-band__title">
          <TwoToneTitle text={title} />
        </h2>
        <p className="price-band__intro">
          Starting prices in AED. Send a photo or describe the problem on WhatsApp and we confirm your exact price
          before we book. No hidden charges.
        </p>
      </div>
      <ul className={`price-band__cards price-band__cards--${Math.min(keys.length, 4)}`}>
        {keys.map((key) => {
          const p: PriceItem = PRICES[key];
          return (
            <li key={key} className="price-card">
              <p className="price-card__label">{p.label}</p>
              <p className="price-card__price">{priceText(key)}</p>
              <p className="price-card__unit">{p.unit}</p>
              {p.visits ? <p className="price-card__visits">{p.visits}</p> : null}
              {warrantyText(key) ? <p className="price-card__warranty">{warrantyText(key)}</p> : null}
            </li>
          );
        })}
      </ul>
      {/* Service terms (prices.ts SERVICE_TERMS): answers "is the visit free?" before the visitor asks */}
      <ul className="price-band__terms" aria-label="How quotes, warranty and call-outs work">
        <li><strong>Free quote</strong> on WhatsApp from a photo or description</li>
        <li><strong>Free survey</strong> for {SERVICE_TERMS.freeSurveyFor}</li>
        <li><strong>Warranty</strong> shown on each price, with free re-treatment for pests and free repair for bird proofing</li>
        <li>
          <strong>Annual plans:</strong> free call-outs between visits, within {SERVICE_TERMS.calloutResponseHours} hours
        </li>
      </ul>
      <div className="price-band__cta">
        <WhatsAppCta label="Get Your Exact Price on WhatsApp:" />
      </div>
    </SectionContainer>
  </div>
);

/** 3. Signs (or "who it's for"): reversed split, checklist + photo */
export const SignsSection: React.FC<{ eyebrow: string; title: string; items: string[]; photo: PhotoBrief }> = ({
  eyebrow,
  title,
  items,
  photo,
}) => (
  <SplitSection
    className="guide-signs-section"
    reversed
    eyebrow={eyebrow}
    title={title}
    body={<CheckmarkList items={items} />}
    cta={<WhatsAppCta label="Not sure? Send Us a Photo:" />}
    media={<ImagePlaceholder photo={photo} fallbackIndex={1} />}
  />
);

export const RelatedLinks: React.FC<{ title: string; links: GuideLink[] }> = ({ title, links }) => (
  <nav className="related-links" aria-label={title}>
    <h3 className="related-links__title">{title}</h3>
    <ul>
      {links.map((l) => (
        <li key={l.href}>
          <Link href={l.href}>{l.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

/** 4. Safety + prevention: two columns, related services below */
export const SafetySection: React.FC<{
  safety: string[];
  prevention: string[];
  related?: GuideLink[];
}> = ({ safety, prevention, related }) => (
  <SectionContainer className="guide-safety-section">
    <p className="theme-split__eyebrow">Safety &amp; Prevention</p>
    <h2 className="theme-split__title">
      <span className="theme-heading-accent">Safe for Your Family,</span> Hard for Pests
    </h2>
    <div className="guide-safety-section__cols">
      <div className="guide-safety-section__col">
        <h3 className="guide-safety-section__h3">Safety for Your Family and Pets</h3>
        <CheckmarkList items={safety} />
      </div>
      <div className="guide-safety-section__col">
        <h3 className="guide-safety-section__h3">How to Keep Them Out</h3>
        <CheckmarkList items={prevention} />
      </div>
    </div>
    {related?.length ? <RelatedLinks title="Related Services" links={related} /> : null}
  </SectionContainer>
);
