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
  primaryCta: 'Discuss your project',
  navCta: 'Contact',
  contactNote:
    'Share your editorial product, CMS migration, or news portal brief — I respond within 24 hours with clear next steps.',
};

export const HERO_STATS = [
  { value: '1.3+', label: 'Years building production apps', href: '/about' },
  { value: '3', label: 'Platforms shipped to production', href: '/projects' },
  { value: 'Remote', label: 'Ready to collaborate', href: '/contact' },
  { value: 'CMS', label: 'Payload CMS specialist', href: '/projects' },
];

/** Home hero only — work-focused; profile details live on /about */
export const HOME_HERO = {
  eyebrow: 'Work',
  headline: ['Built for scale.', 'Designed for performance.'],
  tagline:
    'Full stack developer at Faircode Infotech — 3 production CMS platforms shipped for biennale, news & civic teams.',
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
