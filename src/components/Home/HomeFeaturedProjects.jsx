'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { NEU } from '../ui/neuTheme';
import { Reveal, StaggerReveal, StaggerItem } from '../ui/Reveal';
import { hoverLift, transition } from '../../lib/motion';
import ProjectCard from '../projects/ProjectCard';

export default function HomeFeaturedProjects({ projects = [] }) {
  const featured = projects.slice(0, 2);
  const reduceMotion = useReducedMotion();

  return (
    <section className={`border-t border-gray-900/10 ${NEU.section} px-5 py-16 sm:px-8 md:py-24 md:px-12`}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className={NEU.eyebrow}>Work</p>
            <h2 className={`mt-2 ${NEU.display} text-3xl md:text-4xl`}>Featured projects</h2>
          </div>
          <motion.div whileHover={reduceMotion ? undefined : { x: 4 }} transition={{ duration: 0.2 }}>
            <Link href="/projects" className={`inline-flex items-center gap-1 ${NEU.link}`}>
              View all
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </Reveal>

        <StaggerReveal as="ul" className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2 md:items-stretch md:gap-8">
          {featured.map((project) => (
            <StaggerItem key={project.slug} as="li" className="h-full">
              <motion.div
                className="h-full"
                whileHover={reduceMotion ? undefined : hoverLift}
                transition={transition(0.25)}
              >
                <ProjectCard project={project} variant="featured" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
