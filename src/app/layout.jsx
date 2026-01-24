import React from 'react';
import '../index.css';
import "@fontsource/inter";
import ThemeProvider from '../components/ThemeProvider';
import Navbar from '../components/Navbar';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ScrollToTop from '../components/ScrollToTop';

export const metadata = {
  title: 'Arjun Varadiyil - Portfolio',
  description: 'Full Stack Developer | MERN Stack | Portfolio Website',
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
