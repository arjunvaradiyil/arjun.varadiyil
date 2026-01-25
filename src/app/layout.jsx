import React from 'react';
import '../index.css';
import "@fontsource/inter";
import "@fontsource/syne";
import ThemeProvider from '../components/ThemeProvider';
import Navbar from '../components/Navbar';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ScrollToTop from '../components/ScrollToTop';

export const metadata = {
  title: {
    default: 'Arjun Varadiyil - Full Stack Developer',
    template: '%s | Arjun Varadiyil',
  },
  description: 'Full Stack Developer specializing in MERN stack. Building scalable web applications with React, Node.js, MongoDB, and Express. View my portfolio, projects, and experience.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'React Developer', 'Node.js', 'Web Developer', 'Portfolio', 'Arjun Varadiyil'],
  authors: [{ name: 'Arjun Varadiyil' }],
  creator: 'Arjun Varadiyil',
  publisher: 'Arjun Varadiyil',
  metadataBase: new URL('https://arjunvaradiyil.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arjunvaradiyil.in',
    siteName: 'Arjun Varadiyil - Portfolio',
    title: 'Arjun Varadiyil - Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN stack. Building scalable web applications.',
    images: [
      {
        url: '/assets/images/arjunvaradiyil.jpeg',
        width: 1200,
        height: 630,
        alt: 'Arjun Varadiyil - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arjun Varadiyil - Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN stack. Building scalable web applications.',
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
