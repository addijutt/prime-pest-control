import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

const FloatingWhatsApp: React.FC = () => (
  <div className="floating-btns">
    <a
      href="tel:+971553045256"
      className="floating-btns__btn floating-btns__btn--call"
      aria-label="Call us"
    >
      <span className="floating-btns__label">Call Now</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
      </svg>
    </a>
    <a
      href="https://wa.me/971553045256"
      className="floating-btns__btn floating-btns__btn--whatsapp"
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="floating-btns__label">WhatsApp Us</span>
      <WhatsAppIcon size={24} />
    </a>
  </div>
);

export default FloatingWhatsApp;