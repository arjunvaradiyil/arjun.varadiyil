'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import RajanPageShell from '../../../components/home-rajan/RajanPageShell';
import WaveRibbon from '../../../components/home-rajan/WaveRibbon';
import LetsBuildSection from '../../../components/home-rajan/LetsBuildSection';
import { GITHUB_URL, LINKEDIN_URL } from '../../../data/proof';
import { experienceData } from '../../../data/experienceData';
import { EDUCATION_TIMELINE, PROFILE as DEFAULT_PROFILE } from '../../../data/aboutData';
import {
  ABOUT_EXPERIENCE_INTRO,
  ABOUT_SKILLS_LINE,
  ABOUT_SUMMARY_SEO,
} from '../../../data/seoContent';
import { EMPLOYER_SHORT, LOCATION, ROLE_TITLE } from '../../../lib/employment';
import { SITE_EMAIL } from '../../../lib/siteSeo';

const EASE = [0.16, 1, 0.3, 1];
const resume = 'https://drive.google.com/file/d/1ZnYLAnJzsW0EkUPe_3R-6agIO6oWDzT-/view';

function SectionLabel({ children }) {
  return (
    <p className="mb-8 font-mono text-sm uppercase tracking-widest text-gray-400">{children}</p>
  );
}

function PortraitFrame({ alt, reduceMotion }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
      className="relative mx-auto h-72 w-64 flex-shrink-0 md:mx-0 md:h-[28rem] md:w-[22rem]"
    >
      <div className="group relative h-full w-full overflow-hidden rounded-[2.75rem] border border-black bg-white md:rounded-[3.5rem]">
        <Image
          src="/profilepic-removebg-preview.png"
          alt={alt}
          fill
          className="object-contain object-bottom grayscale transition duration-700 group-hover:grayscale-0"
          sizes="(max-width: 768px) 256px, 352px"
          priority
        />
      </div>
      <span className="pointer-events-none absolute -left-3 -top-3 h-7 w-7 border-l-2 border-t-2 border-black md:-left-4 md:-top-4 md:h-9 md:w-9" aria-hidden />
      <span className="pointer-events-none absolute -right-3 -top-3 h-7 w-7 border-r-2 border-t-2 border-black md:-right-4 md:-top-4 md:h-9 md:w-9" aria-hidden />
      <span className="pointer-events-none absolute -bottom-3 -left-3 h-7 w-7 border-b-2 border-l-2 border-black md:-bottom-4 md:-left-4 md:h-9 md:w-9" aria-hidden />
      <span className="pointer-events-none absolute -bottom-3 -right-3 h-7 w-7 border-b-2 border-r-2 border-black md:-bottom-4 md:-right-4 md:h-9 md:w-9" aria-hidden />
    </motion.div>
  );
}

