/**
 * UI tokens inspired by https://www.neymarjr.com/en
 * Dark cinematic layout, gold accents, category nav, editorial sections.
 */

export const NJR_NAV_CATEGORIES = [
  { label: 'Work', href: '/projects' },
  { label: 'Profile', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/** Shown in hero, nav, and CTAs — update when employment status changes */
export const WORK_STATUS = {
  badge: 'Open to freelance',
  eyebrow: 'Arjun Varadiyil',
  company: 'Faircode Infotech',
  primaryCta: 'Hire Me',
  navCta: 'Contact',
  contactNote:
    'Open to freelance projects and collaborations — reach out to discuss your next build.',
};

export const HERO_STATS = [
  { value: '1.3+', label: 'Years building production apps' },
  { value: '3', label: 'Platforms shipped to production' },
  { value: 'Remote', label: 'Ready to collaborate' },
  { value: 'CMS', label: 'Payload CMS specialist' },
];

/** Home hero only — work-focused; profile details live on /about */
export const HOME_HERO = {
  eyebrow: 'Work',
  headline: ['Built for scale.', 'Designed for performance.'],
  tagline: 'Building scalable CMS platforms and high-performance web applications.',
  description: '',
};

export const HOME_HERO_META = [
  { label: 'Stack', value: 'Next.js • Payload CMS • TypeScript' },
  { label: 'Domains', value: 'Editorial • Publishing • Civic Tech' },
  { label: 'Availability', value: 'Available for freelance & contract work' },
  {
    label: 'Recent work',
    value: 'Biennale platforms, news systems & civic tools — live in production',
  },
];
