'use client';

import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Download, Github, Linkedin, Mail } from 'lucide-react';
import { TOPMATE_URL } from '../../lib/siteSeo';
import Image from 'next/image';
import { NEU } from '../ui/neuTheme';
import WordStaggerReveal from '../ui/WordStaggerReveal';

const resume = 'https://drive.google.com/file/d/1ZnYLAnJzsW0EkUPe_3R-6agIO6oWDzT-/view';

const BIO =
  "Hello! I'm Arjun Varadiyil. My journey in technology is driven by a passion for crafting elegant solutions to complex problems. I specialize in the MERN stack, building applications that are not just functional, but also provide an intuitive and engaging user experience.";

const easeOut = [0.22, 1, 0.36, 1];

export default function AboutHero() {
  const reduceMotion = useReducedMotion();

  const textContainer = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: reduceMotion ? 0 : 0.1,
          delayChildren: reduceMotion ? 0 : 0.06,
        },
      },
    }),
    [reduceMotion],
  );

  const fadeUp = useMemo(
    () => ({
      hidden: {
        opacity: reduceMotion ? 1 : 0,
        y: reduceMotion ? 0 : 20,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: reduceMotion ? { duration: 0 } : { duration: 0.52, ease: easeOut },
      },
    }),
    [reduceMotion],
  );

  const iconParent = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: reduceMotion ? 0 : 0.07,
          delayChildren: reduceMotion ? 0 : 0.02,
        },
      },
    }),
    [reduceMotion],
  );

  const iconChild = useMemo(
    () => ({
      hidden: {
        opacity: reduceMotion ? 1 : 0,
        y: reduceMotion ? 0 : 10,
        scale: reduceMotion ? 1 : 0.88,
      },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 22 },
      },
    }),
    [reduceMotion],
  );

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/arjunvaradiyil',
      rel: 'noopener noreferrer me',
      icon: <Linkedin className='cursor-pointer transition hover:text-sky-600 dark:hover:text-sky-400' />,
    },
    {
      href: 'https://github.com/arjunvaradiyil/arjun.varadiyil',
      rel: 'noopener noreferrer me',
      icon: <Github className='cursor-pointer transition hover:text-sky-600 dark:hover:text-sky-400' />,
    },
    {
      href: TOPMATE_URL,
      rel: 'noopener noreferrer',
      title: 'Book a call — mentoring & sessions',
      icon: <Calendar className='cursor-pointer transition hover:text-amber-600 dark:hover:text-amber-400' />,
    },
    {
      href: 'mailto:arjunvaradiyil203@gmail.com',
      rel: undefined,
      icon: <Mail className='cursor-pointer transition hover:text-sky-600 dark:hover:text-sky-400' />,
    },
    {
      href: resume,
      rel: 'noopener noreferrer',
      icon: <Download className='cursor-pointer transition hover:text-sky-600 dark:hover:text-sky-400' />,
    },
  ];

  return (
    <>
      <section className={`${NEU.section} mt-12 w-full px-6 py-16 md:px-20 md:py-20`}>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.45, ease: easeOut }}
          className='fixed left-4 top-20 z-40 flex items-center gap-3 sm:left-6 md:left-8 md:top-24'
        >
          <div className={`${NEU.badge} uppercase tracking-wider`}>
            <span className='h-2 w-2 shrink-0 animate-pulse rounded-full bg-gray-900 dark:bg-white' />
            Available for work
          </div>
        </motion.div>
        <div className='relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center justify-center gap-8 md:flex-row md:items-center md:justify-center md:gap-12'>
          <div className='flex w-full flex-col items-center text-center md:w-1/2 md:max-w-xl'>
            <motion.div
              variants={textContainer}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, margin: '-48px' }}
              className='flex w-full flex-col items-center'
            >
              <motion.h1
                variants={fadeUp}
                className={`${NEU.display} text-[40px] leading-none md:text-[80px] lg:text-[100px]`}
              >
                ABOUT{' '}
                <span className='mt-1 inline-block border-2 border-gray-900 bg-teal-100 px-2 py-0.5 align-middle text-gray-900 shadow-[6px_6px_0_0_rgb(17,24,39)] dark:border-white dark:bg-teal-950 dark:text-teal-100 dark:shadow-[6px_6px_0_0_rgb(255,255,255)]'>
                  ME
                </span>
              </motion.h1>
            </motion.div>

            <WordStaggerReveal
              text={BIO}
              className='mx-auto mt-8 max-w-xl text-left text-[18px] leading-relaxed sm:text-center'
              viewport={{ once: true, amount: 0.35, margin: '-40px 0px' }}
            />

            <motion.div
              variants={iconParent}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, margin: '-32px' }}
              className='mt-8 flex flex-wrap items-center justify-center gap-6 text-2xl text-gray-900 dark:text-gray-200'
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.rel}
                  title={link.title}
                  variants={iconChild}
                  whileHover={reduceMotion ? undefined : { y: -3, scale: 1.06 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={
              reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 24, delay: 0.08 }
            }
            whileHover={reduceMotion ? undefined : { y: -8, transition: { type: 'spring', stiffness: 320, damping: 18 } }}
            className='relative mt-8 flex w-full justify-center md:mt-12 md:w-1/2'
            style={{ willChange: reduceMotion ? undefined : 'transform' }}
          >
            <div className={`overflow-hidden rounded-xl bg-zinc-200 ${NEU.frame} dark:bg-zinc-800`}>
              <motion.div
                className='relative h-[330px] w-[220px] md:h-[360px] md:w-[240px] lg:h-[400px] lg:w-[280px]'
                initial={reduceMotion ? false : { scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.65, ease: easeOut }}
              >
                <Image
                  src='/assets/images/7820B7FD-B81A-45D7-8C3E-0C7F6D740637.JPG'
                  alt='About profile'
                  fill
                  className='object-cover'
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
