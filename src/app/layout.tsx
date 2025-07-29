import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import SocialLinks from "@/components/SocialLinks";
import Hero from "@/components/Hero";
import WeatherAnimation from "@/components/WeatherAnimation";

const siteConfig = {
  name: "Arjun Varadiyil - Full Stack Developer",
  url: "https://arjunvaradiyil.in",
  ogImage: "https://arjunvaradiyil.in/og-image.jpg",
  description: "The portfolio of Arjun Varadiyil, a passionate Full Stack Developer specializing in the MERN stack and building scalable web applications.",
  author: "Arjun Varadiyil",
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
        <SmoothScroll />
        <SocialLinks />
        <Hero />
        <WeatherAnimation />
        {children}
      </body>
    </html>
  );
}
