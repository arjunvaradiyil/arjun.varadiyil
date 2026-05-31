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
  primaryCta: 'Start the conversation',
  navCta: 'Contact',
  contactNote:
    "Need a fast, scalable platform? Tell me what you're shipping — I reply within 24 hours with a concrete plan.",
};

export const HERO_STATS = [
  { value: '3', label: 'Production platforms live today', href: '/projects' },
  { value: '8 wks', label: 'Fastest greenfield CMS launch', href: '/projects/kochi-muziris-biennale' },
  { value: '15+', label: 'Editor-managed content models', href: '/projects' },
  { value: '<2s', label: 'Publish → live page (ISR)', href: '/contact' },
];

/** Developer stance — opinionated, subtle, senior voice. */
export const DEVELOPER_STANCE =
  'Performance and editor autonomy are the same problem — if publishing needs a deploy, the architecture is wrong.';

/** Home hero — proof line must earn trust in ~3 seconds. */
export const HOME_HERO = {
  eyebrow: 'Full stack developer · Kerala',
  headline: ['I ship CMS platforms', 'editors run without devs.'],
  proofLine:
    'Production systems for India\'s largest art biennale & a major Malayalam newsroom — daily editorial traffic, not portfolio demos.',
  stanceLine: DEVELOPER_STANCE,
  tagline: '',
  description: '',
};

export const HOME_HERO_META = [
  { label: 'Role', value: 'Full Stack Developer @ Faircode Infotech' },
  { label: 'Stack', value: 'Next.js · Payload CMS · TypeScript · AWS' },
  { label: 'Availability', value: 'Freelance & contract — remote OK' },
  { label: 'Focus', value: 'Editorial platforms · news · civic tech' },
];
