import React from 'react';

export type PhotoBrief = {
  /** What the photo should show (shown in the preview so the team knows what to shoot) */
  brief: string;
  /** Alt text once the real photo is in place */
  alt: string;
  /** Real photo path, once it exists in /public. Until then the placeholder / fallback is shown. */
  src?: string;
  /** Credit line when the photo's licence asks for one (Wikimedia CC BY), e.g. "Photo: Jane Doe, CC BY 4.0" */
  credit?: string;
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
    const img = <img src={photo.src} alt={photo.alt} className="theme-rounded-image photo-slot__img" loading="lazy" />;
    if (!photo.credit) return img;
    return (
      <figure className="photo-credit">
        {img}
        <figcaption className="photo-credit__text">{photo.credit}</figcaption>
      </figure>
    );
  }
  if (!IS_DEV) {
    return (
      <img
        src={FALLBACKS[fallbackIndex % FALLBACKS.length]}
        alt="Pest control technicians"
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
        <small>Landscape 4:3, at least 1200 × 900 px, key and prompt in docs/photo-prompts.md</small>
      </figcaption>
    </figure>
  );
};

export default ImagePlaceholder;
