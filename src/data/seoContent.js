/** SGE / AI Overview + SERP-aligned copy — single source for summaries and entity mapping. */

import { EMPLOYER_SHORT } from '../lib/employment';
import { DEVELOPER_APPROACH } from './proof';

export const SGE_SUMMARY =
  'Arjun Varadiyil is a Full Stack Developer building scalable digital experiences with modern web technologies — high-performance platforms, CMS solutions, and products that make an impact. Based in Kerala.';

export const HOME_HERO_HEADLINE = [
  'Building scalable',
  'digital experiences',
  'with modern web technologies.',
];

export const HOME_HERO_SUBLINE =
  'Full Stack Developer creating high-performance platforms, CMS solutions, and products that make an impact.';

export const ABOUT_TAGLINE_SEO = HOME_HERO_SUBLINE;

export const PROFESSIONAL_SUMMARY_SEO = HOME_HERO_SUBLINE;

export const CORE_COMPETENCIES = {
  stack: [
    'Next.js App Router, SSR, route-level caching',
    'Payload CMS — collections, blocks, GraphQL/REST',
    'TypeScript, React, Node.js, Express.js',
    'MongoDB, PostgreSQL, REST & GraphQL',
    'Tailwind CSS, accessible layouts, Core Web Vitals',
  ],
  domains: [
    'News & editorial platforms',
    'Headless CMS architecture',
    'Civic engagement platforms',
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
