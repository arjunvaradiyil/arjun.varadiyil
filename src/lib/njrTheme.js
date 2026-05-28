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
  badge: 'Currently working',
  eyebrow: 'Arjun Varadiyil',
  company: 'Faircode Infotech',
  primaryCta: 'Get in touch',
  navCta: 'Contact',
  contactNote:
    'I’m employed full-time and not taking new freelance work right now. You can still reach out to connect.',
};

export const HERO_STATS = [
  { value: '1.3+', label: 'Years experience' },
  { value: '3', label: 'Projects shipped' },
  { value: 'MERN', label: 'Core stack' },
  { value: 'Kerala', label: 'Based in' },
];
