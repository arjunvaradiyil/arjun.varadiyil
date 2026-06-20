/** Homepage proof points, CTA copy, and trust metrics — single source of truth. */

import { EMPLOYER_SHORT, LOCATION, ROLE_TITLE } from '../lib/employment';

export const CURRENT_ROLE = {
  title: ROLE_TITLE,
  company: EMPLOYER_SHORT,
  location: LOCATION,
};

/** One memorable line — import elsewhere; do not duplicate the string. */
export const DEVELOPER_APPROACH =
  'I take products from first sketch to production — no handoffs, no dead ends.';

export const PROOF_METRICS = [
  {
    value: '6',
    label: 'Live builds',
    detail: 'Festivals · civic · campaigns',
    href: '/projects',
  },
  {
    value: 'Full',
    label: 'Stack delivery',
    detail: 'Next.js · MongoDB · Payload CMS',
    href: '/projects',
  },
  {
    value: 'Live',
    label: 'Civic platform',
    detail: 'Voter pledge at myidukki.com',
    href: '/projects/my-vote-my-voice-idukki',
  },
  {
    value: '1.3s',
    label: 'This site LCP',
    detail: 'AVIF · edge fonts · lean bundles',
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

export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}/arjun.varadiyil`;

export const LINKEDIN_URL = 'https://www.linkedin.com/in/arjunvaradiyil';

/** Public profile links — hero, footer, about. */
export const PUBLIC_SOCIAL_LINKS = [
  { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
  { label: 'GitHub', href: GITHUB_URL, external: true },
];

export const CURRENTLY_EXPLORING = [
  'AI agent workflows',
  'LangChain & RAG',
  'Payload CMS 3',
  'Next.js caching patterns',
];

export const OUTCOME_CTA = {
  headline: "Let's build something meaningful.",
  subline: 'Open to roles and collaborations on full stack Next.js news and CMS work.',
  primary: { label: 'Get in touch', href: '/contact' },
  secondary: { label: 'Connect on LinkedIn', href: LINKEDIN_URL, external: true },
};
