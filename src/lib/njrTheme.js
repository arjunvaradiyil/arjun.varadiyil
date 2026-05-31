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
  eyebrow: 'Full stack · Payload CMS',
  company: 'Faircode Infotech',
  primaryCta: 'Get your project plan',
  navCta: 'Contact',
  contactNote:
    'Tell me what your editorial team needs to ship faster — I respond within 24 hours with scope, timeline, and next steps.',
};

export const HERO_STATS = [
  { value: '3', label: 'Production platforms live today', href: '/projects' },
  { value: '8 wks', label: 'Fastest greenfield CMS launch', href: '/projects/kochi-muziris-biennale' },
  { value: '15+', label: 'Editor-managed content models', href: '/projects' },
  { value: '<2s', label: 'Publish → live page (ISR)', href: '/contact' },
];

/** Home hero only — work-focused; profile details live on /about */
export const HOME_HERO = {
  eyebrow: 'Results, not résumés',
  headline: ['CMS platforms that ship.', 'Outcomes you can measure.'],
  tagline:
    'I build Next.js + Payload CMS systems for newsrooms & editorial teams — 3 in production, zero content bottlenecks.',
  description: '',
};

export const HOME_HERO_META = [
  { label: 'Current role', value: 'Full Stack Developer @ Faircode Infotech' },
  { label: 'What clients get', value: 'Editors publish daily · Devs stop firefighting content' },
  { label: 'Availability', value: 'Freelance & contract — Kerala & remote' },
  {
    label: 'Latest result',
    value: 'Biennale & news platforms live — editors own the CMS, not engineering',
  },
];
