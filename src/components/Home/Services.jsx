'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceRow from './ServiceRow';
import { skills } from '../../data/skills';

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section className='text-white px-6 md:px-36 py-36'>
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='text-[12vw] md:text-9xl font-anton font-bold uppercase tracking-wide mb-20 text-gray-800 dark:text-gray-200'
      >
        What can I do for you
      </motion.h2>

      {/* Services */}
      <div className='space-y-1'>
        {skills.map((service) => (
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
