import React from 'react';
import { FooterLogo } from '../utils/images';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Footer: React.FC = () => (
  <footer id="footer">
    <div className="container">
      <div className="footer-logo">
        <img src={FooterLogo} alt="Prime Pest Control Dubai Logo" loading="eager" />
      </div>
      <nav role="navigation">
        <ul id="footer-nav" className="list-inline">
          <li><a href="/">Home</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/residential-pest-control">Residential Pest Control</a></li>
          <li><a href="/bird-control-dubai">Bird Control</a></li>
          <li><a href="/hornet-nest-removal">Hornet Control</a></li>
          <li><a href="/wasp-nest-removal">Wasp Control</a></li>
          <li><a href="/bee-removal">Bee Removal</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
      </nav>
      <div className="footer-social">
        <a
          href="https://www.instagram.com/primepestdubai/"
          className="footer-social__btn footer-social__btn--instagram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Prime Pest Control on Instagram"
        >
          <InstagramIcon />
          <span>Instagram</span>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61595101124439"
          className="footer-social__btn footer-social__btn--facebook"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Prime Pest Control on Facebook"
        >
          <FacebookIcon />
          <span>Facebook</span>
        </a>
      </div>
      <p style={{color: 'white', fontSize: '14px', maxWidth: '700px', margin: '0 auto'}}>Prime Pest Control is a professional pest and bird control company serving all communities across Dubai. We provide direct pest control services for homes, villas, apartments, restaurants, hotels, and commercial properties. We serve Dubai Marina, Downtown Dubai, JBR, Business Bay, Jumeirah, DIFC, Palm Jumeirah, Al Barsha, Mirdif, and all Dubai communities. Contact us at 055 304 5256.</p>
      <small className="color-white">
        COPYRIGHT&copy;{' '}
        <span id="copy-year">2026</span>.
      </small>
    </div>
  </footer>
);

export default Footer;