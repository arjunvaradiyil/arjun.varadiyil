'use client';

import { useParams, useRouter } from "next/navigation";
import { projects } from "../../../data/projectData";
import React from "react";
import { ArrowLeft, ExternalLink, Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

export default function ProjectDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="text-center px-6">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">Project not found</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-500 dark:text-cyan-400 font-medium hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects.filter((p) => p.slug !== slug).slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a]">
      {/* Back + Live link bar */}
      <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-gray-50/95 dark:bg-[#0a0a0a]/95 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </button>
          {project.previewLink && (
            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-blue-500 dark:text-cyan-400 hover:underline"
            >
              Visit live site <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-10 pb-20">
        {/* Hero: image + title block */}
        <motion.section
          className="pt-8 md:pt-12"
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={fadeUp.transition}
        >
          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 mb-8 md:mb-10">
            {project.type === "video" ? (
              <video
                src={project.image}
                autoPlay
                loop
                muted
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />
            )}
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-500 dark:text-cyan-400 font-medium">
              {project.industry || "Portfolio Project"}
            </p>
            <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              {project.title}
            </h1>
            {project.tagline && (
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                {project.tagline}
              </p>
            )}
          </div>

          {/* Meta row: year, timeline, role */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              {project.year || "—"}
            </span>
            <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              {project.timeline || "—"}
            </span>
            {project.role && (
              <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <User className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                {project.role}
              </span>
            )}
            {project.teamMembers != null && (
              <span className="text-gray-600 dark:text-gray-400">
                Team: {project.teamMembers}
              </span>
            )}
          </div>
        </motion.section>

        {/* About */}
        {project.about && (
          <motion.section
            className="mt-12 md:mt-16"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
          >
            <h2 className="font-anton text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">
              About
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              {project.about}
            </p>
          </motion.section>
        )}

        {/* Responsibilities */}
        {project.responsibilities && project.responsibilities.length > 0 && (
          <motion.section
            className="mt-12 md:mt-16"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            <h2 className="font-anton text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">
              Responsibilities
            </h2>
            <ul className="space-y-3">
              {project.responsibilities.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-base md:text-lg"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Challenges */}
        {project.challenges && (
          <motion.section
            className="mt-12 md:mt-16"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.12 }}
          >
            <h2 className="font-anton text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">
              Challenges
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              {project.challenges}
            </p>
          </motion.section>
        )}

        {/* Solutions */}
        {project.solutions && (
          <motion.section
            className="mt-12 md:mt-16"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.14 }}
          >
            <h2 className="font-anton text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">
              Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              {project.solutions}
            </p>
          </motion.section>
        )}

        {/* Tech Stack */}
        {project.services && (
          <motion.section
            className="mt-12 md:mt-16"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.16 }}
          >
            <h2 className="font-anton text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">
              Tech stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {(Array.isArray(project.services) ? project.services : [project.services]).map(
                (s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium"
                  >
                    {s}
                  </span>
                )
              )}
            </div>
          </motion.section>
        )}

        {/* Related projects */}
        {relatedProjects.length > 0 && (
          <motion.section
            className="mt-16 md:mt-24 pt-12 border-t border-gray-200 dark:border-gray-800"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.18 }}
          >
            <h2 className="font-anton text-2xl md:text-3xl text-gray-900 dark:text-white mb-6">
              More projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProjects.map((related, i) => (
                <Link
                  key={related.id}
                  href={`/projects/${related.slug}`}
                  className="group block rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                >
                  <div className="relative aspect-video bg-gray-100 dark:bg-gray-800">
                    {related.type === "video" ? (
                      <video
                        src={related.image}
                        className="w-full h-full object-cover"
                        muted
                      />
                    ) : (
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs uppercase tracking-wider text-blue-500 dark:text-cyan-400 font-medium mb-1">
                      {related.industry || "Project"}
                    </p>
                    <h3 className="font-anton text-lg text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* Back to projects CTA */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All projects
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
