import React from 'react';
import { UrgencyComponentImage, TrustBadgesCombined } from '../../utils/images';
import { WHY_CHOOSE_US_ITEMS } from '../../utils/whyChooseUsItems';

interface WhyChooseUsSidebarProps {
  showBadges?: boolean;
}

const WhyChooseUsSidebar: React.FC<WhyChooseUsSidebarProps> = ({ showBadges = true }) => (
  <div className="why-choose-us-sidebar">
    <div className="why-choose-us-sidebar__team-photo">
      <img
        src={UrgencyComponentImage}
        alt="Prime Pest Control pest control team"
        loading="eager"
        className="why-choose-us-sidebar__team-img"
      />
    </div>

    <div className="why-choose-us-sidebar__why-card">
      <h2 className="why-choose-us-sidebar__why-title">Why Choose Us</h2>
      <ul className="why-choose-us-sidebar__why-list">
        {WHY_CHOOSE_US_ITEMS.map((item) => (
          <li key={item.id} className="why-choose-us-sidebar__why-item">
            <span className="why-choose-us-sidebar__why-icon" aria-hidden="true">
              {item.iconSrc ? (
                <img src={item.iconSrc} alt="" loading="lazy" />
              ) : (
                <i className={item.iconClass} />
              )}
            </span>
            <span className="why-choose-us-sidebar__why-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>

    {showBadges && (
      <div className="why-choose-us-sidebar__badges">
        <img
          src={TrustBadgesCombined}
          alt="Yelp, 100% satisfaction guarantee, customer satisfaction, and sustainable pest control badges"
          className="why-choose-us-sidebar__badges-image"
          width={428}
          height={64}
          loading="lazy"
        />
      </div>
    )}
  </div>
);

export default WhyChooseUsSidebar;