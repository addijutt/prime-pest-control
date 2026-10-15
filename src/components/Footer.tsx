import React from 'react';
import { FooterLogo } from '../utils/images';

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
      <p style={{color: 'white', fontSize: '14px', maxWidth: '700px', margin: '0 auto'}}>Prime Pest Control is a professional pest and bird control company serving all communities across Dubai. We provide direct pest control services for homes, villas, apartments, restaurants, hotels, and commercial properties. We serve Dubai Marina, Downtown Dubai, JBR, Business Bay, Jumeirah, DIFC, Palm Jumeirah, Al Barsha, Mirdif, and all Dubai communities. Contact us at 055 304 5256.</p>
      <small className="color-white">
        COPYRIGHT&copy;{' '}
        <span id="copy-year">2025</span>.
      </small>
    </div>
  </footer>
);

export default Footer;