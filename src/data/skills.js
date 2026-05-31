export const skills = [
  {
    id: '01',
    title: 'Frontend',
    href: '/about',
    cardBlurb:
      'Article pages, programme listings, and festival schedules — React and Next.js layouts built for daily publishing.',
    description:
      'Interfaces for newsrooms and cultural orgs: clear hierarchy, keyboard-friendly navigation, and pages that load fast on mid-range phones.',
    features: [
      'Next.js App Router with SSR and static routes where it fits',
      'Component patterns reused across article, listing, and detail pages',
      'Tailwind layouts tuned for Malayalam and English content',
      'Motion and image loading that does not tank LCP',
    ],
    image:
      'https://miro.medium.com/v2/resize:fit:1400/0*8TnOSxYPBGXfGnSs',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: '02',
    title: 'Full Stack',
    href: '/projects',
    cardBlurb:
      'APIs, auth, and databases wired to the same Next.js codebase — from booth lookup flows to news article endpoints.',
    description:
      'End-to-end features on MongoDB and PostgreSQL: pledge forms, admin dashboards, GraphQL resolvers, and REST hooks for third-party tools.',
    features: [
      'GraphQL and REST APIs shaped around editor and reader needs',
      'MongoDB for civic apps; PostgreSQL where relational data fits',
      'JWT-secured admin panels for non-technical operators',
      'Bug fixes and feature work on live news and festival sites',
    ],
    image:
      'https://www.mindinventory.com/blog/wp-content/uploads/2022/03/react-nodejs.webp',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'GraphQL'],
  },
  {
    id: '03',
    title: 'Content Management',
    href: '/projects',
    cardBlurb:
      'Payload CMS for newsrooms and festivals — custom blocks editors recognise, not generic page builders.',
    description:
      'Collections and blocks for Deshabhimani-style news workflows and biennale programme content: artists, venues, schedules, multimedia.',
    features: [
      'Content models mapped to how editors actually file stories',
      'Reusable blocks for hero, gallery, embed, and related links',
      'S3-backed media libraries with sensible admin UX',
      'Role-based access so reporters and admins see different views',
    ],
    image:
      'https://t3.ftcdn.net/jpg/05/54/74/70/360_F_554747016_FIqkviyI5ClrTfNN3fgL6kI0KUfpaIK9.jpg',
    tags: ['Payload CMS', 'GraphQL', 'S3', 'MongoDB', 'Lexical'],
  },
  {
    id: '04',
    title: 'Tools & Workflow',
    href: '/about',
    cardBlurb:
      'Git, Postman, and VS Code — the boring toolchain that keeps multi-dev squads aligned.',
    description:
      'Version control, API testing, and local setups that match staging — so handoffs between frontend and CMS work stay predictable.',
    features: [
      'GitHub PRs and branch workflows on 4–6 person teams',
      'Postman collections for GraphQL and REST endpoints',
      'VS Code as primary editor across macOS and Linux',
      'Python scripts for one-off data and automation tasks',
    ],
    image:
      'https://i.ytimg.com/vi/7WrU5KQRw2o/hq720.jpg',
    tags: ['Git', 'Postman', 'VS Code', 'Python'],
  },
];
