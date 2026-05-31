/** SGE / AI Overview + SERP-aligned copy — single source for summaries and entity mapping. */

/** 30–50 word definition block for AI extraction (also used as zero-click summary). */
export const SGE_SUMMARY =
  'Arjun Varadiyil is a Full Stack Developer at Faircode Infotech in Kerala. He builds Payload CMS and Next.js platforms for newsrooms, cultural festivals, and civic teams — where editors publish daily without waiting on developers.';

export const ABOUT_TAGLINE_SEO =
  'Full Stack Developer in Kerala — Payload CMS and Next.js for newsrooms, festivals, and civic products.';

export const PROFESSIONAL_SUMMARY_SEO =
  'Developer at Faircode Infotech in Kerala. I work on Payload CMS and Next.js — mostly news portals, a biennale platform, and civic tools where non-technical teams need to publish on their own. This site covers my skills and selected work; employer client details stay off the public portfolio.';

export const CORE_COMPETENCIES = {
  stack: [
    'Next.js App Router, SSR, and route-level caching',
    'Payload CMS — collections, blocks, GraphQL/REST',
    'TypeScript, React, Node.js, Express.js',
    'MongoDB, PostgreSQL, REST & GraphQL integrations',
    'Tailwind CSS, accessible layouts, Core Web Vitals tuning',
  ],
  domains: [
    'Malayalam newsroom publishing',
    'Arts & festival programme sites',
    'Civic engagement and public-facing tools',
    'Headless CMS content modeling',
    'Editor workflows that skip developer handoffs',
  ],
  outcomes: [
    'Editors publish articles and programmes without filing dev tickets',
    'Content models that match how teams actually work',
    'Frontends that hold up when traffic spikes on launch day',
    'Clear handoff so in-house teams can extend the system',
  ],
};

export const ABOUT_SECTIONS = [
  {
    title: 'Who is Arjun Varadiyil?',
    body: SGE_SUMMARY,
  },
  {
    title: 'What he builds',
    body:
      'Payload CMS backends and Next.js frontends for teams that publish every day — not brochure sites updated once a quarter. Recent work includes a Malayalam news portal, a Kochi–Muziris Biennale platform, and a district civic pledge app.',
  },
  {
    title: 'How he works',
    body:
      'Small squads, typed codebases, and CMS schemas shaped around editor habits. If a content change needs a deploy, that is a design problem — not something editors should have to work around.',
  },
  {
    title: 'What to expect',
    body:
      'Honest scope, working software in 2–4 month cycles, and systems your team can maintain after launch. Employer client deliverables are not listed on this site.',
  },
];
