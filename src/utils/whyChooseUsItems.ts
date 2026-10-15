export interface WhyChooseUsItem {
  id: string;
  label: string;
  iconSrc: string | null;
  iconClass?: string;
}

export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
  {
    id: 'free-estimates',
    label: 'Free Pest Control Estimates',
    iconSrc: '/assets/img/why-choose-us-section/why-choose-us-free-estimates.png',
  },
  {
    id: 'prompt-service',
    label: 'Prompt Pest Control Service',
    iconSrc: '/assets/img/why-choose-us-section/why-choose-us-prompt-service.png',
  },
  {
    id: 'guaranteed',
    label: 'Results 100% Guaranteed',
    iconSrc: '/assets/img/why-choose-us-section/why-choose-us-results-guarantee.png',
  },
  {
    id: 'locally-owned',
    label: 'Locally Owned & Operated',
    iconSrc: '/assets/img/why-choose-us-section/why-choose-us-locally-owned.png',
  },
  {
    id: 'top-rated',
    label: 'Top Rated Customer Service',
    iconSrc: null,
    iconClass: 'fa-solid fa-thumbs-up',
  },
  {
    id: 'fully-trained',
    label: 'Fully Trained & Insured Technicians',
    iconSrc: null,
    iconClass: 'fa-solid fa-certificate',
  },
];