'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
  AnimatePresence,
} from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGraphql,
  SiJavascript,
} from 'react-icons/si';
import BackgroundGrid from './BackgroundGrid';
import WaveRibbon from './WaveRibbon';
import BottomPillNav from './BottomPillNav';
import OutlineMarquee from './OutlineMarquee';
import KineticGrid from './KineticGrid';
import Preloader from './Preloader';
import LetsBuildSection from './LetsBuildSection';
import { experienceData } from '../../data/experienceData';
import { GITHUB_URL, LINKEDIN_URL } from '../../data/proof';
import { ROLE_TITLE } from '../../lib/employment';
import { SITE_EMAIL } from '../../lib/siteSeo';

const EASE = [0.16, 1, 0.3, 1];

const skillItems = [
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'React', Icon: SiReact },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
  { name: 'GraphQL', Icon: SiGraphql },
  { name: 'Payload CMS', Icon: SiNextdotjs },
];

function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const map = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 80, y: 0 },
    right: { x: -80, y: 0 },
  };

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...map[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...map[direction] }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TextLineReveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  if (reduceMotion) {
    return <div>{children}</div>;
  }

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: '110%', rotate: 3 }}
        animate={isInView ? { y: '0%', rotate: 0 } : { y: '110%', rotate: 3 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function CardReveal({ children, className = '' }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.92, 1, 1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.4, 1, 1, 0.4]);
  const rotateX = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [10, 0, 0, -10]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, rotateX, transformPerspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomeClient({ projects = [], posts = [] }) {
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [isLoading, setIsLoading] = useState(true);

  const onPreloaderComplete = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    if (reduceMotion) {
      setIsLoading(false);
      return undefined;
    }
    if (isLoading) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isLoading, reduceMotion]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const picScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.15]);
  const picY = useTransform(scrollYProgress, [0, 0.15], [0, -40]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const textReveal = {
    hidden: { opacity: 0, y: 100, rotate: 2 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.9, ease: EASE },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE },
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-x-hidden bg-white font-body text-black selection:bg-black selection:text-white"
    >
      <AnimatePresence mode="wait">
        {isLoading ? <Preloader key="loader" onComplete={onPreloaderComplete} /> : null}
      </AnimatePresence>

      <BackgroundGrid />
      {!isLoading ? <BottomPillNav /> : null}

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col justify-center px-6 py-20 md:px-16 md:py-0 lg:px-24">
        <WaveRibbon />
        <motion.div
          style={reduceMotion || isLoading ? undefined : { y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isLoading ? 'hidden' : 'show'}
            className="flex flex-col gap-2"
          >
            <div className="overflow-hidden">
              <motion.p
                variants={textReveal}
                className="mb-4 font-mono text-sm uppercase tracking-widest text-gray-500 dark:text-neutral-400 md:text-base"
              >
                {ROLE_TITLE}
              </motion.p>
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:items-end md:gap-12">
              <div className="flex-1">
                <div className="overflow-hidden">
                  <motion.h1
                    variants={textReveal}
                    className="font-display text-[14vw] font-bold uppercase leading-[0.85] tracking-tighter md:text-[12vw]"
                  >
                    Arjun
                  </motion.h1>
                </div>
                <div className="flex items-end gap-4 overflow-hidden md:gap-8">
                  <motion.h1
                    variants={textReveal}
                    className="font-display text-[14vw] font-bold uppercase leading-[0.85] tracking-tighter md:text-[12vw]"
                  >
                    Varadiyil
                  </motion.h1>
                  <motion.div variants={fadeUp} className="mb-2 hidden sm:block md:mb-6">
                    <a
                      href="/about"
                      className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-black dark:border-white md:h-20 md:w-20"
                    >
                      <div className="absolute inset-0 translate-y-full bg-black transition-transform duration-500 ease-out group-hover:translate-y-0" />
                      <ArrowUpRight className="relative z-10 h-6 w-6 text-black transition-colors duration-500 group-hover:text-white dark:text-white dark:group-hover:text-black md:h-8 md:w-8" />
                    </a>
                  </motion.div>
                </div>
              </div>

              <motion.div
                variants={fadeUp}
                style={reduceMotion ? undefined : { scale: picScale, y: picY }}
                className="relative mb-2 h-36 w-36 flex-shrink-0 self-end md:h-56 md:w-56 md:self-auto"
              >
                <div className="group relative h-full w-full overflow-hidden rounded-2xl border-2 border-black bg-black dark:border-white">
                  <Image
                    src="/arjunvaradiyil.png"
                    alt="Arjun Varadiyil"
                    fill
                    priority
                    className="object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0"
                    sizes="224px"
                  />
                </div>
                <div className="absolute -left-2 -top-2 h-5 w-5 border-l-2 border-t-2 border-black dark:border-white" />
                <div className="absolute -right-2 -top-2 h-5 w-5 border-r-2 border-t-2 border-black dark:border-white" />
                <div className="absolute -bottom-2 -left-2 h-5 w-5 border-b-2 border-l-2 border-black dark:border-white" />
                <div className="absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 border-black dark:border-white" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ delay: isLoading ? 0 : 0.4, duration: 1 }}
          className="absolute bottom-12 left-6 flex flex-col items-center gap-4 md:left-16"
        >
          <span
            className="font-mono text-xs uppercase tracking-widest text-neutral-400"
            style={{ writingMode: 'vertical-rl' }}
          >
            Scroll
          </span>
          <div className="relative h-16 w-px overflow-hidden bg-gray-300">
            <motion.div
              animate={reduceMotion ? undefined : { y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              className="absolute inset-0 h-full w-full bg-black"
            />
          </div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section id="about" className="px-6 py-32 md:px-16 md:py-44 lg:px-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-16 md:grid-cols-[1fr_0.6fr]">
          <div>
            <TextLineReveal>
              <h2 className="mb-12 font-mono text-sm uppercase tracking-widest text-gray-400">
                [ 01 ] Intro
              </h2>
            </TextLineReveal>

            <ScrollReveal>
              <p className="font-display text-3xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                I build{' '}
                <span className="relative inline-block px-3">
                  scalable
                  <svg
                    className="pointer-events-none absolute -inset-x-3 -inset-y-1.5 z-10 h-[calc(100%+0.75rem)] w-[calc(100%+1.5rem)]"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <motion.path
                      d="M 82,15 C 48,12 12,18 7,48 C 2,78 42,90 72,85 C 92,82 90,42 75,20 C 67,10 79,12 87,15"
                      stroke="#ff5e3a"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
                    />
                  </svg>
                </span>{' '}
                digital experiences with Next.js, Payload CMS & AI tooling.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-gray-400 md:text-5xl lg:text-6xl">
                Sketch to launch — schema, UI, and deploy in one pass.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="mt-16 flex items-center gap-6">
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="inline-flex items-center gap-2 border-b-2 border-black pb-1 font-mono text-sm uppercase tracking-widest transition-colors hover:border-gray-500 hover:text-gray-500 dark:border-white dark:hover:border-neutral-400 dark:hover:text-neutral-400"
              >
                <Mail size={16} /> Get in Touch
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black transition-all duration-300 hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black transition-all duration-300 hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" className="hidden md:block">
            <div className="group relative aspect-[3/4] w-full overflow-hidden bg-black">
              <Image
                src="/arjunvaradiyil.png"
                alt="Arjun Varadiyil portrait"
                fill
                className="object-cover object-top grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                sizes="(max-width: 1024px) 40vw, 360px"
              />
              <div className="absolute inset-0 border border-black dark:border-white" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section id="work" className="relative overflow-hidden bg-black text-white">
        <KineticGrid globalColor="monochrome" className="bg-black px-6 py-32 md:px-16 md:py-44 lg:px-24">
          <div className="mb-16 flex items-end justify-between md:mb-24">
            <TextLineReveal>
              <h2 className="font-display text-5xl font-bold uppercase tracking-tighter md:text-7xl">
                Selected <br /> Works
              </h2>
            </TextLineReveal>
            <ScrollReveal direction="left">
              <span className="mb-2 font-mono text-sm uppercase tracking-widest text-gray-500">
                [ 02 ]
              </span>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
            {projects.map((project, i) => (
              <CardReveal key={project.slug || i} className={i % 2 !== 0 ? 'md:mt-24' : ''}>
                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -12 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="h-full"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group flex h-full flex-col overflow-hidden border border-neutral-200/80 bg-white text-black shadow-md transition-shadow duration-500 hover:shadow-2xl"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-top grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-widest text-neutral-400">
                          No image
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 transition group-hover:opacity-40" />
                      <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/90 text-neutral-900 shadow-sm backdrop-blur-sm transition duration-300 group-hover:bg-neutral-950 group-hover:text-white">
                        <ArrowUpRight size={18} />
                      </span>
                      {(project.year || project.industry) && (
                        <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-white/90">
                          {project.year || project.industry}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-6 md:p-8">
                      <h3 className="font-display text-2xl font-bold text-neutral-900 md:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 font-mono text-sm leading-relaxed text-neutral-600">
                        {project.tagline || project.description}
                      </p>
                      {(project.services || []).length > 0 ? (
                        <div className="mt-auto flex flex-wrap gap-2 pt-6">
                          {(project.services || []).slice(0, 4).map((t) => (
                            <span
                              key={t}
                              className="border border-neutral-200 bg-neutral-50 px-3 py-1 font-mono text-xs text-neutral-600"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </Link>
                </motion.div>
              </CardReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border-b border-white/40 pb-1 font-mono text-sm uppercase tracking-widest text-white/80 transition hover:border-white hover:text-white"
            >
              View all works <ArrowUpRight size={14} />
            </Link>
          </ScrollReveal>
        </KineticGrid>
      </section>

      {/* BLOGS (slim SEO strip) */}
      {posts.length > 0 ? (
        <section className="border-t border-black/10 px-6 py-20 dark:border-white/10 md:px-16 lg:px-24" aria-labelledby="home-blog-heading">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 flex items-end justify-between gap-4">
              <TextLineReveal>
                <h2 id="home-blog-heading" className="font-mono text-sm uppercase tracking-widest text-gray-400">
                  [ Blogs ]
                </h2>
              </TextLineReveal>
              <Link
                href="/blog"
                className="font-mono text-xs uppercase tracking-widest text-neutral-500 transition hover:text-black dark:hover:text-white"
              >
                View all →
              </Link>
            </div>
            <ul className="grid gap-6 md:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug} className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col border border-black/10 p-5 transition hover:border-black dark:border-white/10 dark:hover:border-white"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                      {post.date}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-bold leading-snug group-hover:underline">
                      {post.title}
                    </h3>
                    {post.description ? (
                      <p className="mt-auto pt-4 line-clamp-2 font-mono text-xs leading-relaxed text-neutral-500">
                        {post.description}
                      </p>
                    ) : (
                      <span className="mt-auto" aria-hidden />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* MARQUEE */}
      <section className="overflow-hidden border-b border-t border-black/10 py-12 dark:border-white/10 md:py-16">
        <OutlineMarquee
          items={['AI Engineer', 'Full Stack', 'Next.js', 'Payload CMS', 'LangChain']}
          speed={30}
        />
        <div className="h-4" />
        <OutlineMarquee
          items={['TypeScript', 'Civic Tech', 'Newsrooms', 'RAG', 'Kerala']}
          speed={25}
          reverse
        />
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-32 md:px-16 md:py-44 lg:px-24">
        <div className="mx-auto mb-16 max-w-5xl">
          <TextLineReveal>
            <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-gray-400">
              [ 03 ] Experience
            </h2>
          </TextLineReveal>

          <div className="flex flex-col">
            {experienceData.map((exp, i) => (
              <ScrollReveal key={`${exp.company}-${i}`} delay={i * 0.1}>
                <motion.div
                  whileHover={reduceMotion ? undefined : { x: 16 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="group flex flex-col justify-between border-b border-black/10 py-10 transition-colors duration-300 hover:border-black dark:border-white/10 dark:hover:border-white md:flex-row md:items-center"
                >
                  <div className="flex-1">
                    <h3 className="font-display text-3xl font-medium">{exp.role}</h3>
                    <p className="mt-2 font-mono text-sm text-gray-500">
                      {exp.company} — {exp.points?.[0] || ''}
                    </p>
                  </div>
                  <div className="mt-4 flex-shrink-0 font-mono text-sm uppercase tracking-widest text-black dark:text-white md:mt-0 md:text-right">
                    {exp.period}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="overflow-hidden border-t border-black/10 bg-white py-20 dark:border-white/10 dark:bg-[#0a0a0a]">
        <div className="mx-auto mb-16 max-w-5xl px-6 md:px-16 lg:px-24">
          <TextLineReveal>
            <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-gray-400">
              [ 04 ] Skills
            </h2>
          </TextLineReveal>
          <ScrollReveal delay={0.1}>
            <p className="max-w-4xl font-display text-2xl font-bold leading-[1.15] tracking-tight text-black dark:text-white md:text-4xl lg:text-5xl">
              Next.js and Payload for news &amp; culture desks — plus LangChain, RAG, and agent workflows for the next products.
            </p>
          </ScrollReveal>
        </div>

        <div className="overflow-hidden whitespace-nowrap py-6">
          <div className="inline-flex animate-marquee items-center gap-3" style={{ animationDuration: '28s' }}>
            {[...skillItems, ...skillItems].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex flex-shrink-0 items-center gap-3 rounded-full border border-neutral-300/40 bg-neutral-100 px-5 py-2.5 text-neutral-600 shadow-sm transition-all duration-300 hover:bg-neutral-200 hover:text-black dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
              >
                <skill.Icon className="h-5 w-5 flex-shrink-0" />
                <span className="font-mono text-xs font-semibold tracking-wide md:text-sm">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LetsBuildSection as="footer" animatePath />
    </div>
  );
}
