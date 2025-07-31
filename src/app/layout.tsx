import type { Metadata } from "next";
import "./globals.css";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const siteConfig = {
  name: "Arjun Varadiyil - Full Stack Developer",
  description: "Portfolio of Arjun Varadiyil, a full-stack developer based in Kerala, India. Specializing in building exceptional digital experiences.",
  url: "https://arjunvaradiyil.in",
  ogImage: "https://arjunvaradiyil.in/arjun-varadiyil-og-image.webp",
  author: "Arjun Varadiyil",
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Arjun Varadiyil',
  alternateName: 'Arjun Vardiyil',
  jobTitle: 'Full Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance'
  },
  url: siteConfig.url,
  sameAs: [
    'https://github.com/arjunvaradiyil',
    'https://www.linkedin.com/in/arjun-varadiyil/',
    'https://www.instagram.com/arjunvardiyil/',
    'https://twitter.com/arjunv',
    'https://www.facebook.com/arjun.varadiyil',
    'https://www.youtube.com/@arjunvaradiyil',
    'https://medium.com/@arjunvaradiyil',
    'https://dev.to/arjunvaradiyil',
    'https://stackoverflow.com/users/arjunvaradiyil',
    'https://www.behance.net/arjunvaradiyil',
    'https://dribbble.com/arjunvaradiyil',
    'https://www.figma.com/@arjunvaradiyil'
  ],
  knowsAbout: [
    'Full Stack Development',
    'MERN Stack',
    'React.js',
    'Node.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Python',
    'MongoDB',
    'Express.js',
    'Payload CMS',
    'Web Development',
    'API Development',
    'Database Design',
    'Frontend Development',
    'Backend Development',
    'Responsive Design',
    'SEO Optimization',
    'Performance Optimization'
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Full Stack Developer',
    occupationLocation: {
      '@type': 'Place',
      name: 'Kerala, India'
    }
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kerala',
    addressCountry: 'India'
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Your University Name'
  },
  description: 'Full Stack Developer specializing in MERN stack, React.js, Node.js, and Next.js. Based in Kerala, India. Creating exceptional digital experiences with modern web technologies.',
  image: `${siteConfig.url}/arjun-varadiyil-profile.webp`,
  email: 'arjunvaradiyil@gmail.com',
  telephone: '+91-XXXXXXXXXX'
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Arjun Varadiyil - Portfolio',
  url: siteConfig.url,
  description: 'Portfolio website of Arjun Varadiyil, a Full Stack Developer based in Kerala, India. Specializing in MERN stack, React.js, Node.js, and Next.js development.',
  author: {
    '@type': 'Person',
    name: 'Arjun Varadiyil',
    url: siteConfig.url,
    sameAs: [
      'https://github.com/arjunvaradiyil',
      'https://www.linkedin.com/in/arjun-varadiyil/',
      'https://www.instagram.com/arjunvardiyil/'
    ]
  },
  publisher: {
    '@type': 'Person',
    name: 'Arjun Varadiyil'
  },
  inLanguage: 'en',
  isAccessibleForFree: true,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  }
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "MERN Stack",
    "React.js",
    "Node.js",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Arjun Varadiyil",
    "Web Developer Kerala",
    "Full Stack Developer Kochi",
    "Full Stack Developer Malappuram",
    "Full Stack Developer Kerala",
    "Full Stack Developer India",
    "Software Engineer Kochi",
    "Software Engineer Kerala",
    "Web Developer Kochi",
    "Web Developer Malappuram",
    "MERN Stack Developer Kerala",
    "React Developer Kochi",
    "Node.js Developer Kerala",
    "Next.js Developer India",
    "Frontend Developer Kerala",
    "Backend Developer Kochi",
    "JavaScript Developer Kerala",
    "TypeScript Developer India",
    "Freelance Developer",
    "Freelance Full Stack Developer",
    "Freelance Web Developer",
    "Freelance Software Engineer",
    "Freelance React Developer",
    "Freelance Node.js Developer",
    "Freelance MERN Stack Developer",
    "Freelance Developer Kerala",
    "Freelance Developer Kochi",
    "Freelance Developer India",
    "Hire Freelance Developer",
    "Remote Developer",
    "Contract Developer",
    "Independent Developer",
    "Web Development Services",
    "Custom Web Development",
    "E-commerce Development",
    "API Development",
    "Database Development",
    "Responsive Web Design",
    "Payload CMS",
    "Payload CMS Developer",
    "Payload CMS Expert",
    "Payload CMS Development",
    "Freelance Payload CMS Developer",
    "Payload Headless CMS",
    "Content Management System",
    "Headless CMS Developer",
    "Next.js Developer",
    "Next.js Expert",
    "Next.js Development",
    "Next.js App Router",
    "Next.js 13",
    "Next.js 14",
    "Server Side Rendering",
    "Static Site Generation",
    "React Server Components",
    "Freelance Next.js Developer",
    "Next.js Payload CMS",
    "JAMstack Developer",
    "Modern Web Development",
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  category: "Technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Arjun Varadiyil - Full Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@arjunv",
    site: "@arjunv",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  manifest: `${siteConfig.url}/site.webmanifest`,
  
  // Performance optimizations
  other: {
    'theme-color': '#000000',
    'color-scheme': 'dark',
    'viewport': 'width=device-width, initial-scale=1',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': siteConfig.name,
    'author': siteConfig.author,
    'copyright': `© ${new Date().getFullYear()} ${siteConfig.author}`,
    'language': 'en',
    'revisit-after': '7 days',
    'distribution': 'global',
    'rating': 'general',
    'robots': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    // Social Media Specific
    'twitter:creator': '@arjunv',
    'twitter:site': '@arjunv',
    'og:site_name': siteConfig.name,
    'og:locale': 'en_US',
    'og:type': 'website',
    'og:title': siteConfig.name,
    'og:description': siteConfig.description,
    'og:url': siteConfig.url,
    'og:image': siteConfig.ogImage,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': 'Arjun Varadiyil - Full Stack Developer Portfolio',
    // LinkedIn specific
    'linkedin:owner': 'arjun-varadiyil',
    'linkedin:profile': 'arjun-varadiyil',
    // Facebook specific
    'fb:app_id': 'your-facebook-app-id',
    'fb:admins': 'your-facebook-admin-id',
    // Additional social
    'instagram:owner': 'arjunvardiyil',
    'github:owner': 'arjunvaradiyil',
  },

  // Additional SEO
  alternates: {
    canonical: siteConfig.url,
  },

  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="application-name" content="Arjun Varadiyil Portfolio" />
        <meta name="apple-mobile-web-app-title" content="Arjun Varadiyil" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="antialiased">
        {/* Skip to main content link for screen readers */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-400 text-gray-900 px-4 py-2 rounded-md z-50 font-semibold"
        >
          Skip to main content
        </a>
        
        <Hero />
        <main id="main-content" role="main" aria-label="Portfolio content">
          {children}
        </main>
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
