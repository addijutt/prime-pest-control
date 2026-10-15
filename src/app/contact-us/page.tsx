import type { Metadata } from 'next';
import ContactUsClient from './ContactUsClient';

export const metadata: Metadata = {
  title: 'Contact Us | Prime Pest Control Dubai | Free Quote',
  description:
    'Contact Prime Pest Control Dubai for a free pest and bird control quote. WhatsApp us or fill out our form. Fast response guaranteed across all Dubai communities.',
  alternates: { canonical: 'https://www.primepestcontrol.ae/contact-us' },
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}