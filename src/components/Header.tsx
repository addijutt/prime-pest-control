'use client';

import React, { useState, useRef, useEffect } from 'react';
import { NewLogo, NewMobileLogo } from '../utils/images';
import { noBreakPhone } from '../utils/formatPhone';

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

const ChevronIcon: React.FC = () => (
  <svg
    width="10" height="6" viewBox="0 0 10 6" fill="none"
    style={{ marginLeft: '5px', verticalAlign: 'middle', display: 'inline-block' }}
    aria-hidden="true"
  >
    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const dropdownLinkStyle: React.CSSProperties = {
  display: 'block',
  padding: '10px 20px',
  color: '#222',
  textDecoration: 'none',
  fontSize: '14px',
  whiteSpace: 'nowrap',
};

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pestMenuOpen, setPestMenuOpen] = useState(false);
  const [birdMenuOpen, setBirdMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setPestMenuOpen(false);
    setBirdMenuOpen(false);
  };

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
    <header ref={headerRef} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999 }}>
      <div className="header-emergency-banner">
        Emergency service appointments available.{' '}
        <a href={`tel:${PHONE_RAW}`} className="header-emergency-banner__phone">
          Call: {noBreakPhone(PHONE)}
        </a>
      </div>

      <nav className="navbar navbar-default" role="navigation" style={{ marginBottom: 0, borderRadius: 0 }}>
        <div className="container" style={{ maxWidth: '1440px', width: '100%' }}>
          <div className="header-mobile">
            <a href="/" className="header-mobile__logo">
              <img src={NewMobileLogo} alt="Prime Pest Control Dubai" loading="eager" />
            </a>
            <div className="header-mobile__tagline">
              <p className="header-mobile__location">Serving Dubai, UAE</p>
              <p className="header-mobile__call">
                <i className="fa fa-phone" aria-hidden="true"></i> Call Now
              </p>
            </div>
            <button
              type="button"
              className="header-mobile__toggle navbar-toggle"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
          </div>

          <div className="header-top-row hidden-xs">
            <div className="header-logo">
              <a href="/" className="navbar-brand text-hide">
                <img src={NewLogo} alt="Prime Pest Control Dubai Logo" loading="eager" /> Prime Pest Control Dubai
              </a>
            </div>
            <div className="header-tagline">
              <p>Pest &amp; Bird Control. Serving All Dubai Communities!</p>
            </div>
            <div className="header-cta-buttons">
              <a href={`tel:${PHONE_RAW}`} className="header-cta-btn header-cta-btn--call">
                Call: {noBreakPhone(PHONE)}
              </a>
              <a href="/free-quote" className="header-cta-btn header-cta-btn--quote">
                Free Instant Quote
              </a>
            </div>
          </div>

          <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'in' : ''}`} id="header-nav">
            <ul className="nav navbar-nav navbar-right">
              <li onClick={closeMobileMenu}><a href="/">Home</a></li>
              <li onClick={closeMobileMenu}><a href="/about-us">About Us</a></li>

              <li
                style={{ position: 'relative' }}
                onMouseEnter={() => { if (!mobileMenuOpen) setPestMenuOpen(true); }}
                onMouseLeave={() => { if (!mobileMenuOpen) setPestMenuOpen(false); }}
              >
                <a
                  href="/residential-pest-control"
                  onClick={(e) => {
                    if (mobileMenuOpen) {
                      e.preventDefault();
                      setPestMenuOpen(!pestMenuOpen);
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  Pest Control <ChevronIcon />
                </a>
                {!mobileMenuOpen && (
                  <ul style={dropdownUlStyle(pestMenuOpen)}>
                    {pestControlItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="nav-dropdown-link"
                          style={dropdownLinkStyle}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                {mobileMenuOpen && pestMenuOpen && (
                  <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 0 16px' }}>
                    {pestControlItems.map((item) => (
                      <li key={item.href} onClick={closeMobileMenu}>
                        <a href={item.href} style={{ display: 'block', padding: '8px 0', color: '#222', textDecoration: 'none', fontSize: '14px' }}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li
                style={{ position: 'relative' }}
                onMouseEnter={() => { if (!mobileMenuOpen) setBirdMenuOpen(true); }}
                onMouseLeave={() => { if (!mobileMenuOpen) setBirdMenuOpen(false); }}
              >
                <a
                  href="/bird-control-dubai"
                  onClick={(e) => {
                    if (mobileMenuOpen) {
                      e.preventDefault();
                      setBirdMenuOpen(!birdMenuOpen);
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  Bird Control <ChevronIcon />
                </a>
                {!mobileMenuOpen && (
                  <ul style={dropdownUlStyle(birdMenuOpen)}>
                    {birdControlItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="nav-dropdown-link"
                          style={dropdownLinkStyle}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                {mobileMenuOpen && birdMenuOpen && (
                  <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 0 16px' }}>
                    {birdControlItems.map((item) => (
                      <li key={item.href} onClick={closeMobileMenu}>
                        <a href={item.href} style={{ display: 'block', padding: '8px 0', color: '#222', textDecoration: 'none', fontSize: '14px' }}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li onClick={closeMobileMenu}><a href="/residential-pest-control">Residential Pest Control</a></li>
              <li onClick={closeMobileMenu}><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;