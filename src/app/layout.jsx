import React from 'react';
import '../index.css';
import '@fontsource/inter';
import '@fontsource/syne';
import ThemeProvider from '../components/ThemeProvider';
import Navbar from '../components/Navbar';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import StructuredData from '../components/StructuredData';
import { DEFAULT_DESCRIPTION, KEYWORDS, SITE_NAME, SITE_TITLE_DEFAULT, absoluteUrl } from '../lib/siteSeo';

export const metadata = {
  title: {
    default: SITE_TITLE_DEFAULT,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(absoluteUrl('/')),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: absoluteUrl('/'),
    siteName: SITE_NAME,
    title: SITE_TITLE_DEFAULT,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/assets/images/arjunvaradiyil.jpeg',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Web Developer Kerala`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE_DEFAULT,
    description: DEFAULT_DESCRIPTION,
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
  icons: {
    icon: '/assets/images/arjunvaradiyil.jpeg',
    apple: '/assets/images/arjunvaradiyil.jpeg',
    shortcut: '/assets/images/arjunvaradiyil.jpeg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/assets/images/arjunvaradiyil.jpeg' type='image/jpeg' />
        <link rel='apple-touch-icon' href='/assets/images/arjunvaradiyil.jpeg' />
        <link rel='shortcut icon' href='/assets/images/arjunvaradiyil.jpeg' type='image/jpeg' />
      </head>
      <body className='antialiased bg-[#f5f2ea] text-gray-900 dark:bg-[#0e0d12] dark:text-gray-100'>
        <StructuredData />
        <ThemeProvider>
          <ScrollToTop />
          <Navbar />
          <main className='min-h-[60vh] bg-transparent pt-[4.5rem] md:pt-[4.75rem]'>{children}</main>
          <Footer />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
