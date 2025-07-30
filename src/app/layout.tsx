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
    creator: "@arjunv",
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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
