import { Inter, Syne } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
  preload: true,
});

export const fontClassNames = `${inter.variable} ${syne.variable}`;
