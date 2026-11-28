import React from 'react';
import Link from 'next/link';
import SectionContainer from '../layout/SectionContainer';
import SplitSection from '../layout/SplitSection';
import CheckmarkList from '../ui/CheckmarkList';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import { RelatedLinks } from './ServiceGuideSection';
import type { Community } from '../../config/guideTypes';
import { COMMUNITIES } from '../../config/communities';

/** Common pests in the community: cards that link to each service page */
export const CommunityPestsSection: React.FC<{ community: Community }> = ({ community }) => (
  <SectionContainer className="community-pests-section">
    <p className="theme-split__eyebrow">Common Pests</p>
    <h2 className="theme-split__title">
      What We Treat Most in <span className="theme-heading-accent">{community.name}</span>
    </h2>
    <ul className="community-pests-section__grid">
      {community.pests.map((p) => (
        <li key={p.pest}>
          <Link href={p.href} className="community-pest-card">
            <span className="community-pest-card__name">{p.pest}</span>
            <span className="community-pest-card__why">{p.why}</span>
            <span className="community-pest-card__more" aria-hidden="true">See treatment and prices →</span>
          </Link>
        </li>
      ))}
    </ul>
  </SectionContainer>
);

/** Tips for homes in the community: reversed split with photo, then other communities */
export const CommunityTipsSection: React.FC<{ community: Community }> = ({ community }) => {
  const others = community.nearby
    .map((slug) => COMMUNITIES.find((c) => c.slug === slug))
    .filter((c): c is Community => Boolean(c))
    .map((c) => ({ label: `Pest Control in ${c.name}`, href: `/pest-control-${c.slug}` }));

  return (
    <>
      <SplitSection
        className="guide-signs-section"
        reversed
        eyebrow="Local Tips"
        title={`Keeping Pests Out of ${community.name} Homes`}
        body={<CheckmarkList items={community.tips} />}
        media={<ImagePlaceholder photo={community.photos.tips} fallbackIndex={1} />}
      />
      {others.length ? (
        <SectionContainer className="community-others-section">
          <RelatedLinks title="More Communities We Serve" links={others} />
        </SectionContainer>
      ) : null}
    </>
  );
};
