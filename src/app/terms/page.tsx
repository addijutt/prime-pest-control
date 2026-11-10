import type { Metadata } from 'next';
import Link from 'next/link';
import WhyChooseUsSidebar from '../../components/sections/WhyChooseUsSidebar';
import PillCta from '../../components/ui/PillCta';
import { noBreakPhone } from '../../utils/formatPhone';

export const metadata: Metadata = {
  title: 'Terms of Use | Prime Pest Control Dubai',
  description:
    'Terms of Use for Prime Pest Control Dubai. Professional pest and bird control services across all Dubai communities.',
  alternates: { canonical: 'https://www.primepestcontrol.ae/terms' },
};

const PHONE = '055 304 5256';
const PHONE_RAW = '+971553045256';

export default function TermsPage() {
  return (
    <>
      <div id="hero" className="legal-hero" />

      <section className="legal-page-section">
        <div className="legal-page-section__inner">
          <div className="legal-page-layout">
            <aside className="legal-page-layout__sidebar">
              <WhyChooseUsSidebar />
            </aside>

            <div className="legal-page-layout__content privacy">
              <h2 className="text-center">Terms of Use</h2>
              <p><strong>Last Updated: November 10, 2026</strong></p>

              <p>
                Welcome to Prime Pest Control Dubai (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of our website (the &ldquo;Site&rdquo;), services, and any related communications. By accessing or using this Site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not use this Site.
              </p>

              <h3>1. About Our Services</h3>
              <p>
                Prime Pest Control Dubai is a professional pest and bird control company serving residential and commercial properties across all Dubai communities. We provide pest extermination, bird control, and related treatments directly and in partnership with licensed pest control operators, including Yalla Pest Control.
              </p>
              <p>
                All treatments are carried out by trained, licensed technicians. Any service arranged through our Site or by calling us is subject to these Terms.
              </p>

              <h3>2. Acceptance of Terms</h3>
              <p>
                By visiting, accessing, or using our Site, submitting any form, or communicating with us in any way, you acknowledge that you have read, understood, and agreed to these Terms of Use. If you do not agree, you may not use the Site or services.
              </p>

              <h3>3. Modifications to Terms</h3>
              <p>
                We reserve the right to update, modify, or replace these Terms at any time. Changes will become effective immediately upon posting on this page. Your continued use of the Site following the posting of revised Terms constitutes your acceptance of such changes. We encourage you to review this page periodically.
              </p>

              <h3>4. Privacy Policy</h3>
              <p>
                Please review our <Link href="/privacy-policy" className="privacy-policy-link">Privacy Policy</Link>, which explains how we collect, use, and disclose your personal information. Your use of this Site signifies your consent to the collection and use of data as described in our Privacy Policy.
              </p>

              <h3>5. Electronic Communications</h3>
              <p>
                By using our Site or sending us emails, calls, or text messages, you consent to receive communications from us electronically or by other means, including email, phone, SMS, or WhatsApp. You agree that all agreements, notices, disclosures, and other communications provided electronically satisfy any legal requirement that such communications be in writing.
              </p>

              <h3>6. Copyright and Intellectual Property</h3>
              <p>
                All content on this Site, including text, graphics, logos, button icons, images, videos, audio clips, digital downloads, and software, is the property of Prime Pest Control Dubai or its licensors and is protected by applicable copyright, trademark, and intellectual property laws.
              </p>
              <p>
                You may not copy, reproduce, republish, distribute, transmit, or create derivative works from any portion of this Site without our prior written consent. Limited permission is granted to download or print portions of this Site for personal, non-commercial use, provided that all copyright and proprietary notices are retained.
              </p>
              <p>
                If you believe that any content on this Site infringes on your intellectual property rights, please contact us at: info@primepestcontrol.ae.
              </p>

              <h3>7. User Submissions</h3>
              <p>
                Any files, data, comments, feedback, or materials you submit to us constitute a non-exclusive, royalty-free, perpetual license for us to use, modify, reproduce, publish, distribute, and display such materials for business, marketing, or promotional purposes.
              </p>

              <h3>8. License and Site Access</h3>
              <p>
                We grant you a limited, revocable, non-exclusive license to access and make personal, non-commercial use of this Site. This license does not include the right to:
              </p>
              <ul>
                <li>Reproduce, duplicate, copy, sell, or exploit the Site or its contents for commercial purposes</li>
                <li>Frame or use framing techniques to enclose any trademark, logo, or proprietary information</li>
                <li>Use meta tags or hidden text using our name or trademarks without written permission</li>
              </ul>
              <br />
              <p>We reserve the right to revoke this license at any time for any reason.</p>

              <h3>9. Disclaimer of Warranties</h3>
              <p>
                THIS SITE AND ALL INFORMATION, CONTENT, PRODUCTS, AND SERVICES MADE AVAILABLE THROUGH IT ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS.
              </p>
              <p>
                Prime Pest Control Dubai MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that the Site, servers, or communications are free of viruses or other harmful components. You expressly agree that your use of the Site is at your sole risk.
              </p>

              <h3>10. Limitation of Liability</h3>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OR INABILITY TO USE THIS SITE OR ANY INFORMATION, CONTENT, PRODUCTS, OR SERVICES PROVIDED, INCLUDING BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND CONSEQUENTIAL DAMAGES.
              </p>

              <h3>11. SMS and Phone Communications Consent</h3>
              <p>
                By providing your phone number to us through a web form, service request, or inbound phone call, you expressly consent to receive text messages (SMS/MMS), WhatsApp messages, calls, and other communications from us regarding your inquiry, appointments, scheduling, follow-ups, and related services.
              </p>
              <p>
                <strong>Inbound Calls as Consent:</strong> If you call us directly, you acknowledge that this constitutes an express invitation for us to return your call or message you regarding your inquiry.
              </p>
              <p>
                <strong>Opt-Out:</strong> You can opt out of text communications at any time by contacting us at info@primepestcontrol.ae. Standard messaging and data rates may apply.
              </p>

              <h3>12. Service Partner Disclaimer</h3>
              <p>
                Some pest control treatments may be delivered in partnership with licensed operators, including Yalla Pest Control. Partner technicians operate under service agreements with Prime Pest Control Dubai and are required to meet our quality and safety standards.
              </p>
              <p>
                Prime Pest Control Dubai oversees all bookings and is your single point of contact for any service concerns. Contact us at info@primepestcontrol.ae or call 055 304 5256 for any issues with a completed treatment.
              </p>

              <h3>13. Third-Party Links</h3>
              <p>
                This Site may contain links to third-party websites. We do not control or endorse any third-party content, products, or services and are not responsible for their accuracy or reliability. Accessing third-party websites is at your own risk.
              </p>

              <h3>14. Disputes and Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates, without regard to conflict of law provisions. Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
              </p>
              <p>
                You agree that any cause of action related to the Site must commence within one (1) year after the cause of action accrues. Otherwise, such cause of action is permanently barred.
              </p>

              <h3>15. Indemnification</h3>
              <p>
                You agree to indemnify, defend, and hold harmless Prime Pest Control Dubai, its officers, employees, agents, licensors, and affiliates from and against all claims, damages, losses, liabilities, costs, and expenses (including attorney&apos;s fees) arising from:
              </p>
              <ul>
                <li>Your use of the Site</li>
                <li>Your violation of these Terms</li>
                <li>Your infringement of any intellectual property or other rights of any third party</li>
              </ul>
              <br />

              <h3>16. Miscellaneous</h3>
              <p>
                <strong>Severability:</strong> If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
              <p>
                <strong>Waiver:</strong> Our failure to enforce any provision of these Terms shall not constitute a waiver of such right.
              </p>
              <p>
                <strong>Assignment:</strong> We may assign our rights and obligations under these Terms at any time without notice.
              </p>

              <h3>17. Contact Information</h3>
              <p>If you have any questions regarding these Terms of Use, please contact us:</p>
              <p className="link-clr">
                <strong className="pb-2">Prime Pest Control Dubai</strong><br />
                Dubai, United Arab Emirates<br />
                Phone: <a href="tel:+971553045256" className="text-black">055 304 5256</a><br />
                Email: <a href="mailto:info@primepestcontrol.ae" className="text-black">info@primepestcontrol.ae</a><br />
              </p>

              <div className="legal-page-layout__cta">
                <PillCta href={`tel:${PHONE_RAW}`} className="dynamic-href">
                  <span className="theme-pill-cta__text dynamic-phone">Call For Free Estimate: {noBreakPhone(PHONE)}</span>
                  <span className="theme-pill-cta__arrow" aria-hidden="true">→</span>
                </PillCta>
                <p>
                  <Link href="/contact-us">Call Us for a Free Estimate</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
