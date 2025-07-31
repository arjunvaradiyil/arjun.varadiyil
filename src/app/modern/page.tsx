import ModernHero from "@/components/ModernHero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Volunteering from "@/components/Volunteering";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arjun Varadiyil - Modern Portfolio | Full Stack Developer & Software Engineer",
  description: "Modern portfolio of Arjun Varadiyil, a full-stack developer based in Kerala, India. Specializing in MERN stack, React.js, Node.js, and Next.js development. Clean, modern design with smooth animations.",
  keywords: [
    "Arjun Varadiyil",
    "Full Stack Developer",
    "Software Engineer",
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Web Developer Kerala",
    "Modern Portfolio",
    "Kerala Developer",
    "India Developer",
    "Modern Design"
  ],
  openGraph: {
    title: "Arjun Varadiyil - Modern Portfolio | Full Stack Developer & Software Engineer",
    description: "Modern portfolio of Arjun Varadiyil, a full-stack developer based in Kerala, India. Clean, modern design with smooth animations.",
    url: "https://arjunvaradiyil.in/modern",
    siteName: "Arjun Varadiyil Modern Portfolio",
    images: [
      {
        url: "https://arjunvaradiyil.in/arjun-varadiyil-og-image.webp",
        width: 1200,
        height: 630,
        alt: "Arjun Varadiyil - Modern Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Varadiyil - Modern Portfolio | Full Stack Developer & Software Engineer",
    description: "Modern portfolio of Arjun Varadiyil, a full-stack developer based in Kerala, India. Clean, modern design with smooth animations.",
    images: ["https://arjunvaradiyil.in/arjun-varadiyil-og-image.webp"],
    creator: "@arjunv",
  },
  alternates: {
    canonical: "https://arjunvaradiyil.in/modern",
  },
};

export default function ModernHome() {
  return (
    <>
      {/* Structured Data for Modern Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Arjun Varadiyil",
            "jobTitle": "Full Stack Developer",
            "description": "Full Stack Developer specializing in MERN stack, React.js, Node.js, and Next.js development",
            "url": "https://arjunvaradiyil.in/modern",
            "sameAs": [
              "https://github.com/arjunvaradiyil",
              "https://www.linkedin.com/in/arjun-varadiyil/",
              "https://www.instagram.com/arjunvardiyil/"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "knowsAbout": [
              "MERN Stack",
              "React.js",
              "Node.js",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "MongoDB",
              "Express.js",
              "Web Development",
              "Full Stack Development"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kerala",
              "addressCountry": "India"
            },
            "image": "https://arjunvaradiyil.in/arjun-varadiyil-profile.webp",
            "mainEntity": {
              "@type": "WebSite",
              "name": "Arjun Varadiyil Modern Portfolio",
              "url": "https://arjunvaradiyil.in/modern",
              "description": "Modern portfolio website showcasing Arjun Varadiyil's work as a Full Stack Developer"
            }
          })
        }}
      />
      
      <ModernHero />
      <main className="pt-0 modern-portfolio" role="main" aria-label="Modern portfolio content">
        <section id="about" className="scroll-mt-20" aria-labelledby="about-heading">
          <About />
        </section>
        <section id="experience" className="scroll-mt-20" aria-labelledby="experience-heading">
          <Experience />
        </section>
        <section id="education" className="scroll-mt-20" aria-labelledby="education-heading">
          <Education />
        </section>
        <section id="skills" className="scroll-mt-20" aria-labelledby="skills-heading">
          <Skills />
        </section>
        <section id="projects" className="scroll-mt-20" aria-labelledby="projects-heading">
          <Projects />
        </section>
        <section id="certifications" className="scroll-mt-20" aria-labelledby="certifications-heading">
          <Certifications />
        </section>
        <section id="volunteering" className="scroll-mt-20" aria-labelledby="volunteering-heading">
          <Volunteering />
        </section>
        <section id="contact" className="scroll-mt-20" aria-labelledby="contact-heading">
          <Contact />
        </section>
      </main>
    </>
  );
} 