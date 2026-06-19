/**
 * UI tokens inspired by https://www.neymarjr.com/en
 * Dark cinematic layout, gold accents, category nav, editorial sections.
 */

import { DEVELOPER_APPROACH } from '../data/proof';
import {
  EMPLOYER_SHORT,
  LOCATION,
  ROLE_AT_EMPLOYER,
  ROLE_EYEBROW,
} from './employment';

export const NJR_NAV_CATEGORIES = [
  { label: 'Work', href: '/projects' },
  { label: 'Profile', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const WORK_STATUS = {
  badge: ROLE_AT_EMPLOYER,
  eyebrow: ROLE_EYEBROW,
  company: EMPLOYER_SHORT,
  primaryCta: 'Get in touch',
  navCta: 'Contact',
  contactNote: 'I usually reply within a few business days.',
};

export const HERO_STATS = [
  { value: '6', label: 'Live projects', href: '/projects' },
  { value: 'Live', label: 'In production', href: '/projects' },
  { value: 'EN · ML · HI · TE', label: 'Multilingual builds', href: '/projects/my-vote-my-voice-idukki' },
  { value: 'Kerala', label: 'India based', href: '/about' },
];

export const DEVELOPER_STANCE = DEVELOPER_APPROACH;

export const HOME_HERO = {
  eyebrow: EMPLOYER_SHORT,
  headline: ['Live products.', 'Not mockups.'],
  proofLine:
    'Biennale programmes, voter tools, quiz apps, and campaign hubs — still running today.',
  stanceLine: '',
  tagline: '',
  description: '',
};

export const HOME_HERO_META = [
  { label: 'Build with', value: 'Next.js · Payload CMS · TypeScript' },
  { label: 'Based in', value: LOCATION },
];
