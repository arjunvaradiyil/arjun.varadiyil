import React from 'react';
import '../index.css';
import "@fontsource/inter";
import "@fontsource/syne";
import ThemeProvider from '../components/ThemeProvider';
import Navbar from '../components/Navbar';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ScrollToTop from '../components/ScrollToTop';
import StructuredData from '../components/StructuredData';

export const metadata = {
  title: {
    default: 'Best Web Developer in Kerala, Kochi | Freelance Web Designer | Arjun Varadiyil',
    template: '%s | Arjun Varadiyil - Web Developer Kerala',
  },
  description: 'Professional Web Developer & Web Designer in Kerala, Kochi, Perinthalmanna. Freelance Full Stack Developer specializing in MERN stack. Expert in React, Node.js, MongoDB. Hire the best web developer near you for modern web applications.',
  keywords: [
    'Web Developer Kerala', 'Web Designer Kerala', 'Web Developer Kochi', 'Web Designer Kochi',
    'Web Developer Perinthalmanna', 'Freelance Web Developer Kerala', 'Best Web Developer Kerala',
    'Web Developer Near Me', 'MERN Stack Developer Kerala', 'React Developer Kerala',
    'Full Stack Developer Kerala', 'Node.js Developer Kerala', 'Freelance Web Designer',
    'Professional Web Developer', 'Web Development Services Kerala', 'Arjun Varadiyil'
  ],
  authors: [{ name: 'Arjun Varadiyil' }],
  creator: 'Arjun Varadiyil',
  publisher: 'Arjun Varadiyil',
  metadataBase: new URL('https://arjunvaradiyil.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://arjunvaradiyil.in',
    siteName: 'Arjun Varadiyil - Web Developer Kerala',
    title: 'Best Web Developer in Kerala, Kochi | Freelance Web Designer',
    description: 'Professional Web Developer & Designer in Kerala, Kochi, Perinthalmanna. Freelance Full Stack Developer specializing in MERN stack. Expert in React, Node.js, MongoDB.',
    images: [
      {
        url: '/assets/images/arjunvaradiyil.jpeg',
        width: 1200,
        height: 630,
        alt: 'Arjun Varadiyil - Web Developer Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Web Developer in Kerala, Kochi | Freelance Web Designer',
    description: 'Professional Web Developer & Designer in Kerala. Freelance Full Stack Developer specializing in MERN stack.',
    images: ['/assets/images/arjunvaradiyil.jpeg'],
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
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StructuredData />
        <ThemeProvider>
          <ScrollToTop />
          <Navbar />
          {children}
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
