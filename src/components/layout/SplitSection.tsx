import React from 'react';
import SectionContainer from './SectionContainer';

interface SplitSectionProps {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  body: React.ReactNode;
  cta?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  media?: React.ReactNode;
  reversed?: boolean;
  className?: string;
  id?: string;
}

const SplitSection: React.FC<SplitSectionProps> = ({
  eyebrow,
  title,
  body,
  cta,
  imageSrc,
  imageAlt = '',
  media,
  reversed = false,
  className = '',
  id,
}) => (
  <SectionContainer id={id} className={className}>
    <div className={`theme-split ${reversed ? 'theme-split--reversed' : ''}`}>
      <div className="theme-split__content">
        {eyebrow && <p className="theme-split__eyebrow">{eyebrow}</p>}
        {title && <h2 className="theme-split__title">{title}</h2>}
        <div className="theme-split__body">{body}</div>
        {cta && <div className="theme-split__cta">{cta}</div>}
      </div>
      <div className="theme-split__media">
        {media ?? (
          imageSrc && (
            <img src={imageSrc} alt={imageAlt} className="theme-rounded-image" loading="lazy" />
          )
        )}
      </div>
    </div>
  </SectionContainer>
);

export default SplitSection;
