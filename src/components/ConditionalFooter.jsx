'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Footer from './Footer';

/** Home is minimal (banner-only); hide sitewide footer there. */
export default function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname === '/') return null;
  return <Footer />;
}
