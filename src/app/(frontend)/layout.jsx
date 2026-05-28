import React from 'react';
import '../../index.css';
import '@fontsource/inter';
import '@fontsource/syne';
import ThemeProvider from '../../components/ThemeProvider';
import Navbar from '../../components/Navbar';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import ConditionalFooter from '../../components/ConditionalFooter';
import ScrollToTop from '../../components/ScrollToTop';
import PageTransition from '../../components/layout/PageTransition';
import StructuredData from '../../components/StructuredData';
import SiteSettingsProvider from '../../components/SiteSettingsProvider';
import { getSiteSettings } from '../../lib/cms/content';
import { DEFAULT_DESCRIPTION, KEYWORDS, SITE_NAME, SITE_TITLE_DEFAULT, absoluteUrl } from '../../lib/siteSeo';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

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
    languages: {
      en: absoluteUrl('/'),
      'x-default': absoluteUrl('/'),
    },
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
    icon: '/logo.png',
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
};

export const revalidate = 60;

export default async function RootLayout({ children }) {
  const siteSettings = await getSiteSettings();

  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('dark');document.documentElement.classList.remove('light');`,
          }}
        />
        <link rel='icon' href='/logo.png' type='image/png' />
        <link rel='apple-touch-icon' href='/logo.png' />
        <link rel='shortcut icon' href='/logo.png' type='image/png' />
      </head>
      <body className='antialiased bg-[#050505] text-gray-100'>
        <StructuredData />
        <ThemeProvider>
          <SiteSettingsProvider value={siteSettings}>
          <ScrollToTop />
          <Navbar />
          <main className='min-h-[60vh] bg-transparent pt-[7.25rem] sm:pt-[7.5rem] lg:pt-[4.25rem]'>
            <PageTransition>{children}</PageTransition>
          </main>
          <ConditionalFooter />
          <ScrollToTopButton />
          </SiteSettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
