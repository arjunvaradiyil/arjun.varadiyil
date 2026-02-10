'use client';

import React, { useState } from 'react';
import SidebarMenu from './SidebarMenu';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* TOP BAR */}
      <div className='fixed top-6 right-6 z-50 flex items-center gap-3 font-sans'>
        <div className='flex items-center gap-2 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 px-1 py-1 shadow-sm'>
          {/* THEME TOGGLE BUTTON */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition'
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className='w-5 h-5 text-blue-500 dark:text-cyan-400' />
            ) : (
              <Moon className='w-5 h-5 text-blue-500' />
            )}
          </button>

          {/* MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className='w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition'
            aria-label='Open navigation menu'
          >
          <span
            className="relative block mt-2 w-5 h-[2px] bg-gray-700 dark:bg-[#cacaca] 
            before:content-['']
            before:absolute before:left-0 before:-top-2
            before:w-5 before:h-[2px] before:bg-gray-700 dark:before:bg-[#cacaca]"
          />
          </button>
        </div>
      </div>

      {/* SIDEBAR */}
      <SidebarMenu open={open} setOpen={setOpen} />
    </>
  );
}
