'use client';

import React from 'react';
import HeroImage from '../../components/HeroImage';
import { NEU } from '../../components/ui/neuTheme';

export default function HobbiesPage() {
  return (
    <section
      className={`${NEU.pageShell} relative flex min-h-screen items-center justify-center bg-[#0e0d12] px-4 py-16 text-[#f5f2ea]`}
    >
      <div className='relative z-10 flex w-full max-w-6xl flex-col items-center justify-between gap-10 md:flex-row md:gap-8'>
        <div className='flex-1 text-center md:text-left'>
          <p className={`${NEU.badge} mx-auto mb-4 uppercase tracking-wider md:mx-0`}>
            <span className='h-1.5 w-1.5 shrink-0 rounded-full bg-white' />
            Arjun Varadiyil
          </p>
          <h1 className={`${NEU.display} text-6xl leading-none md:text-[120px]`}>software</h1>
        </div>

        <div className='shrink-0'>
          <div className={`rounded-xl bg-zinc-800 p-1 ${NEU.frame}`}>
            <HeroImage />
          </div>
        </div>

        <div className='flex-1 text-center md:text-right'>
          <h1
            className={`${NEU.display} inline-block border-2 border-white bg-indigo-950 px-3 py-1 text-6xl uppercase leading-none text-amber-100 shadow-[6px_6px_0_0_rgb(251_191_36)] md:text-[120px]`}
          >
            developer
          </h1>
          <div className='mx-auto mt-4 max-w-md md:ml-auto'>
            <p className='text-lg leading-relaxed text-[#f5f2ea]/85'>
              MERN-focused builder—shipping interfaces and full-stack products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
