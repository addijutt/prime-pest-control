'use client';

import React, { useRef, useState } from 'react';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import { UrgencyComponentImage } from '../../utils/images';
import ServiceAreaSection from '../../components/sections/ServiceAreaSection';
import FreeQuoteSection from '../../components/sections/FreeQuoteSection';
import SatisfactionGuaranteeSection from '../../components/sections/SatisfactionGuaranteeSection';

const WHY_ITEMS = [
  { id: 'free-estimates',  label: 'Free Pest & Bird Control Estimates',    iconSrc: '/assets/img/why-choose-us-section/why-choose-us-free-estimates.png' },
  { id: 'prompt-service',  label: 'Prompt Same-Day Service in Dubai',       iconSrc: '/assets/img/why-choose-us-section/why-choose-us-prompt-service.png' },
  { id: 'guaranteed',      label: 'Results 100% Guaranteed',                iconSrc: '/assets/img/why-choose-us-section/why-choose-us-results-guarantee.png' },
  { id: 'dubai-based',     label: 'Dubai-Based Specialists',                iconSrc: '/assets/img/why-choose-us-section/why-choose-us-locally-owned.png' },
  { id: 'top-rated',       label: 'Top Rated Customer Service',             iconSrc: null, iconClass: 'fa-solid fa-thumbs-up' },
  { id: 'fully-trained',   label: 'Fully Trained & Insured Technicians',    iconSrc: null, iconClass: 'fa-solid fa-certificate' },
] as const;

interface FormData {
  Name: string;
  Phone: string;
  Email: string;
  Problem: string;
  Consent: boolean;
}
type FormErrors = { [K in keyof FormData]?: string };

