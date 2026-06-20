'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { NEU } from '../ui/neuTheme';
import { Reveal, StaggerReveal, StaggerItem } from '../ui/Reveal';
import { transition } from '../../lib/motion';
import { HIDDEN_FROM_HOME_SLUGS } from '../../lib/employment';
import ProjectCard from '../projects/ProjectCard';

export default function HomeFeaturedProjects({ projects = [] }) {
  const featured = projects.filter(
    (project) => project?.slug && !HIDDEN_FROM_HOME_SLUGS.includes(project.slug),
  );
  const reduceMotion = useReducedMotion();

  if (featured.length === 0) return null;

  return (
    <section className={`border-t border-[var(--color-border)] ${NEU.section} ${NEU.sectionPad}`}>
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={NEU.eyebrow}>Work</p>
              <h2 className={`mt-3 ${NEU.display} text-3xl md:text-5xl`}>Featured projects</h2>
            </div>
            <Link
              href="/projects"
              className={`inline-flex items-center gap-1.5 ${NEU.link} shrink-0`}
            >
              View all work
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </Reveal>

        <StaggerReveal
          as="ul"
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:mt-12 lg:grid lg:snap-none lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0"
        >
          {featured.map((project, index) => (
            <StaggerItem key={project.slug} as="li" className="w-[min(85vw,360px)] shrink-0 snap-start lg:w-auto lg:min-w-0">
              <motion.div
                className="h-full"
                whileHover={reduceMotion ? undefined : { opacity: 0.96 }}
                transition={transition(0.25)}
              >
                <ProjectCard project={project} variant="featured" index={index + 1} />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
