'use client';

import React, { useState, useRef, useEffect } from 'react';
import { NewLogo, NewMobileLogo } from '../utils/images';
import { noBreakPhone } from '../utils/formatPhone';
import { useVisitorLocation } from '../hooks/useVisitorLocation';

const PHONE = '055 304 5256';
const PHONE_RAW = '+971553045256';

const pestControlItems = [
  { label: 'All Pest Services', href: '/residential-pest-control' },
  { label: 'Cockroach Control', href: '/cockroach-exterminator-near-me' },
  { label: 'Bed Bug Treatment', href: '/bed-bug-exterminator-near-me' },
  { label: 'Ant Control', href: '/ant-exterminator-near-me' },
  { label: 'Termite Control', href: '/termite-control' },
  { label: 'Rodent Control', href: '/rodent-control' },
  { label: 'Mosquito Control', href: '/mosquito-spraying-near-me' },
  { label: 'Spider Control', href: '/spider-exterminator-near-me' },
  { label: 'Wasp Control', href: '/wasp-nest-removal' },
  { label: 'Hornet Control', href: '/hornet-nest-removal' },
  { label: 'Flea Control', href: '/pest-control-for-fleas' },
  { label: 'Scorpion Control', href: '/scorpion-control-dubai' },
  { label: 'Camel Spider Removal', href: '/camel-spider-control-dubai' },
  { label: 'Commercial Pest Control', href: '/commercial-pest-control-dubai' },
];

const birdControlItems = [
  { label: 'All Bird Control', href: '/bird-control-dubai' },
  { label: 'Pigeon Control', href: '/pigeon-control-dubai' },
  { label: 'Mynah Bird Control', href: '/mynah-bird-control' },
  { label: 'Bird Netting', href: '/bird-netting-dubai' },
  { label: 'Bird Proofing', href: '/bird-proofing-dubai' },
  { label: 'Crow Control', href: '/crow-control-dubai' },
  { label: 'Sparrow Control', href: '/sparrow-control-dubai' },
  { label: 'Solar Panel Bird Proofing', href: '/solar-panel-bird-proofing-dubai' },
];

const dropdownUlStyle = (open: boolean): React.CSSProperties => ({
  display: open ? 'block' : 'none',
  position: 'absolute',
  top: '100%',
  left: 0,
  background: '#fff',
  border: '1px solid #e5e5e5',
  borderRadius: '8px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
  minWidth: '220px',
  maxHeight: '320px',
  overflowY: 'auto',
  zIndex: 9999,
  padding: '8px 0',
  listStyle: 'none',
  margin: 0,
});

