'use client';

import { useEffect } from 'react';
import { describeButton, getAttribution, logLead, withWhatsAppRef } from '../utils/leadLog';

/** Logs every WhatsApp and phone tap on the site to the lead sheet (see utils/leadLog.ts), and adds the
 *  visit reference to WhatsApp messages so a chat can be matched to its row. */
export default function LeadLogger() {
  useEffect(() => {
    // Record where the visit came from on the first page, before the visitor navigates
    getAttribution();

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      if (href.startsWith('tel:')) logLead('Call', describeButton(link));
      else if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
        // Runs in the capture phase, before the browser follows the link, so the new address is used
        link.setAttribute('href', withWhatsAppRef(href));
        logLead('WhatsApp', describeButton(link));
      }
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
