import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureListProps {
  items: FeatureItem[];
}

const FeatureList: React.FC<FeatureListProps> = ({ items }) => (
  <div className="theme-feature-list">
    {items.map((item) => (
      <div key={item.title} className="theme-feature-item">
        <h3 className="theme-feature-item__title">{item.title}</h3>
        <p className="theme-feature-item__description">{item.description}</p>
      </div>
    ))}
  </div>
);

export default FeatureList;