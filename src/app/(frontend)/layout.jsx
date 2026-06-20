import React from 'react';
import '../../index.css';
import ThemeProvider from '../../components/ThemeProvider';
import SiteHeader from '../../components/SiteHeader';
import MainShell from '../../components/MainShell';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import ConditionalFooter from '../../components/ConditionalFooter';
import ScrollToTop from '../../components/ScrollToTop';
import GoogleAnalytics from '../../components/GoogleAnalytics';
import StructuredData from '../../components/StructuredData';
import SiteSettingsProvider from '../../components/SiteSettingsProvider';
import { getSiteSettings } from '../../lib/cms/content';
import { isMaintenanceMode } from '../../lib/maintenance';
import { THEME_INIT_SCRIPT } from '../../lib/theme';
import { fontClassNames } from '../../lib/fonts';
import {
  DEFAULT_DESCRIPTION,
  KEYWORDS,
  OG_DESCRIPTION,
  OG_TITLE,
  SITE_NAME,
  SITE_TITLE_DEFAULT,
  TWITTER_DESCRIPTION,
  absoluteUrl,
} from '../../lib/siteSeo';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export const formatDetection = {
  telephone: false,
  email: false,
  address: false,
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
      'en-IN': absoluteUrl('/'),
      'x-default': absoluteUrl('/'),
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: absoluteUrl('/'),
    siteName: SITE_NAME,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
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
    description: TWITTER_DESCRIPTION,
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
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export const revalidate = 60;

export default async function RootLayout({ children }) {
  const maintenance = isMaintenanceMode();
  const siteSettings = await getSiteSettings();

  return (
    <html lang='en' className={`dark ${fontClassNames}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: THEME_INIT_SCRIPT,
          }}
        />
        <link rel='preload' as='image' href='/assets/images/profilepic.png' fetchPriority='high' />
        <link rel='alternate' hrefLang='en' href={absoluteUrl('/')} />
        <link rel='alternate' hrefLang='en-IN' href={absoluteUrl('/')} />
        <link rel='alternate' hrefLang='x-default' href={absoluteUrl('/')} />
      </head>
      <body className='antialiased font-sans'>
        <GoogleAnalytics />
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
