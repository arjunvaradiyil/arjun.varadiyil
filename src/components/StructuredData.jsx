import { DEFAULT_DESCRIPTION, FACEBOOK_URL, TOPMATE_URL, X_URL, YOUTUBE_URL } from '../lib/siteSeo';

export default function StructuredData() {
  const sameAsExtra = [FACEBOOK_URL, X_URL, YOUTUBE_URL].filter((u) => typeof u === 'string' && u.length > 0);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Arjun Varadiyil",
    "jobTitle": "Professional Web Developer",
    "description": DEFAULT_DESCRIPTION,
    "url": "https://arjunvaradiyil.in",
    "image": "https://arjunvaradiyil.in/assets/images/arjunvaradiyil.jpeg",
    "email": "arjunvaradiyil203@gmail.com",
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Professional Web Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Kochi, Kerala, India"
      },
      "skills": ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "TypeScript", "MERN Stack"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kerala",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/in/arjunvaradiyil",
      "https://github.com/arjunvaradiyil/arjun.varadiyil",
      "https://www.instagram.com/_arjuo__",
      TOPMATE_URL,
      ...sameAsExtra,
    ],
    "knowsAbout": [
      "Web Development",
      "MERN Stack",
      "React",
      "Node.js",
      "MongoDB",
      "Full Stack Development",
      "Web Design"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Kochi"
      },
      {
        "@type": "City",
        "name": "Malappuram"
      },
      {
        "@type": "City",
        "name": "Perinthalmanna"
      },
      {
        "@type": "State",
        "name": "Kerala"
      }
    ]
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Arjun Varadiyil - Web Development Services",
    "description": DEFAULT_DESCRIPTION,
    "url": "https://arjunvaradiyil.in",
    "image": "https://arjunvaradiyil.in/assets/images/arjunvaradiyil.jpeg",
    "provider": {
      "@type": "Person",
      "name": "Arjun Varadiyil",
      "email": "arjunvaradiyil203@gmail.com"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Kochi",
        "@id": "https://www.wikidata.org/wiki/Q18094"
      },
      {
        "@type": "City",
        "name": "Perinthalmanna",
        "@id": "https://www.wikidata.org/wiki/Q7169780"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Malappuram",
        "@id": "https://www.wikidata.org/wiki/Q16156245"
      },
      {
        "@type": "State",
        "name": "Kerala",
        "@id": "https://www.wikidata.org/wiki/Q1186"
      }
    ],
    "serviceType": [
      "Web Development",
      "Web Design",
      "Full Stack Development",
      "MERN Stack Development",
      "React Development",
      "Node.js Development"
    ],
    "priceRange": "Contact for pricing"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Arjun Varadiyil - Web Developer",
    "description": DEFAULT_DESCRIPTION,
    "url": "https://arjunvaradiyil.in",
    "image": "https://arjunvaradiyil.in/assets/images/arjunvaradiyil.jpeg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kerala",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.1632",
      "longitude": "76.6413"
    },
    "areaServed": [
      "Kochi",
      "Malappuram",
      "Perinthalmanna",
      "Kerala"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "10.1632",
        "longitude": "76.6413"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
