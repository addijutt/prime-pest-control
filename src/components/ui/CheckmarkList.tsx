import React from 'react';

interface CheckmarkListProps {
  items: string[];
}

const CheckIcon: React.FC = () => (
  <svg
    className="theme-checklist__icon-svg"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 12.5L9.5 17L19 7"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckmarkList: React.FC<CheckmarkListProps> = ({ items }) => (
  <ul className="theme-checklist">
    {items.map((item) => (
      <li key={item} className="theme-checklist__item">
        <span className="theme-checklist__icon" aria-hidden="true">
          <CheckIcon />
        </span>
        <span className="theme-checklist__text">{item}</span>
      </li>
    ))}
  </ul>
);

export default CheckmarkList;