import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import ServiceRow from './ServiceRow';

const services = [
  {
    id: "01",
    title: "Frontend",
    description:
      "Building modern, responsive, and high-performing websites tailored to your brand.",
    image:
      "https://m.media-amazon.com/images/I/61qbMx4oXJL.jpg",
    tags: ["UI Design", "React", "Tailwind", "Framer Motion"],
  },
  {
    id: "02",
    title: "Backend",
    description:
      "Crafting visual identities that feel clear, timeless, and true to your brand.",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f",
    tags: ["Logo Design", "Color System", "Typography", "Brand Direction"],
  },
  {
    id: "03",
    title: "Fullstack",
    description:
      "Creating content and visuals that help brands stand out and engage.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
    tags: ["Content", "Creatives", "Strategy"],
  },
  {
    id: "04",
    title: "Admin dashboards",
    description:
      "Creating content and visuals that help brands stand out and engage.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
    tags: ["Content", "Creatives", "Strategy"],
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
      <div className="space-y-10">
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
