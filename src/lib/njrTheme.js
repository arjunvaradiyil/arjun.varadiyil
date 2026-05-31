/**
 * UI tokens inspired by https://www.neymarjr.com/en
 * Dark cinematic layout, gold accents, category nav, editorial sections.
 */

import { EMPLOYER_SHORT } from './employment';

export const NJR_NAV_CATEGORIES = [
  { label: 'Work', href: '/projects' },
  { label: 'Profile', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/** Shown in hero, nav, and CTAs */
export const WORK_STATUS = {
  badge: `Developer @ ${EMPLOYER_SHORT}`,
  eyebrow: 'Payload CMS · Next.js',
  company: EMPLOYER_SHORT,
  primaryCta: 'Get in touch',
  navCta: 'Contact',
  contactNote:
    'Open to networking and career conversations — I usually reply within a few business days.',
};

export const HERO_STATS = [
  { value: '3', label: 'Shipped platforms', href: '/projects' },
  { value: 'News', label: 'Malayalam newsroom', href: '/projects' },
  { value: 'Biennale', label: 'Festival CMS', href: '/projects' },
  { value: 'Kerala', label: `Full-time @ ${EMPLOYER_SHORT}`, href: '/about' },
];

/** Developer stance — opinionated, subtle, senior voice. */
export const DEVELOPER_STANCE =
  'Performance and editor autonomy are the same problem — if publishing needs a deploy, the architecture is wrong.';

/** Home hero */
export const HOME_HERO = {
  eyebrow: `Developer @ ${EMPLOYER_SHORT}`,
  headline: ['CMS systems editors', 'can run without a deploy.'],
  proofLine:
    'News portals, biennale programmes, civic apps — Payload CMS and Next.js on teams of four to six.',
  stanceLine: DEVELOPER_STANCE,
  tagline: '',
  description: '',
};

export const HOME_HERO_META = [
  { label: 'Day job', value: `Developer @ ${EMPLOYER_SHORT}` },
  { label: 'Stack', value: 'Next.js · Payload · TypeScript' },
  { label: 'Recent', value: 'Deshabhimani · KMB · MyIdukki' },
  { label: 'Belief', value: 'Publishing should not wait on devs' },
];