const ChevronIcon: React.FC<{ open?: boolean }> = ({ open }) => (
  <svg
    width="12" height="7" viewBox="0 0 12 7" fill="none"
    style={{
      display: 'inline-block',
      flexShrink: 0,
      transition: 'transform 0.25s ease',
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
    }}
    aria-hidden="true"
  >
    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [pestMenuOpen, setPestMenuOpen] = useState(false);
  const [birdMenuOpen, setBirdMenuOpen] = useState(false);
  const [desktopPestOpen, setDesktopPestOpen] = useState(false);
  const [desktopBirdOpen, setDesktopBirdOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { city } = useVisitorLocation();

  const closeDrawer = () => {
    setDrawerOpen(false);
    setPestMenuOpen(false);
    setBirdMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => {
      document.documentElement.style.setProperty('--header-height', `${el.offsetHeight}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      <header ref={headerRef} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999 }}>
        <div className="header-emergency-banner">
          Emergency service appointments available.{' '}
          <a href={`tel:${PHONE_RAW}`} className="header-emergency-banner__phone">
            Call 24/7: {noBreakPhone(PHONE)}
          </a>
        </div>

        <nav className="site-navbar" role="navigation">
          <div className="container" style={{ maxWidth: '1440px' }}>

            {/* Mobile top bar */}
            <div className="header-mobile">
              <a href="/" className="header-mobile__logo">
                <img src={NewMobileLogo} alt="Prime Pest Control Dubai" loading="eager" />
              </a>
              <a href={`tel:${PHONE_RAW}`} className="header-mobile__tagline">
                <p className="header-mobile__location">Serving Dubai, UAE</p>
                <p className="header-mobile__call">
                  <i className="fa fa-phone" aria-hidden="true"></i> Call Now
                </p>
              </a>
              <button
                type="button"
                className="header-mobile__toggle"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open navigation menu"
              >
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
            </div>

            {/* Desktop top row */}
            <div className="header-top-row hidden-xs">
              <div className="header-logo">
                <a href="/" className="site-logo">
                  <img src={NewLogo} alt="Prime Pest Control Dubai Logo" loading="eager" />
                  <span className="sr-only">Prime Pest Control Dubai</span>
                </a>
              </div>
              <div className="header-tagline">
                <p>Pest &amp; Bird Control. Serving All Dubai Communities!</p>
              </div>
              <div className="header-cta-buttons">
                <a href={`tel:${PHONE_RAW}`} className="header-cta-btn header-cta-btn--call">
                  Call 24/7: {noBreakPhone(PHONE)}
                </a>
                <a href="/free-quote" className="header-cta-btn header-cta-btn--quote">
                  Free Instant Quote
                </a>
              </div>
            </div>

            {/* Desktop nav — hidden on mobile via CSS */}
            <div className="site-nav__collapse" id="header-nav">
              <ul className="site-nav__list">
                <li><a href="/">Home</a></li>
                <li><a href="/about-us">About Us</a></li>

                <li
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDesktopPestOpen(true)}
                  onMouseLeave={() => setDesktopPestOpen(false)}
                >
                  <a href="/residential-pest-control" style={{ cursor: 'pointer' }}>
                    Pest Control <ChevronIcon open={desktopPestOpen} />
                  </a>
                  <ul style={dropdownUlStyle(desktopPestOpen)}>
                    {pestControlItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="nav-dropdown-link"
                          style={{ display: 'block', padding: '10px 20px', color: '#222', textDecoration: 'none', fontSize: '14px', whiteSpace: 'nowrap' }}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDesktopBirdOpen(true)}
                  onMouseLeave={() => setDesktopBirdOpen(false)}
                >
                  <a href="/bird-control-dubai" style={{ cursor: 'pointer' }}>
                    Bird Control <ChevronIcon open={desktopBirdOpen} />
                  </a>
                  <ul style={dropdownUlStyle(desktopBirdOpen)}>
                    {birdControlItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="nav-dropdown-link"
                          style={{ display: 'block', padding: '10px 20px', color: '#222', textDecoration: 'none', fontSize: '14px', whiteSpace: 'nowrap' }}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li><a href="/residential-pest-control">Residential Pest Control</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
              </ul>
            </div>

          </div>
        </nav>
      </header>

      {/* Overlay backdrop */}
      <div
        className={`mobile-drawer-overlay${drawerOpen ? ' mobile-drawer-overlay--open' : ''}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Right-side drawer */}
      <div
        className={`mobile-drawer${drawerOpen ? ' mobile-drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="mobile-drawer__head">
          <a href="/" className="mobile-drawer__logo-link" onClick={closeDrawer}>
            <img src={NewMobileLogo} alt="Prime Pest Control Dubai" />
          </a>
          <button className="mobile-drawer__close" onClick={closeDrawer} aria-label="Close menu">
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>

        {/* Scrollable nav body */}
        <div className="mobile-drawer__body">
          <ul className="mobile-drawer__list">

            <li className="mobile-drawer__item">
              <a href="/" className="mobile-drawer__link" onClick={closeDrawer}>
                <span>Home</span>
              </a>
            </li>

            <li className="mobile-drawer__item">
              <a href="/about-us" className="mobile-drawer__link" onClick={closeDrawer}>
                <span>About Us</span>
              </a>
            </li>

            <li className="mobile-drawer__item">
              <button
                className={`mobile-drawer__link mobile-drawer__link--btn${pestMenuOpen ? ' is-active' : ''}`}
                onClick={() => setPestMenuOpen(!pestMenuOpen)}
                aria-expanded={pestMenuOpen}
              >
                <span>Pest Control</span>
                <ChevronIcon open={pestMenuOpen} />
              </button>
              <ul className={`mobile-drawer__sub${pestMenuOpen ? ' mobile-drawer__sub--open' : ''}`}>
                {pestControlItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="mobile-drawer__sub-link" onClick={closeDrawer}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="mobile-drawer__item">
              <button
                className={`mobile-drawer__link mobile-drawer__link--btn${birdMenuOpen ? ' is-active' : ''}`}
                onClick={() => setBirdMenuOpen(!birdMenuOpen)}
                aria-expanded={birdMenuOpen}
              >
                <span>Bird Control</span>
                <ChevronIcon open={birdMenuOpen} />
              </button>
              <ul className={`mobile-drawer__sub${birdMenuOpen ? ' mobile-drawer__sub--open' : ''}`}>
                {birdControlItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="mobile-drawer__sub-link" onClick={closeDrawer}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="mobile-drawer__item">
              <a href="/residential-pest-control" className="mobile-drawer__link" onClick={closeDrawer}>
                <span>Residential Pest Control</span>
              </a>
            </li>

            <li className="mobile-drawer__item">
              <a href="/contact-us" className="mobile-drawer__link" onClick={closeDrawer}>
                <span>Contact Us</span>
              </a>
            </li>

          </ul>
        </div>

        {/* CTA footer */}
        <div className="mobile-drawer__cta">
          <a href={`tel:${PHONE_RAW}`} className="mobile-drawer__cta-call">
            <i className="fa fa-phone" aria-hidden="true"></i>
            Call 24/7: {noBreakPhone(PHONE)}
          </a>
          <a href="/free-quote" className="mobile-drawer__cta-quote" onClick={closeDrawer}>
            Free Instant Quote
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
