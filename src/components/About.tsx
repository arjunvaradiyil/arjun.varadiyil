'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrainCircuit, GraduationCap } from 'lucide-react';
import TextHighlight from './TextHighlight';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    const imageEl = imageRef.current;
    const contentEl = contentRef.current;

    gsap.set([imageEl, contentEl], { autoAlpha: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
    });

    tl.fromTo(
      imageEl,
      { scale: 0.8, x: -100 },
      { autoAlpha: 1, scale: 1, x: 0, duration: 1, ease: 'power3.out' }
    ).fromTo(
      contentEl,
      { y: 50 },
      { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.5'
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 sm:py-32 bg-gray-900/50 backdrop-blur-sm overflow-hidden border-y border-slate-800/50 scroll-mt-24">
      <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-start">
          <div ref={imageRef} className="relative flex justify-center lg:justify-start invisible">
            <div className="relative group w-80 h-80 sm:w-96 sm:h-96">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800/50">
                <Image
                  src="/arjun-varadiyil-profile.webp"
                  alt="Arjun Varadiyil - Full Stack Developer and Software Engineer"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 20rem, (max-width: 1024px) 24rem, 24rem"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>
          </div>
          <div ref={contentRef} className="mt-12 lg:mt-0 text-center lg:text-left invisible">
            <p className="text-base font-semibold leading-7 text-amber-400">About Me</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Full Stack Developer & Creative Problem-Solver
            </h2>
            <TextHighlight>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Hello! I&apos;m <strong className="font-bold text-white">Arjun Varadiyil</strong>. My journey in technology is driven by a passion for crafting elegant solutions to complex problems. I specialize in the MERN stack, building applications that are not just functional, but also provide an intuitive and engaging user experience.
              </p>
            </TextHighlight>
            <div className="mt-10 max-w-xl mx-auto lg:mx-0">
              <ul className="space-y-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium leading-6 text-white">Collaborative Spirit</h3>
                    <TextHighlight>
                      <p className="mt-2 text-base text-gray-400">
                        My experience as a computer science faculty member instilled in me a passion for mentoring and sharing knowledge, fostering a collaborative and growth-oriented team environment.
                      </p>
                    </TextHighlight>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <BrainCircuit className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium leading-6 text-white">Lifelong Learner</h3>
                    <TextHighlight>
                      <p className="mt-2 text-base text-gray-400">
                        I am a lifelong learner, always eager to explore new technologies and refine my skills to stay at the forefront of the ever-evolving tech landscape.
                      </p>
                    </TextHighlight>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 