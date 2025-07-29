'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Puzzle, MessageCircle, Star } from 'lucide-react';
import TextHighlight from './TextHighlight';

gsap.registerPlugin(ScrollTrigger);

const strengths = [
  { name: 'Problem Solving', icon: Puzzle },
  { name: 'Teamwork', icon: Users },
  { name: 'Communication', icon: MessageCircle },
  { name: 'Leadership', icon: Star },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        duration: 1,
      }
    );
  }, []);

  return (
    <section id="about" className="py-20 relative bg-[#0F172A]/70 backdrop-blur-sm border-y border-slate-800/50 scroll-mt-24" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-16 items-center">
        {/* Profile Picture */}
        <div className="md:col-span-1 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-slate-700/50 shadow-lg">
            <Image
              src="/profile-photo.jpg"
              alt="Arjun Varadiyil"
              layout="fill"
              objectFit="cover"
              className="z-10"
            />
          </div>
        </div>

        {/* About Me Text */}
        <div className="md:col-span-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center md:text-left">
            About Me
          </h2>
          <TextHighlight>
            <p className="text-lg text-gray-300 mb-4">
              Hello! I&apos;m Arjun Varadiyil, a passionate and results-oriented Full Stack Developer with a strong foundation in the MERN stack. My journey in tech is driven by a love for solving complex problems and building applications that are not only functional but also intuitive and enjoyable to use.
            </p>
          </TextHighlight>
          <TextHighlight>
            <p className="text-lg text-gray-300 mb-4">
              With hands-on experience in designing user interfaces, developing robust APIs, and managing databases, I thrive in agile environments where I can collaborate with teams to bring ideas to life. I am a lifelong learner, always eager to explore new technologies and refine my skills.
            </p>
          </TextHighlight>
          <TextHighlight>
            <p className="text-lg text-gray-300">
              My approach to development is centered around collaboration and clean code. I believe the best solutions are born from open communication and a shared commitment to quality. Beyond the code, I&apos;m passionate about mentoring and sharing knowledge, a passion honed during my time as a computer science faculty member.
            </p>
          </TextHighlight>
          
          {/* Core Strengths */}
          <div className="mt-8 pt-8 border-t border-slate-800">
            <h3 className="text-2xl font-bold text-amber-400 mb-4 text-center md:text-left">Core Strengths</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {strengths.map((strength) => (
                <div key={strength.name} className="bg-slate-800/50 p-4 rounded-lg text-center">
                  <strength.icon className="h-8 w-8 text-white mx-auto mb-2" />
                  <p className="font-semibold text-gray-200 text-sm">{strength.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 