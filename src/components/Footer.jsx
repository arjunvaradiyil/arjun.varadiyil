import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { NEU } from './ui/neuTheme';
import { SITE_URL, TOPMATE_URL } from '../lib/siteSeo';

export default function Footer() {
  return (
    <footer className='border-t-4 border-gray-900 bg-[#f5f2ea] py-10 text-gray-900 dark:border-white dark:bg-[#0e0d12] dark:text-gray-100'>
      <div className='mx-auto max-w-7xl px-6 sm:px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
          <a
            href={SITE_URL}
            className={`${NEU.display} text-center text-lg tracking-tight text-gray-900 hover:underline sm:text-left`}
            rel='noopener noreferrer'
          >
            Arjun Varadiyil
          </a>
          <nav aria-label='Footer' className='flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold'>
            <Link href='/projects' className={NEU.link}>
              Projects
            </Link>
            <Link href='/about' className={NEU.link}>
              About
            </Link>
            <Link href='/contact' className={NEU.link}>
              Contact
            </Link>
            <a href='mailto:arjunvaradiyil203@gmail.com' className={NEU.link}>
              Email
            </a>
            <a href={TOPMATE_URL} className={NEU.link} target='_blank' rel='noopener noreferrer'>
              Book a call
            </a>
          </nav>
          <p className='text-center text-xs font-medium text-gray-600 sm:text-right dark:text-gray-400'>
            © {new Date().getFullYear()} · MERN stack developer
          </p>
        </div>

        <p className='mt-8 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
          <span>Made with</span>
          <Heart className='h-4 w-4 shrink-0 fill-rose-500 text-rose-600' strokeWidth={2} aria-hidden />
          <a
            href={SITE_URL}
            className='font-syne font-bold tracking-tight text-gray-900 hover:underline dark:text-white'
            rel='noopener noreferrer'
          >
            Arjun Varadiyil
          </a>
        </p>
      </div>
    </footer>
  );
}
