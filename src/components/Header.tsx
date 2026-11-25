'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { NewLogo, NewMobileLogo } from '../utils/images';
import { noBreakPhone } from '../utils/formatPhone';
import { NAV_LINKS, NAV_MENUS, type NavMenu } from '../config/navigation';
import { HERO_V2 } from '../config/siteFlags';

const PHONE = '055 304 5256';
const PHONE_RAW = '+971553045256';
const WHATSAPP_URL = 'https://wa.me/971553045256';

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

/** Desktop mega menu panel: grouped columns, no inner scrolling, help strip at the bottom */
const MegaPanel: React.FC<{ menu: NavMenu; open: boolean; onNavigate: () => void }> = ({ menu, open, onNavigate }) => (
  <div
    className={`mega-menu mega-menu--cols-${menu.columns}${open ? ' mega-menu--open' : ''}`}
    role="region"
    aria-label={`${menu.label} menu`}
  >
    <div className="mega-menu__cols">
      {menu.groups.map((group, i) => (
        <div key={group.heading ?? i} className="mega-menu__group">
          {group.heading ? <p className="mega-menu__heading">{group.heading}</p> : null}
          <ul>
            {group.links.map((link) => (
              <li key={link.href + link.label}>
                <Link href={link.href} className="mega-menu__link" onClick={onNavigate}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="mega-menu__footer">
      <span>{menu.footer}</span>
      <a href={WHATSAPP_URL} className="mega-menu__footer-link dynamic-href">
        Get a free quote <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>
);

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerSection, setDrawerSection] = useState<string | null>(null);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  // Short delay before a desktop menu closes, so it survives the mouse briefly leaving it on the way to a link
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openMenu = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDesktopOpen(id);
  };
  const closeMenuSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDesktopOpen(null), 150);
  };
  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  const closeDrawer = () => {
    setDrawerOpen(false);
    setDrawerSection(null);
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

  // Close an open desktop menu with Escape
  useEffect(() => {
    if (!desktopOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDesktopOpen(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [desktopOpen]);

  return (
    <>
      <header ref={headerRef} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999 }}>
        <div className="header-emergency-banner">
          {/* Hero v2 hides the first sentence on phones so the banner fits on one line */}
          <span className={HERO_V2 ? 'header-emergency-banner__text' : undefined}>
            Emergency service appointments available.{' '}
          </span>
          <a href={`tel:${PHONE_RAW}`} className="header-emergency-banner__phone">
            Call 24/7: {noBreakPhone(PHONE)}
          </a>
        </div>

        <nav className="site-navbar" role="navigation" aria-label="Main">
          <div className="container" style={{ maxWidth: '1440px' }}>

            {/* Mobile top bar */}
            <div className="header-mobile">
              <Link href="/" className="header-mobile__logo">
                <img src={NewMobileLogo} alt="Prime Pest Control Dubai" loading="eager" />
              </Link>
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
                <Link href="/" className="site-logo">
                  <img src={NewLogo} alt="Prime Pest Control Dubai Logo" loading="eager" />
                  <span className="sr-only">Prime Pest Control Dubai</span>
                </Link>
              </div>
              <div className="header-tagline">
                <p>Pest &amp; Bird Control. Serving All Dubai Communities!</p>
              </div>
              <div className="header-cta-buttons">
                <a href={`tel:${PHONE_RAW}`} className="header-cta-btn header-cta-btn--call">
                  Call 24/7: {noBreakPhone(PHONE)}
                </a>
                <Link href="/free-quote" className="header-cta-btn header-cta-btn--quote">
                  Free Instant Quote
                </Link>
              </div>
            </div>

            {/* Desktop nav: mega menus (config/navigation.ts). The logo links home. */}
            <div className="site-nav__collapse" id="header-nav">
              <ul className="site-nav__list">
                {NAV_MENUS.map((menu) => {
                  const open = desktopOpen === menu.id;
                  return (
                    <li
                      key={menu.id}
                      className="site-nav__mega-item"
                      onMouseEnter={() => openMenu(menu.id)}
                      onMouseLeave={closeMenuSoon}
                      onFocus={() => openMenu(menu.id)}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setDesktopOpen(null);
                      }}
                    >
                      <Link href={menu.href} aria-haspopup="true" aria-expanded={open}>
                        {menu.label} <ChevronIcon open={open} />
                      </Link>
                      <MegaPanel menu={menu} open={open} onNavigate={() => setDesktopOpen(null)} />
                    </li>
                  );
                })}
                {NAV_LINKS.map((link) => (
                  <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
                ))}
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
        <div className="mobile-drawer__head">
          <Link href="/" className="mobile-drawer__logo-link" onClick={closeDrawer}>
            <img src={NewMobileLogo} alt="Prime Pest Control Dubai" />
          </Link>
          <button className="mobile-drawer__close" onClick={closeDrawer} aria-label="Close menu">
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>

        <div className="mobile-drawer__body">
          <ul className="mobile-drawer__list">
            <li className="mobile-drawer__item">
              <Link href="/" className="mobile-drawer__link" onClick={closeDrawer}>
                <span>Home</span>
              </Link>
            </li>

            {NAV_MENUS.map((menu) => {
              const open = drawerSection === menu.id;
              return (
                <li key={menu.id} className="mobile-drawer__item">
                  <button
                    className={`mobile-drawer__link mobile-drawer__link--btn${open ? ' is-active' : ''}`}
                    onClick={() => setDrawerSection(open ? null : menu.id)}
                    aria-expanded={open}
                  >
                    <span>{menu.label}</span>
                    <ChevronIcon open={open} />
                  </button>
                  <ul className={`mobile-drawer__sub${open ? ' mobile-drawer__sub--open' : ''}`}>
                    {menu.groups.map((group, gi) => (
                      <React.Fragment key={group.heading ?? gi}>
                        {group.heading ? <li className="mobile-drawer__sub-heading">{group.heading}</li> : null}
                        {group.links.map((link) => (
                          <li key={link.href + link.label}>
                            <Link href={link.href} className="mobile-drawer__sub-link" onClick={closeDrawer}>
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </React.Fragment>
                    ))}
                  </ul>
                </li>
              );
            })}

            {NAV_LINKS.map((link) => (
              <li key={link.href} className="mobile-drawer__item">
                <Link href={link.href} className="mobile-drawer__link" onClick={closeDrawer}>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mobile-drawer__cta">
          <a href={`tel:${PHONE_RAW}`} className="mobile-drawer__cta-call">
            <i className="fa fa-phone" aria-hidden="true"></i>
            Call 24/7: {noBreakPhone(PHONE)}
          </a>
          <Link href="/free-quote" className="mobile-drawer__cta-quote" onClick={closeDrawer}>
            Free Instant Quote
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
