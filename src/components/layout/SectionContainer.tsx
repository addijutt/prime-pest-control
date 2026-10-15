import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'section' | 'div';
  id?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = '',
  as: Tag = 'section',
  id,
}) => (
  <Tag id={id} className={`theme-section ${className}`.trim()}>
    <div className="theme-section__inner">{children}</div>
  </Tag>
);

export default SectionContainer;