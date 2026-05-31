/** Homepage proof points, terminal demo copy, and trust metrics — single source of truth. */

export const CURRENT_ROLE = {
  title: 'Full Stack Developer',
  company: 'Faircode Infotech',
  location: 'Kerala, India',
};

export const PROOF_METRICS = [
  {
    value: '3',
    label: 'Production platforms shipped',
    detail: 'Biennale, news portal & civic tech — live today',
    href: '/projects',
  },
  {
    value: '1.3+',
    label: 'Years in production delivery',
    detail: 'Agile teams · editorial & publishing products',
    href: '/about',
  },
  {
    value: '6',
    label: 'Max team size led on',
    detail: 'Kochi–Muziris Biennale platform build',
    href: '/projects/kochi-muziris-biennale',
  },
  {
    value: '2–4 mo',
    label: 'Typical ship cycle',
    detail: 'From architecture to production launch',
    href: '/contact',
  },
];

export const TRUST_METRICS = [
  { label: 'Lighthouse SEO', value: '92+', note: 'Structured data & on-page optimization' },
  { label: 'Desktop performance', value: '90+', note: 'Next.js image & font optimization' },
  { label: 'CMS in production', value: '3', note: 'Payload CMS editorial platforms' },
  { label: 'Response time', value: '<24h', note: 'Typical reply on project inquiries' },
];

export const GITHUB_USERNAME = 'arjunvaradiyil';

/** Terminal demo — cycles on homepage; click a command to replay. */
export const TERMINAL_COMMANDS = [
  {
    cmd: 'whoami',
    output: 'arjun-varadiyil — full stack developer, Kerala',
  },
  {
    cmd: 'role --current',
    output: 'Full Stack Developer @ Faircode Infotech\nBuilding editorial & CMS platforms in production',
  },
  {
    cmd: 'stack --list',
    output: ['Next.js 15', 'Payload CMS 3', 'TypeScript', 'MongoDB', 'AWS S3', 'GraphQL'].join('\n'),
  },
  {
    cmd: 'projects --live',
    output: [
      '✓ kochi-muziris-biennale    [Arts · 2 mo · team of 6]',
      '✓ deshabhimani-news-portal  [News · 4 mo · team of 4]',
      '✓ myidukki-election-pledge  [Civic · 1 wk · solo ship]',
    ].join('\n'),
  },
  {
    cmd: 'availability',
    output: 'Open to freelance & contract work\n→ /contact to discuss your CMS or publishing build',
  },
];

export const OUTCOME_CTA = {
  headline: 'Ready to ship your next platform?',
  subline:
    'Tell me about your editorial product, CMS migration, or news portal — I reply within 24 hours with next steps.',
  primary: { label: 'Discuss your project', href: '/contact' },
  secondary: { label: 'Book a 30-min call', href: 'https://topmate.io/arjun_varadiyil', external: true },
};
