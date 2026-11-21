import type { PriceKey } from './prices';
import type { FaqItem } from './pageContentHelpers';
import type { PhotoBrief } from '../components/ui/ImagePlaceholder';

export type GuideLink = { label: string; href: string };

/**
 * Unique, Dubai-specific content for a service page. It is rendered as several sections in the
 * site's own patterns (see ServiceGuideSection.tsx). Headings: Title Case, no colons.
 */
export type ServiceGuide = {
  /** Short name used in section headings, e.g. "Cockroach Control" */
  name: string;
  /** Price rows (numbers come from prices.ts) */
  priceKeys: PriceKey[];
  /** H2 of the answer section */
  title: string;
  /** Answer-first opening paragraph (what Google and AI answers quote) */
  answer: string;
  /** More context: the problem in Dubai */
  body: string[];
  signsTitle?: string;
  /** Small label above the signs section; default "Know the Signs" */
  signsEyebrow?: string;
  signs?: string[];
  /** Treatment steps, in order (shown in the dark "How it works" block) */
  steps: { title: string; text: string }[];
  safety: string[];
  prevention: string[];
  related?: GuideLink[];
  photos: { intro: PhotoBrief; signs: PhotoBrief };
};

export type CommunityPest = { pest: string; why: string; href: string };

/** A Dubai community landing page (rendered on /pest-control-<slug>) */
export type Community = {
  slug: string;
  name: string;
  /** "Villas", "Apartments", or both */
  homes: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  answer: string;
  body: string[];
  pests: CommunityPest[];
  priceKeys: PriceKey[];
  tips: string[];
  faqs: FaqItem[];
  nearby: string[];
  photos: { intro: PhotoBrief; tips: PhotoBrief };
};