export default function AboutPageClient({
  education = [],
  skills = [],
  experience = [],
  certifications = [],
  profile,
}) {
  const reduceMotion = useReducedMotion();
  const person = profile || DEFAULT_PROFILE;
  const displayName = person.fullName || person.name || 'Arjun Varadiyil';
  const expRows = experience?.length ? experience : experienceData;
  const eduRows = education?.length ? education : EDUCATION_TIMELINE;
  const skillList = skills?.length
    ? skills.map((s) => (typeof s === 'string' ? s : s.name || s.title)).filter(Boolean)
    : ['Next.js', 'Payload CMS', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'LangChain', 'GraphQL', 'Tailwind CSS'];

  return (
    <RajanPageShell>
      <section className="relative px-6 pb-24 pt-28 md:px-16 md:pb-32 md:pt-32 lg:px-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <WaveRibbon />
        </div>
        <div className="relative z-10">
          <p className="mb-6 font-mono text-sm uppercase tracking-widest text-gray-500">
            [ Profile ]
          </p>
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:gap-16 lg:gap-20">
            <div className="flex-1">
              <h1 className="font-display text-[12vw] font-bold uppercase leading-[0.85] tracking-tighter md:text-[7vw]">
                {displayName.split(' ')[0]}
                <br />
                {displayName.split(' ').slice(1).join(' ') || 'Varadiyil'}
              </h1>
              <p className="mt-6 max-w-xl font-mono text-sm uppercase tracking-widest text-gray-500">
                {ROLE_TITLE} · {EMPLOYER_SHORT} · {person.location || LOCATION}
              </p>
              <p className="mt-8 max-w-2xl font-display text-2xl font-medium leading-snug tracking-tight text-neutral-800 md:text-3xl">
                {ABOUT_SUMMARY_SEO}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${person.email || SITE_EMAIL}`}
                  className="inline-flex items-center gap-2 border-b-2 border-black pb-1 font-mono text-sm uppercase tracking-widest transition hover:border-gray-500 hover:text-gray-500"
                >
                  <Mail size={16} /> Email
                </a>
                <a
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-black px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition hover:bg-black hover:text-white"
                >
                  Resume <ArrowUpRight size={14} />
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black transition hover:bg-black hover:text-white"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black transition hover:bg-black hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            <PortraitFrame alt={displayName} reduceMotion={reduceMotion} />
          </div>
        </div>
      </section>

      <section id="experience" className="border-t border-black/10 px-6 py-24 md:px-16 md:py-32 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>[ 01 ] Experience</SectionLabel>
          <p className="mb-10 max-w-2xl font-display text-xl text-neutral-600 md:text-2xl">
            {ABOUT_EXPERIENCE_INTRO}
          </p>
          <div className="flex flex-col">
            {expRows.map((exp, i) => {
              const role = exp.role || exp.title;
              const company = exp.company || exp.organization;
              const period = exp.period || exp.year || exp.dates;
              const points = Array.isArray(exp.points)
                ? exp.points
                : exp.description
                  ? [exp.description]
                  : [];

              return (
                <motion.div
                  key={`${company}-${i}`}
                  whileHover={reduceMotion ? undefined : { x: 16 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="border-b border-black/10 py-10 transition-colors hover:border-black"
                >
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div className="flex-1">
                      <h2 className="font-display text-3xl font-medium">{role}</h2>
                      <p className="mt-2 font-mono text-sm text-gray-500">{company}</p>
                    </div>
                    <div className="flex-shrink-0 font-mono text-sm uppercase tracking-widest md:text-right">
                      {period}
                    </div>
                  </div>
                  {points.length > 0 ? (
                    <ul className="mt-6 max-w-3xl space-y-3">
                      {points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 font-mono text-sm leading-relaxed text-neutral-600"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#ff5e3a]" aria-hidden />
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </motion.div>
              );
            })}
          </div>
          <Link
            href="/experience"
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 transition hover:text-black"
          >
            Full timeline →
          </Link>
        </div>
      </section>

      <section className="border-t border-black/10 px-6 py-24 md:px-16 md:py-32 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>[ 02 ] Skills</SectionLabel>
          <p className="mb-10 max-w-3xl font-display text-2xl font-bold leading-snug tracking-tight md:text-4xl">
            {ABOUT_SKILLS_LINE}
          </p>
          <ul className="flex flex-wrap gap-3">
            {skillList.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-neutral-300 bg-neutral-100 px-5 py-2.5 font-mono text-xs font-semibold tracking-wide text-neutral-700"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-black/10 px-6 py-24 md:px-16 md:py-32 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>[ 03 ] Education</SectionLabel>
          <div className="flex flex-col">
            {eduRows.map((edu, i) => {
              const title = edu.title || edu.degree || edu.school;
              const detail = edu.description;
              const period = edu.year || edu.period;
              const grade = edu.grade;

              return (
                <motion.div
                  key={`${title}-${i}`}
                  whileHover={reduceMotion ? undefined : { x: 16 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex flex-col justify-between border-b border-black/10 py-10 transition-colors hover:border-black md:flex-row md:items-center"
                >
                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-medium md:text-3xl">{title}</h2>
                    {detail ? (
                      <p className="mt-2 max-w-2xl font-mono text-sm text-gray-500">{detail}</p>
                    ) : null}
                    {grade ? (
                      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-neutral-400">
                        {grade}
                      </p>
                    ) : null}
                  </div>
                  <div className="mt-4 flex-shrink-0 font-mono text-sm uppercase tracking-widest md:mt-0 md:text-right">
                    {period}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {certifications?.length > 0 ? (
        <section className="border-t border-black/10 px-6 py-24 md:px-16 md:py-32 lg:px-24">
          <div className="mx-auto max-w-5xl">
            <SectionLabel>[ 04 ] Certifications</SectionLabel>
            <ul className="grid gap-4 md:grid-cols-2">
              {certifications.map((cert, i) => (
                <li
                  key={cert.id || cert.title || i}
                  className="border border-black/10 p-6 transition hover:border-black"
                >
                  <h3 className="font-display text-xl font-bold">{cert.title || cert.name}</h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-widest text-gray-500">
                    {cert.issuer || cert.organization}
                    {cert.year ? ` · ${cert.year}` : ''}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <LetsBuildSection animatePath />
    </RajanPageShell>
  );
}
