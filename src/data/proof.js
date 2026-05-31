/** Homepage proof points, terminal demo copy, and trust metrics — single source of truth. */

export const CURRENT_ROLE = {
  title: 'Full Stack Developer',
  company: 'Faircode Infotech',
  location: 'Kerala, India',
};

export const PROOF_METRICS = [
  {
    value: '3',
    label: 'Platforms live in production',
    detail: 'Biennale, Malayalam newsroom & civic tech — not mockups',
    href: '/projects',
  },
  {
    value: '8 wks',
    label: 'Fastest greenfield launch',
    detail: 'Kochi–Muziris Biennale · idea to production with a 6-person team',
    href: '/projects/kochi-muziris-biennale',
  },
  {
    value: 'Daily',
    label: 'Newsroom publish cadence',
    detail: 'Editors ship articles & multimedia without developer tickets',
    href: '/projects/deshabhimani-news-portal',
  },
  {
    value: '0',
    label: 'Redeploys per content update',
    detail: 'Payload CMS + Next.js ISR — content goes live in under 2 seconds',
    href: '/contact',
  },
];

export const TRUST_METRICS = [
  { label: 'Lighthouse SEO', value: '92+', note: 'Structured data, sitemap & on-page optimization' },
  { label: 'Desktop LCP', value: '1.3s', note: 'Optimized fonts, AVIF/WebP & edge delivery' },
  { label: 'CMS collections shipped', value: '15+', note: 'Custom blocks across 3 production platforms' },
  { label: 'Inquiry response', value: '<24h', note: 'Concrete next steps, not generic replies' },
];

export const GITHUB_USERNAME = 'arjunvaradiyil';

export const OUTCOME_CTA = {
  headline: 'Need a CMS your editors actually run?',
  subline:
    'I help teams launch editorial platforms in weeks — not quarters. Send your brief and get a concrete plan within 24 hours.',
  primary: { label: 'Get your project plan', href: '/contact' },
  secondary: { label: 'Book a 30-min call', href: 'https://topmate.io/arjun_varadiyil', external: true },
};

/** Aggregate impact — surfaced in hero stats row. */
export const AGGREGATE_IMPACT = [
  { value: '3', label: 'Production platforms delivering revenue & reach', href: '/projects' },
  { value: '8 wks', label: 'Fastest full platform launch', href: '/projects/kochi-muziris-biennale' },
  { value: '15+', label: 'CMS models editors use daily', href: '/projects' },
  { value: '<2s', label: 'Content publish to live page', href: '/contact' },
];
