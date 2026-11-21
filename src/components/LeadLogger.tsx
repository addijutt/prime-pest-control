'use client';

import { useEffect } from 'react';
import { describeButton, getAttribution, logLead } from '../utils/leadLog';

/** Logs every WhatsApp and phone tap on the site to the lead sheet (see utils/leadLog.ts). */
export default function LeadLogger() {
  useEffect(() => {
    // Record where the visit came from on the first page, before the visitor navigates
    getAttribution();

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      if (href.startsWith('tel:')) logLead('Call', describeButton(link));
      else if (href.includes('wa.me') || href.includes('api.whatsapp.com')) logLead('WhatsApp', describeButton(link));
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
