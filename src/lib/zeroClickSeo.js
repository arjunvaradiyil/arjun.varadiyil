import {
  DEFAULT_DESCRIPTION,
  SITE_EMAIL,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from './siteSeo';
import { SGE_SUMMARY } from '../data/seoContent';
import { EMPLOYER_SHORT } from './employment';

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROFILE_ID = `${SITE_URL}/#profilepage`;

/** FAQ pairs — visible on homepage; must match FAQPage JSON-LD. */
export const SITE_FAQ = [
  {
    question: 'Who is Arjun Varadiyil?',
    answer:
      `A Full Stack Developer at ${EMPLOYER_SHORT} in Kerala. He builds Next.js platforms for healthcare, civic, education, and campaign clients.`,
  },
  {
    question: 'Is Arjun Varadiyil a web developer in Kerala?',
    answer: `Yes — Full Stack Developer at ${EMPLOYER_SHORT}, based in Kerala.`,
  },
  {
    question: 'What technologies does Arjun Varadiyil use?',
    answer:
      'Next.js, Payload CMS, TypeScript, React, Node.js, MongoDB, PostgreSQL, GraphQL, and Tailwind CSS — mostly on publishing and civic products.',
  },
  {
    question: 'What kind of projects has Arjun built?',
    answer:
      'Kochi Muziris Biennale CMS, Deshabhimani news portal, homoeopathic clinic site, civic voter pledge platform, and Kerala quiz site. Case studies are on this portfolio.',
  },
  {
    question: 'How do I contact Arjun Varadiyil?',
    answer:
      'Use the contact form at arjunvaradiyil.in/contact or connect via LinkedIn. GitHub is linked from the site footer and profile page.',
  },
  {
    question: 'Where is Arjun Varadiyil based?',
    answer:
      `Kerala, India. He works at ${EMPLOYER_SHORT}. For professional inquiries, use the contact page or LinkedIn.`,
  },
];

/** One-line summary for speakable / featured snippets. */
export const ZERO_CLICK_SUMMARY = SGE_SUMMARY;

export const SPEAKABLE_SELECTORS = ['.zero-click-summary', '.zero-click-faq-answer'];

const LINKEDIN = 'https://www.linkedin.com/in/arjunvaradiyil';
const GITHUB = 'https://github.com/arjunvaradiyil/arjun.varadiyil';
const INSTAGRAM = 'https://www.instagram.com/_arjuo__';
const PROFILE_IMAGE = `${SITE_URL}/assets/images/arjunvaradiyil.jpeg`;

export function buildFaqPageSchema(faqs = SITE_FAQ) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
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
    name: `${SITE_NAME} — Full Stack Developer`,
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
  const sameAs = [LINKEDIN, GITHUB, INSTAGRAM, ...extraSameAs].filter(Boolean);

  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE_NAME,
    jobTitle: 'Full Stack Developer',
    description: SGE_SUMMARY,
    url: SITE_URL,
    image: PROFILE_IMAGE,
    email: SITE_EMAIL,
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Full Stack Developer',
      occupationLocation: {
        '@type': 'AdministrativeArea',
        name: 'Kerala, India',
      },
      skills: [
        'Next.js',
        'Payload CMS',
        'TypeScript',
        'React',
        'Node.js',
        'Headless CMS Architecture',
        'Performance Optimization',
        'MongoDB',
        'GraphQL',
      ],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kerala',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    sameAs,
    knowsAbout: [
      'Full Stack Development',
      'Next.js',
      'Payload CMS',
      'TypeScript',
      'Headless CMS Architecture',
      'Editorial Platforms',
      'Performance Optimization',
      'High-Traffic Application Development',
      'Digital Journalism Tech Stack',
      'Civic Tech Tools',
      'Web Development',
      'React',
      'Node.js',
      'MongoDB',
      'GraphQL',
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
      'Full Stack Development',
      'Next.js Development',
      'Payload CMS Development',
      'Headless CMS Architecture',
      'Editorial Platform Development',
      'High-Traffic Web Application Development',
      'Web Development',
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
