export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Arjun Varadiyil",
    "jobTitle": "Full Stack Web Developer",
    "description": "Professional Web Developer and Web Designer based in Kerala, India. Specializing in MERN stack development, React, Node.js, and MongoDB.",
    "url": "https://arjunvaradiyil.in",
    "image": "https://arjunvaradiyil.in/assets/images/arjunvaradiyil.jpeg",
    "email": "arjunvaradiyil203@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kerala",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/in/arjunvaradiyil",
      "https://github.com/arjunvaradiyil/arjun.varadiyil"
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
    "description": "Professional Web Development and Web Design services in Kerala, Kochi, and Perinthalmanna. Freelance Full Stack Developer specializing in MERN stack.",
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
    "description": "Best Web Developer and Web Designer in Kerala, Kochi, Perinthalmanna. Freelance Full Stack Developer offering web development services.",
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
