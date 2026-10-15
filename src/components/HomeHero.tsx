'use client';

import React, { useMemo, useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { pestIconScale } from '../utils/pestIcons';
import { noBreakPhone } from '../utils/formatPhone';
import type { PestImageRef } from '../config/pageContentHelpers';
import {
  GENERIC_HERO_EXPANSION_PESTS,
  HERO_MORE_PEST,
  handlePestImageError,
  pestAssetPaths,
  toHeroDesktopAssets,
} from '../config/pageContentHelpers';

type PestItem = {
  label: string;
  href: string;
  desktop: string;
  mobile: string;
  longLabel?: boolean;
};

type MobileHeroPestItem = {
  label: string;
  href: string;
  image?: string;
  badgeMore?: boolean;
  zoom?: number;
};

function resolveZoom(item: MobileHeroPestItem): number | undefined {
  if (item.zoom !== undefined) return item.zoom;
  if (item.image) return pestIconScale(item.image);
  return undefined;
}

const HeroCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <span className={className} aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#F3EA00" />
      <path
        d="M7 12.5L10.5 16L17 9"
        stroke="#000"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const ALL_PESTS: PestItem[] = [
  { label: 'GENERAL PEST CONTROL', href: '/residential-pest-control', desktop: '/assets/img/pests/residential-pc.webp', mobile: '/assets/img/pests/residential-pc-m.webp', longLabel: true },
  { label: 'TERMITES', href: '/termite-control', desktop: '/assets/img/pests/termite.webp', mobile: '/assets/img/pests/termite-m.webp' },
  { label: 'ROACHES', href: '/roach-exterminator-near-me', desktop: '/assets/img/pests/roach.webp', mobile: '/assets/img/pests/roach-m.webp' },
  { label: 'RODENTS', href: '/rodent-control', desktop: '/assets/img/pests/white-mouse.webp', mobile: '/assets/img/pests/white-mouse-m.webp' },
  { label: 'ANTS', href: '/ant-exterminator-near-me', desktop: '/assets/img/pests/black-ant.webp', mobile: '/assets/img/pests/black-ant-m.webp' },
  { label: 'MOSQUITOS', href: '/mosquito-spraying-near-me', desktop: '/assets/img/pests/mosquito.webp', mobile: '/assets/img/pests/mosquito-m.webp' },
  { label: 'BED BUGS', href: '/bed-bug-exterminator-near-me', desktop: '/assets/img/pests/common-bed-bug-d.webp', mobile: '/assets/img/pests/common-bed-bug-m.webp' },
  { label: 'WASPS & BEES', href: '/wasp-nest-removal', desktop: '/assets/img/pests/wasp.webp', mobile: '/assets/img/pests/wasp-m.webp', longLabel: true },
  { label: '50+ MORE', href: '/residential-pest-control', desktop: '/assets/img/pests/shield.webp', mobile: '/assets/img/pests/shield-m.webp' },
];

const COLLAPSED_PESTS = [ALL_PESTS[0], ALL_PESTS[1], ALL_PESTS[2], ALL_PESTS[3], ALL_PESTS[8]];

const BASE = '/assets/img/pests/mobile-hero';
const MOBILE_HERO_PESTS: MobileHeroPestItem[] = [
  { label: 'Ants', href: '/ant-exterminator-near-me', image: `${BASE}/ant.webp` },
  { label: 'Rats & Mice', href: '/rodent-control', image: `${BASE}/mouse.webp` },
  { label: 'Termites', href: '/termite-control', image: `${BASE}/termite.webp` },
  { label: 'Roaches', href: '/roach-exterminator-near-me', image: `${BASE}/roach.webp` },
  { label: 'Wasps', href: '/wasp-nest-removal', image: `${BASE}/wasp.webp` },
  { label: 'Bed Bugs', href: '/bed-bug-exterminator-near-me', image: `${BASE}/bed-bug.webp` },
  { label: 'Mosquitoes', href: '/mosquito-spraying-near-me', image: `${BASE}/mosquito.webp` },
  { label: 'Hornets', href: '/hornet-nest-removal', image: `${BASE}/hornet.webp` },
  { label: 'Pigeons', href: '/residential-pest-control', image: `${BASE}/specialty.webp` },
  { label: 'Mynahs', href: '/residential-pest-control', image: `${BASE}/specialty.webp` },
  { label: 'Carpenter Bees', href: '/carpenter-bee-exterminator-near-me', image: `${BASE}/carpenter-bee.webp` },
  { label: 'Spiders', href: '/spider-exterminator-near-me', image: `${BASE}/spider.webp` },
  { label: 'Fleas', href: '/pest-control-for-fleas', image: `${BASE}/flea.webp` },
  { label: 'Bees', href: '/bee-removal', image: `${BASE}/bee.webp` },
  { label: '& 50+ More', href: '/residential-pest-control', badgeMore: true },
];

const MOBILE_HERO_BENEFITS = [
  'Serving All Dubai Communities & Free Zones',
  'Same or Next Day Service Available',
  'Free, No-Obligation Estimates',
  'Licensed & Insured Technicians',
  'Results 100% Guaranteed',
];

function toMobileHeroPest(ref: PestImageRef): MobileHeroPestItem {
  const paths = pestAssetPaths(ref.imageKey);
  return { label: ref.label, href: ref.href, image: paths.mobile };
}

interface HomeHeroProps {
  title?: string;
  desktopPestIcons?: PestImageRef[];
}

const HomeHero: React.FC<HomeHeroProps> = ({
  title = 'Expert Pest & Bird Control in Dubai',
  desktopPestIcons,
}) => {
  const [pestsExpanded, setPestsExpanded] = useState(false);
  const city = 'Dubai';
  const phone = '055 304 5256';
  const whatsappUrl = 'https://wa.me/971553045256';
  const isShortHeroTitle = useMemo(() => title.trim().split(/\s+/).filter(Boolean).length <= 3, [title]);

  const { collapsedPests, allPests } = useMemo(() => {
    if (!desktopPestIcons?.length) {
      return { collapsedPests: COLLAPSED_PESTS, allPests: ALL_PESTS };
    }
    const customPests = desktopPestIcons.slice(0, 4);
    const collapsed = [...customPests, HERO_MORE_PEST].map(toHeroDesktopAssets);
    const expanded = [...customPests, ...GENERIC_HERO_EXPANSION_PESTS, HERO_MORE_PEST].map(toHeroDesktopAssets);
    return { collapsedPests: collapsed, allPests: expanded };
  }, [desktopPestIcons]);

  const mobileHeroPests = useMemo(() => {
    if (!desktopPestIcons?.length) return MOBILE_HERO_PESTS;
    const firstFour = desktopPestIcons.slice(0, 4).map(toMobileHeroPest);
    return [...firstFour, ...MOBILE_HERO_PESTS.slice(4)];
  }, [desktopPestIcons]);

  const visiblePests = pestsExpanded ? allPests : collapsedPests;

  return (
    <section id="hero" className={`home-hero${isShortHeroTitle ? ' home-hero--short-title' : ''}`}>
      <a href={whatsappUrl} className="header-mobile-cta dynamic-href">
        <span className="header-mobile-cta__top">
          <WhatsAppIcon size={22} className="header-mobile-cta__icon" />
          <span className="header-mobile-cta__prefix">WhatsApp for a</span>
          <span className="header-mobile-cta__highlight">Free Estimate</span>
        </span>
        <span className="header-mobile-cta__phone dynamic-phone">{noBreakPhone(phone)}</span>
      </a>

      <div className="home-hero--desktop">
        <div className={`home-hero__card${pestsExpanded ? ' home-hero__card--pests-expanded' : ''}`}>
          <div className="home-hero__content">
            <h1 className="home-hero__title">{title}</h1>
            <ul className="home-hero__highlights">
              <li className="home-hero__highlight">
                <HeroCheckIcon className="home-hero__highlight-icon" />
                <span>Serving {city} &amp; Surrounding Areas</span>
              </li>
              <li className="home-hero__highlight">
                <HeroCheckIcon className="home-hero__highlight-icon" />
                <span>Free, No-Obligation Quote in 60 Seconds</span>
              </li>
            </ul>
          </div>

          <div className={`home-hero__pests${pestsExpanded ? ' home-hero__pests--expanded' : ''}`}>
            <div className="home-hero__pests-header">
              <span>PESTS & BIRDS WE TREAT:</span>
              <button
                type="button"
                className="home-hero__pests-toggle"
                aria-expanded={pestsExpanded}
                onClick={() => setPestsExpanded((expanded) => !expanded)}
              >
                {pestsExpanded ? 'SHOW LESS' : 'AND MORE'}
              </button>
            </div>
            <div className="home-hero__pests-grid">
              {visiblePests.map((pest) => (
                <a
                  key={pest.label}
                  href={pest.href}
                  className={`home-hero__pest${pest.longLabel ? ' home-hero__pest--long-label' : ''}`}
                >
                  <picture>
                    <source media="(max-width: 767px)" srcSet={pest.mobile} />
                    <img
                      src={pest.desktop}
                      alt={pest.label}
                      loading="eager"
                      style={{ '--pest-zoom': pestIconScale(pest.desktop) } as React.CSSProperties}
                      onError={handlePestImageError('desktop')}
                    />
                  </picture>
                  <span>{pest.label}</span>
                </a>
              ))}
            </div>

            <a href={whatsappUrl} className="home-hero__pests-cta dynamic-href">
              <span className="home-hero__pests-cta-label">WhatsApp for Free Estimate:</span>
              <span className="home-hero__pests-cta-phone dynamic-phone">{noBreakPhone(phone)}</span>
            </a>
          </div>

          <div className="home-hero__guy" aria-hidden="true">
            <img
              src="/assets/img/hero-guy-transparent.png"
              alt=""
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="home-hero-mobile">
        <div className="home-hero-mobile__photo">
          <div className="home-hero-mobile__headline">
            <h1 className="home-hero-mobile__title">{title}</h1>
            <ul className="home-hero-mobile__highlights">
              <li className="home-hero-mobile__highlight">
                <HeroCheckIcon className="home-hero-mobile__highlight-icon" />
                <span>Serving {city} &amp; Surrounding Areas</span>
              </li>
              <li className="home-hero-mobile__highlight">
                <HeroCheckIcon className="home-hero-mobile__highlight-icon" />
                <span>Free, No-Obligation Quote in 60 Seconds</span>
              </li>
            </ul>
          </div>
          <div className="home-hero-mobile__guy" aria-hidden="true">
            <img
              src="/assets/img/hero-guy-transparent.png"
              alt=""
              loading="eager"
            />
          </div>
        </div>

        <div className="home-hero-mobile__panel">
          <div className="home-hero-mobile__pest-box">
            <h2 className="home-hero-mobile__pest-title">
              What Pest or Bird Problem Do You Have? Services Available in Dubai
            </h2>
            <div className="home-hero-mobile__pest-grid">
              {mobileHeroPests.map((pest) => {
                const zoom = resolveZoom(pest);
                return (
                  <a
                    key={pest.label}
                    href={pest.href}
                    className={`home-hero-mobile__pest${pest.badgeMore ? ' home-hero-mobile__pest--badge-more' : ''}`}
                  >
                    {pest.badgeMore ? (
                      <span className="home-hero-mobile__pest-more-badge">&amp;&nbsp;50+<br />More</span>
                    ) : pest.image ? (
                      <img
                        src={pest.image}
                        alt={pest.label}
                        loading="eager"
                        style={zoom !== undefined ? { '--pest-zoom': zoom } as React.CSSProperties : undefined}
                        onError={handlePestImageError('mobile')}
                      />
                    ) : null}
                    {!pest.badgeMore && <span>{pest.label}</span>}
                  </a>
                );
              })}
            </div>
          </div>

          <a href={whatsappUrl} className="home-hero-mobile__cta dynamic-href">
            <span className="home-hero-mobile__cta-label">WhatsApp for Free Estimate</span>
            <span className="home-hero-mobile__cta-phone dynamic-phone">{noBreakPhone(phone)}</span>
          </a>

          <p className="home-hero-mobile__tagline">
            We specialize in pest control, bird control &amp; pest removal across Dubai!
          </p>

          <ul className="home-hero-mobile__benefits">
            {MOBILE_HERO_BENEFITS.map((benefit) => (
              <li key={benefit} className="home-hero-mobile__benefit">
                <img src="/assets/img/bulletpoint.webp" alt="" className="home-hero-mobile__benefit-icon" aria-hidden="true" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;