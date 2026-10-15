import React from 'react';
import SplitSection from '../layout/SplitSection';
import PillCta from '../ui/PillCta';
import IconFeatureList from '../ui/IconFeatureList';
import { UrgencyComponentImage } from '../../utils/images';
import { noBreakPhone } from '../../utils/formatPhone';

const URGENCY_FEATURES = [
  {
    id: 'pest-multiply-fast',
    iconSrc: '/assets/img/urgency-component/badge-time-fasat.webp',
    title: "Pests Multiply Fast in Dubai's Heat",
    description: (
      <>
        What&apos;s a small problem today
        <br />
        can be a big one next week.
      </>
    ),
  },
  {
    id: 'free-estimate',
    iconSrc: '/assets/img/urgency-component/badge-free-estimate.webp',
    title: 'Free Estimate in 60 Seconds',
    description: (
      <>
        Get a free, no-obligation estimate
        <br />
        in 60 seconds flat.
      </>
    ),
  },
  {
    id: 'speak-to-expert',
    iconSrc: '/assets/img/urgency-component/badge-phone-call.webp',
    title: (
      <>
        Speak to a Dubai Expert
        <br />
        Directly via WhatsApp
      </>
    ),
    description: (
      <>
        Get a straight answer from
        <br />
        a real local Dubai expert. <strong className="theme-heading-accent">Call today.</strong>
      </>
    ),
  },
] as const;

export type UrgencySectionVariant = 'default' | 'overlay';

type UrgencySectionProps = {
  variant?: UrgencySectionVariant;
  utahOnlyCoupon?: boolean;
};

const DEFAULT_PROMO_PRICE = { dollars: 'AED', cents: '299', label: 'AED 299' } as const;

const UrgencySection: React.FC<UrgencySectionProps> = ({
  variant = 'default',
}) => {
  const phone = '055 304 5256';
  const whatsappUrl = 'https://wa.me/971553045256';
  const isOverlay = variant === 'overlay';
  const promoPrice = DEFAULT_PROMO_PRICE;

  const title = (
    <>
      <span className="theme-heading-accent">The Longer You Wait,</span>
      <br />
      <span className="theme-heading">The Worse It Gets</span>
    </>
  );

  const cta = (
    <PillCta href={whatsappUrl} className="dynamic-href">
      <span className="theme-pill-cta__text dynamic-phone">
        WhatsApp for Free Estimate: {noBreakPhone(phone)}
      </span>
      <span className="theme-pill-cta__arrow" aria-hidden="true">→</span>
    </PillCta>
  );

  const overlayMedia = (
    <div className="urgency-overlay-media">
      <img
        src={UrgencyComponentImage}
        alt="Prime Pest Control pest control technicians in Dubai"
        className="urgency-overlay-media__image"
        loading="lazy"
      />
      <div className="urgency-overlay-media__cards">
        <div className="urgency-promo-card urgency-promo-card--coupon">
          <div className="urgency-promo-card__tab">Special Offer</div>
          <div className="urgency-promo-card__body">
            <p className="urgency-promo-card__eyebrow">Ask about our</p>
            <p className="urgency-promo-card__price">
              <span className="urgency-promo-card__dollars">{promoPrice.dollars}</span>
              <span className="urgency-promo-card__cents"> {promoPrice.cents}</span>
            </p>
            <p className="urgency-promo-card__special">Special</p>
            <hr className="urgency-promo-card__divider" />
            <p className="urgency-promo-card__fineprint">
              *{promoPrice.label} service, may vary, WhatsApp for details
            </p>
          </div>
        </div>
        <a href={whatsappUrl} className="urgency-promo-card urgency-promo-card--call dynamic-href">
          <div className="urgency-promo-card__tab">WhatsApp for Free Quote</div>
          <div className="urgency-promo-card__body">
            <span className="urgency-promo-card__phone dynamic-phone">{noBreakPhone(phone)}</span>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <SplitSection
      className={`urgency-section${isOverlay ? ' urgency-section--overlay' : ''}`}
      reversed={isOverlay}
      imageSrc={isOverlay ? undefined : UrgencyComponentImage}
      imageAlt="Prime Pest Control pest control technicians in Dubai"
      media={isOverlay ? overlayMedia : undefined}
      title={title}
      body={<IconFeatureList items={[...URGENCY_FEATURES]} />}
      cta={cta}
    />
  );
};

export default UrgencySection;