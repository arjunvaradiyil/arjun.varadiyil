import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  TOPMATE_URL,
  absoluteUrl,
} from './siteSeo';

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROFILE_ID = `${SITE_URL}/#profilepage`;

/** FAQ pairs — visible on homepage; must match FAQPage JSON-LD. */
export const SITE_FAQ = [
  {
    question: 'Who is Arjun Varadiyil?',
    answer:
      'Arjun Varadiyil is a professional web developer and full stack engineer based in Kerala, India. He builds marketing sites, dashboards, and APIs with the MERN stack and Next.js for clients across Kochi, Malappuram, and Perinthalmanna.',
  },
  {
    question: 'Is Arjun Varadiyil a web developer in Kerala?',
    answer:
      'Yes. Arjun Varadiyil is a professional web developer in Kerala who works remotely and on-site across Kochi, Malappuram, Perinthalmanna, and statewide. His portfolio showcases healthcare, wellness, and business web projects.',
  },
  {
    question: 'What technologies does Arjun Varadiyil use?',
    answer:
      'Arjun Varadiyil uses React, Next.js, Node.js, Express, MongoDB, TypeScript, and Tailwind CSS — the MERN stack plus modern frontend tooling. He also works with REST APIs, responsive UI, and SEO-friendly site architecture.',
  },
  {
    question: 'What web development services does Arjun offer?',
    answer:
      'Services include custom website design and development, full stack MERN applications, Next.js marketing sites, API integration, responsive UI, and performance-focused launches for startups and local businesses in Kerala.',
  },
  {
    question: 'How do I contact Arjun Varadiyil?',
    answer:
      'Visit arjunvaradiyil.in/contact to send a message, email arjunvaradiyil203@gmail.com, or book a call via Topmate. LinkedIn and GitHub links are on the homepage and footer.',
  },
  {
    question: 'Where is Arjun Varadiyil based?',
    answer:
      'Arjun Varadiyil is based in Kerala, India, and serves clients in Kochi, Malappuram, Perinthalmanna, and across the state. He is open to remote collaboration and freelance web development engagements.',
  },
];

/** One-line summary for speakable / featured snippets. */
export const ZERO_CLICK_SUMMARY =
  'Arjun Varadiyil is a professional MERN stack and Next.js web developer in Kerala, building websites and full stack apps for clients in Kochi, Malappuram, and Perinthalmanna.';

export const SPEAKABLE_SELECTORS = ['.zero-click-summary', '.zero-click-faq-answer'];

const LINKEDIN = 'https://www.linkedin.com/in/arjunvaradiyil';
const GITHUB = 'https://github.com/arjunvaradiyil/arjun.varadiyil';
const INSTAGRAM = 'https://www.instagram.com/_arjuo__';
const PROFILE_IMAGE = `${SITE_URL}/assets/images/arjunvaradiyil.jpeg`;

export function buildFaqPageSchema(faqs = SITE_FAQ) {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildWebSiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    inLanguage: 'en-IN',
    publisher: { '@id': PERSON_ID },
  };
}

export function buildProfilePageSchema() {
  return {
    '@type': 'ProfilePage',
    '@id': PROFILE_ID,
    url: SITE_URL,
    name: `${SITE_NAME} — Professional Web Developer`,
    description: DEFAULT_DESCRIPTION,
    inLanguage: 'en-IN',
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': PERSON_ID },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: SPEAKABLE_SELECTORS,
    },
  };
}

export function buildPersonSchema(extraSameAs = []) {
  const sameAs = [LINKEDIN, GITHUB, INSTAGRAM, TOPMATE_URL, ...extraSameAs].filter(Boolean);

  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE_NAME,
    jobTitle: 'Professional Web Developer',
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    image: PROFILE_IMAGE,
    email: 'arjunvaradiyil203@gmail.com',
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Professional Web Developer',
      occupationLocation: {
        '@type': 'City',
        name: 'Kochi, Kerala, India',
      },
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'TypeScript', 'MERN Stack', 'Next.js'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kerala',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    sameAs,
    knowsAbout: [
      'Web Development',
      'MERN Stack',
      'React',
      'Next.js',
      'Node.js',
      'MongoDB',
      'Full Stack Development',
    ],
    areaServed: [
      { '@type': 'City', name: 'Kochi' },
      { '@type': 'City', name: 'Malappuram' },
      { '@type': 'City', name: 'Perinthalmanna' },
      { '@type': 'State', name: 'Kerala' },
    ],
  };
}

export function buildProfessionalServiceSchema() {
  return {
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: `${SITE_NAME} — Web Development Services`,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    image: PROFILE_IMAGE,
    provider: { '@id': PERSON_ID },
    areaServed: [
      { '@type': 'City', name: 'Kochi', '@id': 'https://www.wikidata.org/wiki/Q18094' },
      { '@type': 'City', name: 'Perinthalmanna', '@id': 'https://www.wikidata.org/wiki/Q7169780' },
      { '@type': 'AdministrativeArea', name: 'Malappuram', '@id': 'https://www.wikidata.org/wiki/Q16156245' },
      { '@type': 'State', name: 'Kerala', '@id': 'https://www.wikidata.org/wiki/Q1186' },
    ],
    serviceType: [
      'Web Development',
      'Web Design',
      'Full Stack Development',
      'MERN Stack Development',
      'React Development',
      'Next.js Development',
    ],
    priceRange: 'Contact for pricing',
  };
}

export function buildLocalBusinessSchema() {
  return {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: `${SITE_NAME} — Web Developer`,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    image: PROFILE_IMAGE,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kerala',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '10.1632',
      longitude: '76.6413',
    },
    areaServed: ['Kochi', 'Malappuram', 'Perinthalmanna', 'Kerala'],
  };
}

/** Homepage @graph — Person, WebSite, ProfilePage, FAQ, services. */
export function buildHomeGraphSchema(extraSameAs = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildWebSiteSchema(),
      buildProfilePageSchema(),
      buildPersonSchema(extraSameAs),
      buildFaqPageSchema(),
      buildProfessionalServiceSchema(),
      buildLocalBusinessSchema(),
    ],
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : absoluteUrl(item.url),
    })),
  };
}

export function buildItemListSchema({ name, description, items }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url.startsWith('http') ? item.url : absoluteUrl(item.url),
    })),
  };
}

export function buildCreativeWorkSchema(project) {
  const path = `/projects/${project.slug}`;
  const url = absoluteUrl(path);

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${url}#project`,
    name: project.title,
    description: project.tagline || project.description,
    url,
    image: project.image?.startsWith('http') ? project.image : absoluteUrl(project.image || '/assets/images/arjunvaradiyil.jpeg'),
    author: { '@id': PERSON_ID },
    creator: { '@id': PERSON_ID },
    datePublished: project.year,
    genre: project.industry,
    keywords: [...(project.services || []), project.industry].filter(Boolean).join(', '),
  };
}
