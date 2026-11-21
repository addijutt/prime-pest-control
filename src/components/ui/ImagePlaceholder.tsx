import React from 'react';

export type PhotoBrief = {
  /** What the photo should show (shown in the preview so the team knows what to shoot) */
  brief: string;
  /** Alt text once the real photo is in place */
  alt: string;
  /** Real photo path, once it exists in /public. Until then the placeholder / fallback is shown. */
  src?: string;
};

// Team photos already on the site, used on the live site until the real photo is added
const FALLBACKS = [
  '/assets/img/why-call-us-section/call-us-component-image.webp',
  '/assets/img/urgency-component/urgency-component-image.webp',
  '/assets/img/homepage-staff.webp',
];

const IS_DEV = process.env.NODE_ENV !== 'production';

/**
 * A photo slot. With `src` it shows the photo. Without it:
 * - in development (npm run dev) it shows a labelled placeholder with the photo brief,
 * - in production it shows an existing team photo, so the live site never shows a placeholder.
 */
const ImagePlaceholder: React.FC<{ photo: PhotoBrief; fallbackIndex?: number }> = ({ photo, fallbackIndex = 0 }) => {
  if (photo.src) {
    return <img src={photo.src} alt={photo.alt} className="theme-rounded-image photo-slot__img" loading="lazy" />;
  }
  if (!IS_DEV) {
    return (
      <img
        src={FALLBACKS[fallbackIndex % FALLBACKS.length]}
        alt="Prime Pest Control technician in Dubai"
        className="theme-rounded-image photo-slot__img"
        loading="lazy"
      />
    );
  }
  return (
    <figure className="photo-slot" aria-label={`Photo needed: ${photo.brief}`}>
      <svg className="photo-slot__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <figcaption>
        <strong>Photo needed (preview only)</strong>
        <span>{photo.brief}</span>
        <small>Landscape 4:3, at least 1200 × 900 px, real job photo, no stock images</small>
      </figcaption>
    </figure>
  );
};

export default ImagePlaceholder;
