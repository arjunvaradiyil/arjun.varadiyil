import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Arjun Varadiyil - Modern Portfolio",
    template: "%s | Arjun Varadiyil Modern Portfolio"
  },
  description: "Modern portfolio of Arjun Varadiyil, a full-stack developer based in Kerala, India. Clean, modern design with smooth animations and parallax effects.",
  keywords: [
    "Arjun Varadiyil",
    "Full Stack Developer",
    "Software Engineer",
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Web Developer Kerala",
    "Modern Portfolio",
    "Kerala Developer",
    "India Developer",
    "Modern Design",
    "Parallax Effects"
  ],
  authors: [{ name: "Arjun Varadiyil" }],
  creator: "Arjun Varadiyil",
  publisher: "Arjun Varadiyil",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://arjunvaradiyil.in"),
  alternates: {
    canonical: "https://arjunvaradiyil.in/modern",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arjunvaradiyil.in/modern",
    title: "Arjun Varadiyil - Modern Portfolio | Full Stack Developer & Software Engineer",
    description: "Modern portfolio of Arjun Varadiyil, a full-stack developer based in Kerala, India. Clean, modern design with smooth animations.",
    siteName: "Arjun Varadiyil Modern Portfolio",
    images: [
      {
        url: "https://arjunvaradiyil.in/arjun-varadiyil-og-image.webp",
        width: 1200,
        height: 630,
        alt: "Arjun Varadiyil - Modern Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@arjunv",
    creator: "@arjunv",
    title: "Arjun Varadiyil - Modern Portfolio | Full Stack Developer & Software Engineer",
    description: "Modern portfolio of Arjun Varadiyil, a full-stack developer based in Kerala, India. Clean, modern design with smooth animations.",
    images: ["https://arjunvaradiyil.in/arjun-varadiyil-og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function ModernLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="modern-html">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#667eea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://www.linkedin.com" />
        <link rel="preconnect" href="https://www.instagram.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="modern-body">
        {children}
      </body>
    </html>
  );
} 