export default function ContactUsClient() {
  const [formData, setFormData] = useState<FormData>({ Name: '', Phone: '', Email: '', Problem: '', Consent: false });
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const validate = () => {
    const e: FormErrors = {};
    if (!formData.Name.trim()) e.Name = 'Name is required';
    if (!formData.Phone.trim()) e.Phone = 'Phone is required';
    if (formData.Email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) e.Email = 'Enter a valid email';
    if (!formData.Consent) e.Consent = 'You must agree to continue';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      'Hi, I found you on your website and would like a free quote.',
      '',
      `*Name:* ${formData.Name}`,
      `*Phone:* ${formData.Phone}`,
      formData.Email   ? `*Email:* ${formData.Email}`     : null,
      formData.Problem ? `*Problem:* ${formData.Problem}` : null,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/971553045256?text=${encodeURIComponent(lines)}`, '_blank', 'noopener,noreferrer');
    setFormData({ Name: '', Phone: '', Email: '', Problem: '', Consent: false });
    setErrors({});
  };

  return (
    <>
      <div id="hero" className="contact-hero" />

      <section className="contact-info-section">
        <div className="container">
          <h2 className="contact-info-section__title">We Are Here For You</h2>
          <div className="contact-info-section__cards">
            <div className="contact-info-card">
              <div className="contact-info-card__header">
                <i className="fa-solid fa-location-dot contact-info-card__icon" aria-hidden="true" />
                <span className="contact-info-card__label">Locations</span>
              </div>
              <div className="contact-info-card__body">All Dubai Communities</div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card__header">
                <i className="fa-solid fa-phone contact-info-card__icon" aria-hidden="true" />
                <span className="contact-info-card__label">Phone</span>
              </div>
              <div className="contact-info-card__body">
                <a href="tel:+971553045256" className="contact-info-card__phone">055 304 5256</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card__header">
                <i className="fa-regular fa-clock contact-info-card__icon" aria-hidden="true" />
                <span className="contact-info-card__label">Hours</span>
              </div>
              <div className="contact-info-card__body">Monday to Saturday, 8am&ndash;8pm</div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main-layout">

            {/* LEFT COLUMN */}
            <div className="contact-main-layout__left">
              <img
                src={UrgencyComponentImage}
                alt="Prime Pest Control pest control technician Dubai"
                className="contact-main-layout__team-photo"
                loading="eager"
              />
              <div className="contact-why-choose">
                <h3 className="contact-why-choose__title">Why Choose Us</h3>
                <ul className="contact-why-choose__list">
                  {WHY_ITEMS.map((item) => (
                    <li key={item.id} className="contact-why-choose__item">
                      {item.iconSrc ? (
                        <img src={item.iconSrc} alt="" className="contact-why-choose__icon-img" loading="lazy" />
                      ) : (
                        <i className={`${item.iconClass} contact-why-choose__icon-fa`} aria-hidden="true" />
                      )}
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="contact-main-layout__right">
              <h2 className="contact-main-layout__heading">Contact Us</h2>
              <p className="contact-main-layout__subheading">Contact Prime Pest Control for a Free Pest &amp; Bird Control Quote in Dubai!</p>
              <a href="https://wa.me/971553045256" className="contact-main-layout__phone">
                <WhatsAppIcon size={20} style={{ marginRight: '6px' }} />
                <span>055 304 5256</span>
              </a>
              <p className="contact-main-layout__desc">
                Don&apos;t wait for the problem to get worse. WhatsApp us now or fill out the form below. It takes less
                than a minute, and our Dubai team will get back to you quickly with a free quote. Every
                service is 100% guaranteed, so reaching out costs you nothing.
              </p>

              <form ref={formRef} className="contact-form-v2" onSubmit={handleSubmit} noValidate>
                <div className="contact-form-v2__field">
                  <label className="contact-form-v2__label" htmlFor="cf-name">Name*</label>
                  <input id="cf-name" type="text" name="Name" value={formData.Name} onChange={handleChange} className="contact-form-v2__input" />
                  {errors.Name && <span className="contact-form-v2__error">{errors.Name}</span>}
                </div>

                <div className="contact-form-v2__field">
                  <label className="contact-form-v2__label" htmlFor="cf-phone">Phone*</label>
                  <input id="cf-phone" type="text" name="Phone" value={formData.Phone} onChange={handleChange} className="contact-form-v2__input" />
                  {errors.Phone && <span className="contact-form-v2__error">{errors.Phone}</span>}
                </div>

                <div className="contact-form-v2__field">
                  <label className="contact-form-v2__label" htmlFor="cf-email">Email</label>
                  <input id="cf-email" type="email" name="Email" value={formData.Email} onChange={handleChange} className="contact-form-v2__input" />
                  {errors.Email && <span className="contact-form-v2__error">{errors.Email}</span>}
                </div>

                <div className="contact-form-v2__field">
                  <label className="contact-form-v2__label" htmlFor="cf-problem">Describe Your Pest or Bird Problem</label>
                  <textarea id="cf-problem" name="Problem" value={formData.Problem} onChange={handleChange} className="contact-form-v2__textarea" rows={4} />
                </div>

                <div className="contact-form-v2__consent">
                  <label className="contact-form-v2__consent-checkbox">
                    <input type="checkbox" name="Consent" checked={formData.Consent} onChange={handleChange} />
                    <span>yes</span>
                  </label>
                  <div className="contact-form-v2__consent-text">
                    By submitting this form you agree to be contacted by our team regarding your pest control enquiry.{' '}
                    <a href="/privacy-policy" className="contact-form-v2__consent-link">Privacy Policy</a>.
                    {errors.Consent && <span className="contact-form-v2__error">{errors.Consent}</span>}
                  </div>
                </div>

                <button type="submit" className="contact-form-v2__submit">
                  Send via WhatsApp
                </button>
              </form>

              <div className="contact-main-layout__actions">
                <a href="https://wa.me/971553045256" className="contact-main-layout__cta-yellow">
                  WhatsApp Us <span>055 304 5256</span>
                </a>
                <a href="https://wa.me/971553045256" className="contact-main-layout__cta-link">
                  WhatsApp for a Free Estimate
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ServiceAreaSection />
      <FreeQuoteSection />
      <SatisfactionGuaranteeSection />
    </>
  );
}
