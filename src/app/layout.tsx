import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
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
  name: siteConfig.name,
  url: siteConfig.url,
  sameAs: [
    'https://github.com/arjunvaradiyil',
    'https://www.linkedin.com/in/arjun-varadiyil/',
    'https://www.instagram.com/arjunvardiyil/',
  ],
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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@arjunvardiyil",
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
  },

  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Hero />
        {children}
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
