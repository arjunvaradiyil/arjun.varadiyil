/** SGE / AI Overview + SERP-aligned copy — single source for summaries and entity mapping. */

import { EMPLOYER_SHORT } from '../lib/employment';
import { DEVELOPER_APPROACH } from './proof';

export const SGE_SUMMARY =
  `Arjun Varadiyil is a Full Stack Developer at ${EMPLOYER_SHORT} in Kerala, building Next.js platforms for healthcare, civic, education, and campaign clients.`;

export const ABOUT_TAGLINE_SEO =
  `Full Stack Developer at ${EMPLOYER_SHORT}, Kerala — Next.js, Payload CMS, and MongoDB.`;

export const PROFESSIONAL_SUMMARY_SEO = DEVELOPER_APPROACH;

export const CORE_COMPETENCIES = {
  stack: [
    'Next.js App Router, SSR, route-level caching',
    'Payload CMS — collections, blocks, GraphQL/REST',
    'TypeScript, React, Node.js, Express.js',
    'MongoDB, PostgreSQL, REST & GraphQL',
    'Tailwind CSS, accessible layouts, Core Web Vitals',
  ],
  domains: [
    'Healthcare & clinic websites',
    'Civic & election platforms',
    'Education & campaign sites',
  ],
  outcomes: [
    'Clients launch without developer bottlenecks',
    'Full stack delivery from database to UI',
    'Frontends that hold up on launch-day traffic',
  ],
};

export const ABOUT_SECTIONS = [
  {
    title: 'Who is Arjun Varadiyil?',
    body: SGE_SUMMARY,
  },
  {
    title: 'How he works',
    body: DEVELOPER_APPROACH,
  },
];
