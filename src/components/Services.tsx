'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Smartphone, 
  Zap, 
  Shield,
  Palette,
  Cpu,
  Cloud
} from 'lucide-react';
import TextHighlight from './TextHighlight';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  color: string;
}

const servicesData: Service[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, modern user interfaces with React, Next.js, and cutting-edge web technologies.",
    icon: Palette,
    features: ["React.js & Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "Performance Optimization"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side applications with scalable architecture and efficient data management.",
    icon: Cpu,
    features: ["Node.js & Express", "RESTful APIs", "Authentication", "Database Design", "API Integration"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Full Stack Solutions",
    description: "End-to-end web applications with seamless frontend-backend integration and modern deployment.",
    icon: Code,
    features: ["MERN Stack", "Real-time Features", "Cloud Deployment", "CI/CD Pipeline", "Performance Monitoring"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications with native performance and modern user experience.",
    icon: Smartphone,
    features: ["React Native", "Progressive Web Apps", "Mobile Optimization", "App Store Deployment", "Push Notifications"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Database & Cloud",
    description: "Scalable database solutions and cloud infrastructure for modern applications.",
    icon: Cloud,
    features: ["MongoDB & SQL", "AWS/Azure/GCP", "Serverless Architecture", "Data Security", "Backup & Recovery"],
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Performance & Security",
    description: "Optimizing applications for speed, security, and reliability with industry best practices.",
    icon: Shield,
    features: ["Performance Optimization", "Security Audits", "SEO Implementation", "Analytics Integration", "Monitoring"],
    color: "from-amber-500 to-yellow-500"
  }
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cardEl = cardRef.current;
    if (!cardEl) return;

    gsap.set(cardEl, { autoAlpha: 1 });
    gsap.fromTo(
      cardEl,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardEl,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/50 overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      {/* Card content */}
      <div className="relative p-8">
        {/* Icon */}
        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          <service.icon className="h-8 w-8" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-amber-600 transition-all duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <TextHighlight>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {service.description}
          </p>
        </TextHighlight>

        {/* Features */}
        <div className="space-y-3">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}></div>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    const titleEl = titleRef.current;

    if (!sectionEl || !titleEl) return;

    gsap.set([sectionEl, titleEl], { autoAlpha: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
    });

    tl.fromTo(
      titleEl,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-24 sm:py-32 bg-gray-900/50 backdrop-blur-sm overflow-hidden border-y border-slate-800/50 scroll-mt-24">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <p className="text-base font-semibold leading-7 text-amber-400">What I Offer</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Development Services
          </h2>
          <TextHighlight>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
              Comprehensive full stack development solutions that combine modern technologies 
              with proven methodologies to deliver exceptional digital experiences.
            </p>
          </TextHighlight>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-400/25 transition-all duration-300 hover:scale-105">
            <Zap className="h-5 w-5" />
            <span>Ready to Start Your Project?</span>
          </div>
          <TextHighlight>
            <p className="mt-4 text-gray-400">
              Let&apos;s discuss how I can help bring your ideas to life
            </p>
          </TextHighlight>
        </div>
      </div>
    </section>
  );
} 