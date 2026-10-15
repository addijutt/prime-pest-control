import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

const FooterCall: React.FC = () => (
  <div className="footer-call visible-xs">
    <a href="https://wa.me/971553045256" style={{ display: 'block', width: '100%', textDecoration: 'none' }}>
      <WhatsAppIcon size={18} style={{ marginRight: '6px' }} /> WhatsApp Us: 055 304 5256
    </a>
  </div>
);

export default FooterCall;