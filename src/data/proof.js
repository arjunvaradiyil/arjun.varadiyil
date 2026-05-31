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
    label: 'Featured projects',
    detail: 'Editorial, news & civic platforms',
    href: '/projects',
  },
  {
    value: 'Dev',
    label: 'Full stack developer',
    detail: 'Next.js + Payload CMS builds',
    href: '/projects',
  },
  {
    value: 'CMS',
    label: 'Editorial systems focus',
    detail: 'Collections, blocks & publishing workflows',
    href: '/projects',
  },
  {
    value: 'Stack',
    label: 'Production tooling',
    detail: 'TypeScript · MongoDB · GraphQL · AWS',
    href: '/about',
  },
];

export const TRUST_METRICS = [
  { label: 'Lighthouse SEO', value: '92+', note: 'This portfolio site — structured data & metadata' },
  { label: 'Desktop LCP', value: '1.3s', note: 'Optimized fonts, AVIF/WebP & edge delivery' },
  { label: 'Stack', value: 'Next.js', note: 'Payload CMS · TypeScript · MongoDB · AWS' },
  { label: 'GitHub', value: 'Active', note: 'Open-source & personal experiments' },
];

export const GITHUB_USERNAME = 'arjunvaradiyil';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/arjunvaradiyil';

export const CURRENTLY_EXPLORING = [
  'AI agent workflows',
  'LangChain & RAG',
  'Payload CMS 3',
  'Next.js performance',
];

export const OUTCOME_CTA = {
  headline: 'Interested in my work?',
  subline:
    'This is a professional portfolio. For networking, collaboration, or career conversations, get in touch or connect on LinkedIn.',
  primary: { label: 'Get in touch', href: '/contact' },
  secondary: { label: 'Connect on LinkedIn', href: LINKEDIN_URL, external: true },
};

/** Signature interactive section */
export const SIGNATURE_DEMO = {
  eyebrow: 'The Publish Lab',
  tag: 'Concept demo',
  title: 'Editorial publish flow (illustrative)',
  description:
    'A simplified simulation of CMS → Next.js → reader — the kind of pipeline used on editorial projects. Not client source code or production data.',
};
