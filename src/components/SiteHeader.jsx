'use client';

import { usePathname } from 'next/navigation';
import { isRajanPage } from '../lib/rajanPages';
import Navbar from './Navbar';

export default function SiteHeader({ maintenance = false }) {
  const pathname = usePathname();

  if (maintenance || isRajanPage(pathname)) {
    return null;
  }

  return <Navbar />;
}
