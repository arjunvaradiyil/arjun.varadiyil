import React from 'react';
import { NEU } from './ui/neuTheme';

const HeroImage = () => {
  return (
    <div
      className={`relative aspect-[0.714286/1] w-80 overflow-hidden rounded-xl bg-zinc-200 md:w-[340px] dark:bg-zinc-800 ${NEU.frame}`}
    >
      <img
        src='/assets/images/profilepic.png'
        alt='Portrait of portfolio creator'
        className='h-full w-full object-cover'
      />
    </div>
  );
};

export default HeroImage;
