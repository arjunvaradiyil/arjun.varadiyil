import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import SocialLinks from "@/components/SocialLinks";

const siteConfig = {
  name: "Arjun V - Full Stack Developer",
  url: "https://arjunv-portfolio.vercel.app", // Replace with your actual domain
  ogImage: "https://arjunv-portfolio.vercel.app/og-image.jpg", // Replace with your actual domain and image path
  description: "The portfolio of Arjun V, a passionate Full Stack Developer specializing in the MERN stack and building scalable web applications.",
  author: "Arjun V",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React.js",
    "Node.js",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Arjun V",
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
    creator: "@arjunv", // Replace with your Twitter handle if you have one
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
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll />
        <SocialLinks />
        {children}
      </body>
    </html>
  );
}
