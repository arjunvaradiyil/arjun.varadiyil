import React from 'react';
import '../../index.css';
import '@fontsource/inter';
import '@fontsource/syne';
import ThemeProvider from '../../components/ThemeProvider';
import SiteHeader from '../../components/SiteHeader';
import MainShell from '../../components/MainShell';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import ConditionalFooter from '../../components/ConditionalFooter';
import ScrollToTop from '../../components/ScrollToTop';
import StructuredData from '../../components/StructuredData';
import SiteSettingsProvider from '../../components/SiteSettingsProvider';
import { getSiteSettings } from '../../lib/cms/content';
import { isMaintenanceMode } from '../../lib/maintenance';
import { THEME_INIT_SCRIPT } from '../../lib/theme';
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
  const maintenance = isMaintenanceMode();
  const siteSettings = await getSiteSettings();

  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: THEME_INIT_SCRIPT,
          }}
        />
        <link rel='icon' href='/logo.png' type='image/png' />
        <link rel='apple-touch-icon' href='/logo.png' />
        <link rel='shortcut icon' href='/logo.png' type='image/png' />
      </head>
      <body className='antialiased'>
        <StructuredData />
        <ThemeProvider>
          <SiteSettingsProvider value={siteSettings}>
          <ScrollToTop />
          <SiteHeader maintenance={maintenance} />
          <MainShell maintenance={maintenance}>{children}</MainShell>
          {!maintenance ? <ConditionalFooter /> : null}
          {!maintenance ? <ScrollToTopButton /> : null}
          </SiteSettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
