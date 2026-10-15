import React from 'react';

interface PillCtaProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const PillCta: React.FC<PillCtaProps> = ({
  href,
  children,
  variant = 'primary',
  className = '',
}) => (
  <a
    href={href}
    className={`theme-pill-cta theme-pill-cta--${variant} ${className}`.trim()}
  >
    {children}
  </a>
);

export default PillCta;