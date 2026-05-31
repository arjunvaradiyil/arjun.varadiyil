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
  badge: `Full stack @ ${EMPLOYER_SHORT}`,
  eyebrow: 'Full stack · Payload CMS',
  company: EMPLOYER_SHORT,
  primaryCta: 'Get in touch',
  navCta: 'Contact',
  contactNote:
    'Professional portfolio — for networking, collaboration, or career inquiries. I typically reply within a few business days.',
};

export const HERO_STATS = [
  { value: '3', label: 'Projects featured', href: '/projects' },
  { value: 'Dev', label: 'Full stack developer', href: '/about' },
  { value: 'CMS', label: 'Payload CMS in production', href: '/projects' },
  { value: 'Kerala', label: `Based · full-time @ ${EMPLOYER_SHORT}`, href: '/about' },
];

/** Developer stance — opinionated, subtle, senior voice. */
export const DEVELOPER_STANCE =
  'Performance and editor autonomy are the same problem — if publishing needs a deploy, the architecture is wrong.';

/** Home hero */
export const HOME_HERO = {
  eyebrow: `Full stack developer · ${EMPLOYER_SHORT}`,
  headline: ['Full stack developer', 'building editorial CMS systems.'],
  proofLine:
    'Full stack developer focused on editorial CMS, headless architecture, and performance.',
  stanceLine: DEVELOPER_STANCE,
  tagline: '',
  description: '',
};

export const HOME_HERO_META = [
  { label: 'Employer', value: `Full Stack Developer @ ${EMPLOYER_SHORT}` },
  { label: 'Stack', value: 'Next.js · Payload CMS · TypeScript' },
  { label: 'Portfolio', value: 'Skills, experience & open source' },
  { label: 'Focus', value: 'Editorial platforms · CMS · performance' },
];
