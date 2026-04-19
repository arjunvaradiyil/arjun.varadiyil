'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Download } from 'lucide-react';
import Image from 'next/image';
import { NEU } from '../ui/neuTheme';

const resume = 'https://drive.google.com/file/d/1ZnYLAnJzsW0EkUPe_3R-6agIO6oWDzT-/view';

export default function AboutHero() {
  return (
    <>
      <section className={`${NEU.section} mt-12 w-full px-6 py-16 md:px-20 md:py-20`}>
        <div className='fixed left-4 top-20 z-40 flex items-center gap-3 sm:left-6 md:left-8 md:top-24'>
          <div className={`${NEU.badge} uppercase tracking-wider`}>
            <span className='h-2 w-2 shrink-0 animate-pulse rounded-full bg-gray-900 dark:bg-white' />
            Available for work
          </div>
        </div>
        <div className='relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center gap-8 md:flex-row md:gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='w-full md:w-1/2'
          >
            <h1 className={`${NEU.display} text-[40px] leading-none md:text-[80px] lg:text-[100px]`}>
              ABOUT{' '}
              <span className='mt-1 inline-block border-2 border-gray-900 bg-teal-100 px-2 py-0.5 align-middle text-gray-900 shadow-[6px_6px_0_0_rgb(17,24,39)] dark:border-white dark:bg-teal-950 dark:text-teal-100 dark:shadow-[6px_6px_0_0_rgb(255,255,255)]'>
                ME
              </span>
            </h1>

            <h3 className={`${NEU.display} mt-6 border-b-4 border-gray-900 pb-2 text-[24px] dark:border-white md:text-[28px]`}>
              ARJUN VARADIYIL
            </h3>

            <p className='mt-4 max-w-xl text-[18px] leading-relaxed text-gray-800 dark:text-gray-300'>
              Hello! I&apos;m Arjun Varadiyil. My journey in technology is driven by a passion for crafting
              elegant solutions to complex problems. I specialize in the MERN stack, building applications
              that are not just functional, but also provide an intuitive and engaging user experience.
            </p>

            <div className='mt-8 flex items-center gap-6 text-2xl text-gray-900 dark:text-gray-200'>
              <a href='https://www.linkedin.com/in/arjunvaradiyil' target='_blank' rel='noopener noreferrer'>
                <Linkedin className='cursor-pointer transition hover:text-sky-600 dark:hover:text-sky-400' />
              </a>
              <a href='https://github.com/arjunvaradiyil' target='_blank' rel='noopener noreferrer'>
                <Github className='cursor-pointer transition hover:text-sky-600 dark:hover:text-sky-400' />
              </a>
              <a href='mailto:arjunvaradiyil203@gmail.com'>
                <Mail className='cursor-pointer transition hover:text-sky-600 dark:hover:text-sky-400' />
              </a>
              <a href={resume} target='_blank' rel='noopener noreferrer'>
                <Download className='cursor-pointer transition hover:text-sky-600 dark:hover:text-sky-400' />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='relative mt-8 md:mt-12'
          >
            <div className={`overflow-hidden rounded-xl bg-zinc-200 ${NEU.frame} dark:bg-zinc-800`}>
              <div className='relative h-[330px] w-[220px] md:h-[360px] md:w-[240px] lg:h-[400px] lg:w-[280px]'>
                <Image
                  src='/assets/images/7820B7FD-B81A-45D7-8C3E-0C7F6D740637.JPG'
                  alt='About profile'
                  fill
                  className='object-cover'
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
