/** Homepage proof points, CTA copy, and trust metrics — single source of truth. */

import { EMPLOYER_SHORT } from '../lib/employment';

export const CURRENT_ROLE = {
  title: 'Full Stack Developer',
  company: EMPLOYER_SHORT,
  location: 'Kerala, India',
};

export const PROOF_METRICS = [
  {
    value: '3',
    label: 'Case studies',
    detail: 'Biennale, Deshabhimani & MyIdukki',
    href: '/projects',
  },
  {
    value: '4–6',
    label: 'Typical team',
    detail: 'Cross-functional squads on client builds',
    href: '/about',
  },
  {
    value: 'CMS',
    label: 'Payload in practice',
    detail: 'Collections, blocks & GraphQL APIs',
    href: '/projects',
  },
  {
    value: '1.3s',
    label: 'This site LCP',
    detail: 'AVIF images, edge fonts, lean bundles',
    href: '/about',
  },
];

export const TRUST_METRICS = [
  { label: 'Lighthouse SEO', value: '92+', note: 'Structured data on this portfolio' },
  { label: 'Desktop LCP', value: '1.3s', note: 'Measured on this build' },
  { label: 'GitHub', value: 'Active', note: 'Side projects between client work' },
  { label: 'Stack', value: 'TypeScript', note: 'Next.js · Payload · MongoDB' },
];

export const GITHUB_USERNAME = 'arjunvaradiyil';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/arjunvaradiyil';

export const CURRENTLY_EXPLORING = [
  'AI agent workflows',
  'LangChain & RAG',
  'Payload CMS 3',
  'Next.js caching patterns',
];

export const OUTCOME_CTA = {
  headline: 'Want to talk?',
  subline:
    'Open to roles, collaborations, and straight conversations about CMS and publishing work.',
  primary: { label: 'Get in touch', href: '/contact' },
  secondary: { label: 'Connect on LinkedIn', href: LINKEDIN_URL, external: true },
};

/** Signature interactive section */
export const SIGNATURE_DEMO = {
  eyebrow: 'The Publish Lab',
  tag: 'Concept demo',
  title: 'How a story goes live',
  description:
    'A stripped-down CMS → Next.js → reader flow — the same shape as news and festival builds, without client data.',
};
