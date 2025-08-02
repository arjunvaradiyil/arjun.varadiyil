import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arjun Varadiyil - Full Stack Developer & Software Engineer",
  description: "Portfolio of Arjun Varadiyil, a full-stack developer based in Kerala, India. Specializing in MERN stack, React.js, Node.js, and Next.js development. View projects, experience, and contact information.",
  keywords: [
    "Arjun Varadiyil",
    "Full Stack Developer",
    "Software Engineer",
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Web Developer Kerala",
    "Portfolio",
    "Kerala Developer",
    "India Developer"
  ],
  openGraph: {
    title: "Arjun Varadiyil - Full Stack Developer & Software Engineer",
    description: "Portfolio of Arjun Varadiyil, a full-stack developer based in Kerala, India. Specializing in MERN stack, React.js, Node.js, and Next.js development.",
    url: "https://arjunvaradiyil.in",
    siteName: "Arjun Varadiyil Portfolio",
    images: [
      {
        url: "https://arjunvaradiyil.in/arjun-varadiyil-og-image.webp",
        width: 1200,
        height: 630,
        alt: "Arjun Varadiyil - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Varadiyil - Full Stack Developer & Software Engineer",
    description: "Portfolio of Arjun Varadiyil, a full-stack developer based in Kerala, India. Specializing in MERN stack, React.js, Node.js, and Next.js development.",
    images: ["https://arjunvaradiyil.in/arjun-varadiyil-og-image.webp"],
    creator: "@arjunv",
  },
  alternates: {
    canonical: "https://arjunvaradiyil.in",
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Arjun Varadiyil",
            "jobTitle": "Full Stack Developer",
            "description": "Full Stack Developer specializing in MERN stack, React.js, Node.js, and Next.js development",
            "url": "https://arjunvaradiyil.in",
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
              "name": "Arjun Varadiyil Portfolio",
              "url": "https://arjunvaradiyil.in",
              "description": "Portfolio website showcasing Arjun Varadiyil's work as a Full Stack Developer"
            }
          })
        }}
      />
      
      <main className="pt-0" role="main" aria-label="Portfolio content">
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
        <section id="services" className="scroll-mt-20" aria-labelledby="services-heading">
          <Services />
        </section>
        <section id="projects" className="scroll-mt-20" aria-labelledby="projects-heading">
          <Projects />
        </section>
        <section id="certifications" className="scroll-mt-20" aria-labelledby="certifications-heading">
          <Certifications />
        </section>
        <section id="contact" className="scroll-mt-20" aria-labelledby="contact-heading">
          <Contact />
        </section>
      </main>
    </>
  );
}
