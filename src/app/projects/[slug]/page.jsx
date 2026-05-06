'use client';

import { useParams } from 'next/navigation';
import { projects } from '../../../data/projectData';
import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Clock, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NEU } from '../../../components/ui/neuTheme';
import WordStaggerReveal from '../../../components/ui/WordStaggerReveal';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

function SectionBlock({ title, children, delay = 0 }) {
  return (
    <motion.section
      className={`${NEU.cardStatic} mt-10 p-6 md:mt-14 md:p-8`}
      initial={fadeUp.initial}
      animate={fadeUp.animate}
      transition={{ ...fadeUp.transition, delay }}
    >
      <WordStaggerReveal
        as='h2'
        text={title}
        className={`${NEU.display} mb-4 text-2xl md:text-3xl`}
        viewport={{ once: true, amount: 0.35 }}
      />
      {children}
    </motion.section>
  );
}

export default function ProjectDetailsPage() {
  const params = useParams();
  const slug = params.slug;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className={`${NEU.pageShell} flex min-h-screen items-center justify-center`}>
        <div className='px-6 text-center'>
          <p className={`mb-6 text-lg ${NEU.bodyText}`}>Project not found</p>
          <Link href='/projects' className={`${NEU.btn} inline-flex items-center gap-2`}>
            <ArrowLeft className='h-4 w-4' aria-hidden /> Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects.filter((p) => p.slug !== slug).slice(0, 6);

  return (
    <div className={`${NEU.pageShell} min-h-screen`}>
      <header className='sticky top-0 z-50 border-b-4 border-gray-900 bg-[#f5f2ea]/95 backdrop-blur-sm dark:border-white dark:bg-[#0e0d12]/95'>
        <div className='mx-auto flex max-w-4xl items-center justify-end px-6 py-4 md:px-10'>
          {project.previewLink ? (
            <a
              href={project.previewLink}
              target='_blank'
              rel='noopener noreferrer'
              className={`${NEU.btnPrimary} py-2 text-xs`}
            >
              <span className='flex items-center gap-2'>
                Live <ExternalLink className='h-4 w-4' aria-hidden />
              </span>
            </a>
          ) : null}
        </div>
      </header>

      <main className='mx-auto max-w-4xl px-6 pb-20 md:px-10'>
        <motion.section
          className='pt-8 md:pt-12'
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={fadeUp.transition}
        >
          <div
            className={`relative mb-8 aspect-video w-full overflow-hidden rounded-xl bg-zinc-200 md:mb-10 md:aspect-[21/9] dark:bg-zinc-800 ${NEU.frame}`}
          >
            {project.type === 'video' ? (
              <video src={project.image} autoPlay loop muted controls className='h-full w-full object-cover' />
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className='object-cover'
                priority
                sizes='(max-width: 768px) 100vw, 896px'
              />
            )}
          </div>

          <div className='space-y-4'>
            <p className={`${NEU.badge} w-fit uppercase tracking-wider`}>
              {project.industry || 'Portfolio project'}
            </p>
            <WordStaggerReveal
              as='h1'
              text={project.title}
              className={`${NEU.display} text-4xl tracking-tight sm:text-5xl md:text-6xl`}
              viewport={{ once: true, amount: 0.45 }}
            />
            {project.tagline ? (
              <WordStaggerReveal
                text={project.tagline}
                className={`max-w-2xl text-lg ${NEU.bodyText}`}
                viewport={{ once: true, amount: 0.4 }}
              />
            ) : null}
          </div>

          <div className={`mt-8 flex flex-wrap gap-4 text-sm font-semibold ${NEU.bodyText}`}>
            <span className='flex items-center gap-2'>
              <Calendar className='h-4 w-4 shrink-0 text-sky-700 dark:text-sky-400' aria-hidden />
              {project.year || '—'}
            </span>
            <span className='flex items-center gap-2'>
              <Clock className='h-4 w-4 shrink-0 text-sky-700 dark:text-sky-400' aria-hidden />
              {project.timeline || '—'}
            </span>
            {project.role ? (
              <span className='flex items-center gap-2'>
                <User className='h-4 w-4 shrink-0 text-sky-700 dark:text-sky-400' aria-hidden />
                {project.role}
              </span>
            ) : null}
            {project.teamMembers != null ? (
              <span>
                Team: {project.teamMembers}
              </span>
            ) : null}
          </div>
        </motion.section>

        {project.about ? (
          <SectionBlock title='About' delay={0.05}>
            <WordStaggerReveal
              text={project.about}
              className={`text-base leading-relaxed md:text-lg ${NEU.bodyText}`}
              viewport={{ once: true, amount: 0.35 }}
            />
          </SectionBlock>
        ) : null}

        {project.responsibilities && project.responsibilities.length > 0 ? (
          <SectionBlock title='Responsibilities' delay={0.1}>
            <ul className='space-y-3'>
              {project.responsibilities.map((item, i) => (
                <li key={i} className={`flex items-start gap-3 text-base md:text-lg ${NEU.bodyText}`}>
                  <span className='mt-2 h-2 w-2 shrink-0 border-2 border-gray-900 bg-sky-400 dark:border-white' />
                  <WordStaggerReveal
                    text={item}
                    className='flex-1'
                    viewport={{ once: true, amount: 0.2 }}
                  />
                </li>
              ))}
            </ul>
          </SectionBlock>
        ) : null}

        {project.challenges ? (
          <SectionBlock title='Challenges' delay={0.12}>
            <WordStaggerReveal
              text={project.challenges}
              className={`text-base leading-relaxed md:text-lg ${NEU.bodyText}`}
              viewport={{ once: true, amount: 0.35 }}
            />
          </SectionBlock>
        ) : null}

        {project.solutions ? (
          <SectionBlock title='Solutions' delay={0.14}>
            <WordStaggerReveal
              text={project.solutions}
              className={`text-base leading-relaxed md:text-lg ${NEU.bodyText}`}
              viewport={{ once: true, amount: 0.35 }}
            />
          </SectionBlock>
        ) : null}

        {project.services ? (
          <SectionBlock title='Tech stack' delay={0.16}>
            <div className='flex flex-wrap gap-2'>
              {(Array.isArray(project.services) ? project.services : [project.services]).map((s, i) => (
                <span key={i} className={NEU.techTag}>
                  {s}
                </span>
              ))}
            </div>
          </SectionBlock>
        ) : null}

        {relatedProjects.length > 0 ? (
          <motion.section
            className='mt-16 border-t-4 border-gray-900 pt-10 dark:border-white md:mt-24 md:pt-12'
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.18 }}
          >
            <WordStaggerReveal
              as='h2'
              text='More projects'
              className={`${NEU.display} mb-6 text-2xl md:text-3xl`}
              viewport={{ once: true, amount: 0.4 }}
            />
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
              {relatedProjects.map((related) => (
                <Link
                  key={related.id}
                  href={`/projects/${related.slug}`}
                  className={`${NEU.card} group flex h-full flex-col overflow-hidden p-0`}
                >
                  <div className='relative aspect-video bg-zinc-200 dark:bg-zinc-800'>
                    {related.type === 'video' ? (
                      <video src={related.image} className='h-full w-full object-cover' muted />
                    ) : (
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className='object-cover transition-transform duration-500 group-hover:scale-105'
                        sizes='(max-width: 640px) 100vw, 50vw'
                      />
                    )}
                  </div>
                  <div className='p-4'>
                    <p className={`${NEU.badge} mb-2 w-fit text-[10px] uppercase`}>
                      {related.industry || 'Project'}
                    </p>
                    <WordStaggerReveal
                      as='h3'
                      text={related.title}
                      className={`${NEU.display} text-lg`}
                      viewport={{ once: true, amount: 0.2 }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        ) : null}

        <motion.div
          className='mt-12 text-center md:mt-16'
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
        >
          <Link href='/projects' className={`${NEU.btn} inline-flex items-center gap-2`}>
            <ArrowLeft className='h-4 w-4' aria-hidden /> All projects
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
