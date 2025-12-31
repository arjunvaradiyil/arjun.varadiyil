import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import ServiceRow from './ServiceRow';

const services = [
  {
    id: "01",
    title: "Frontend",
    description:
      "Modern, responsive, and high-performing user interfaces tailored to your brand.",
    features: [
      "Responsive UI with Tailwind & Bootstrap",
      "Interactive animations with Framer Motion",
      "SEO-friendly layouts with Next.js",
      "Pixel-perfect conversion from Figma",
    ],
    image:
      "https://miro.medium.com/v2/resize:fit:1400/0*8TnOSxYPBGXfGnSs",
    tags: ["React", "Next.js", "Tailwind", "Bootstrap", "Framer Motion"],
  },
  {
    id: "02",
    title: "Full Stack",
    description:
      "Scalable, secure, production-ready web applications.",
    features: [
      "MERN stack application development",
      "REST & GraphQL APIs",
      "Authentication & role-based access",
      "Optimized backend performance",
    ],
    image:
      "https://www.mindinventory.com/blog/wp-content/uploads/2022/03/react-nodejs.webp",
    tags: ["MongoDB", "Node.js", "Express", "GraphQL", "Apollo Client"],
  },
  {
    id: "03",
    title: "CMS",
    description:
      "Flexible content management solutions with powerful admin control.",
    features: [
      "Headless CMS using Strapi",
      "WordPress custom themes & integrations",
      "Content workflows & admin dashboards",
      "MySQL-backed data management",
    ],
    image:
      "https://t3.ftcdn.net/jpg/05/54/74/70/360_F_554747016_FIqkviyI5ClrTfNN3fgL6kI0KUfpaIK9.jpg",
    tags: ["Strapi", "WordPress", "MySQL", "Headless CMS"],
  },
  {
    id: "04",
    title: "Deployment",
    description:
      "From development to launch with reliable hosting and integrations.",
    features: [
      "Vercel deployment & CI/CD",
      "Firebase authentication & database",
      "Version control with Git",
      "Third-party API integrations",
    ],
    image:
      "https://i.ytimg.com/vi/7WrU5KQRw2o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA0JgOnaQbzeVlKoc_CWWeVH-3t5A",
    tags: ["Firebase", "Vercel", "Git", "APIs"],
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-black text-white px-6 md:px-36 py-36">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[12vw] md:text-9xl font-anton font-bold uppercase tracking-wide mb-20 text-gray-200"
      >
        What can I do for you
      </motion.h2>

      {/* Services */}
      <div className="space-y-1">
        {services.map((service) => (
          <ServiceRow
            key={service.id}
            service={service}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
    </section>
  );
}
