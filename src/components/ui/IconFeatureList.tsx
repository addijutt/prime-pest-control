import React from 'react';

export interface IconFeatureItem {
  id: string;
  iconSrc: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

interface IconFeatureListProps {
  items: IconFeatureItem[];
}

const IconFeatureList: React.FC<IconFeatureListProps> = ({ items }) => (
  <div className="theme-icon-feature-list">
    {items.map((item) => (
      <div key={item.id} className="theme-icon-feature-item">
        <div className="theme-icon-feature-item__icon">
          <img src={item.iconSrc} alt="" loading="lazy" />
        </div>
        <div className="theme-icon-feature-item__divider" aria-hidden="true" />
        <div className="theme-icon-feature-item__content">
          <h3 className="theme-icon-feature-item__title">{item.title}</h3>
          <p className="theme-icon-feature-item__description">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default IconFeatureList;