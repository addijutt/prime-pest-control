'use client';

import React from 'react';
import { handlePestImageError } from '../../config/pageContentHelpers';
import { pestIconScale } from '../../utils/pestIcons';

export interface ServiceGridItem {
  label: string;
  href: string;
  imageSrc?: string;
  imageDesktop?: string;
  imageMobile?: string;
}

interface ServiceGridProps {
  items: ServiceGridItem[];
}

const ServiceGridImage: React.FC<{ item: ServiceGridItem }> = ({ item }) => {
  const desktop = item.imageDesktop ?? item.imageSrc;
  const mobile = item.imageMobile;
  const zoomPath = desktop ?? mobile;
  const zoomStyle =
    zoomPath !== undefined
      ? ({ '--pest-zoom': pestIconScale(zoomPath) } as React.CSSProperties)
      : undefined;

  if (!desktop && !mobile) {
    return <div className="theme-service-card__placeholder" aria-hidden="true" />;
  }

  if (mobile && desktop) {
    return (
      <picture>
        <source media="(max-width: 767px)" srcSet={mobile} />
        <img
          src={desktop}
          alt={item.label}
          loading="lazy"
          style={zoomStyle}
          onError={handlePestImageError('desktop')}
        />
      </picture>
    );
  }

  return (
    <img
      src={desktop ?? mobile}
      alt={item.label}
      loading="lazy"
      style={zoomStyle}
      onError={handlePestImageError(desktop ? 'desktop' : 'mobile')}
    />
  );
};

const ServiceGrid: React.FC<ServiceGridProps> = ({ items }) => (
  <div className="theme-service-grid">
    {items.map((item) => (
      <a key={item.label} href={item.href} className="theme-service-card">
        <div className="theme-service-card__image-wrap">
          <ServiceGridImage item={item} />
        </div>
        <span className="theme-service-card__label">{item.label}</span>
      </a>
    ))}
  </div>
);

export default ServiceGrid;