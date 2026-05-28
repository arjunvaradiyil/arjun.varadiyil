'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Download, Github, Linkedin, Mail } from 'lucide-react';
import { TOPMATE_URL } from '../../lib/siteSeo';
import { PROFILE as DEFAULT_PROFILE, PROFESSIONAL_SUMMARY as DEFAULT_SUMMARY } from '../../data/aboutData';
import Image from 'next/image';
import { Reveal } from '../ui/Reveal';
import { NEU } from '../ui/neuTheme';
import { EASE_OUT } from '../../lib/motion';

const resume = 'https://drive.google.com/file/d/1ZnYLAnJzsW0EkUPe_3R-6agIO6oWDzT-/view';

const socialLinkClass =
  'flex h-10 w-10 items-center justify-center border border-white/20 bg-[#111111] text-white transition hover:border-amber-400 hover:text-amber-400';

export default function AboutHero({
  profile = DEFAULT_PROFILE,
  professionalSummary = DEFAULT_SUMMARY,
  workStatus,
}) {
  const reduceMotion = useReducedMotion();
  const company = workStatus?.company ?? 'Faircode Infotech';

  const facts = [
    { label: 'Role', value: profile.designation },
    { label: 'Experience', value: profile.experience },
    { label: 'Education', value: profile.education },
    { label: 'Based in', value: profile.location },
  ];

  const fadeUp = useMemo(
    () =>
      reduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, ease: EASE_OUT },
          },
    [reduceMotion],
  );

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/arjunvaradiyil', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://github.com/arjunvaradiyil/arjun.varadiyil', icon: Github, label: 'GitHub' },
    { href: TOPMATE_URL, icon: Calendar, label: 'Book a call' },
    { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
    { href: resume, icon: Download, label: 'Resume' },
  ];

  return (
    <section className={`${NEU.section} ${NEU.sectionPad}`}>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className={NEU.sectionIndex}>02</span>
                <p className={NEU.eyebrow}>Profile</p>
                {workStatus?.badge ? <span className={NEU.badge}>{workStatus.badge}</span> : null}
              </div>
              <h1 className={`mt-4 ${NEU.displayHero} text-4xl sm:text-5xl md:text-6xl`}>{profile.name}</h1>
              <p className={`mt-2 ${NEU.display} text-xl text-amber-400 md:text-2xl`}>{profile.designation}</p>
              <p className={`mt-2 text-sm font-semibold text-gray-300`}>@{company}</p>
              <p className={`mt-6 max-w-xl text-base leading-relaxed md:text-lg ${NEU.bodyText}`}>
                {professionalSummary}
              </p>
            </Reveal>

            <motion.ul
              {...fadeUp}
              className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:gap-6"
            >
              {facts.map(({ label, value }) => (
                <li key={label}>
                  <p className={NEU.eyebrow}>{label}</p>
                  <p className="mt-1 font-syne text-sm font-bold text-white">{value}</p>
                </li>
              ))}
            </motion.ul>

            <motion.div {...fadeUp} className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer me'}
                  aria-label={label}
                  className={socialLinkClass}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </motion.div>

            <motion.div {...fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className={NEU.btnPrimary}>
                View work
              </Link>
              <Link href="/contact" className={NEU.btn}>
                Contact me
              </Link>
            </motion.div>
          </div>

          <Reveal variant="scale" delay={0.1} className={`mx-auto w-full max-w-md lg:max-w-none ${NEU.frame}`}>
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
              <Image
                src={profile.photo || '/arjunvaradiyil.png'}
                alt={profile.fullName || profile.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
