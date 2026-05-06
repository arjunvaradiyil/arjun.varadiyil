'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ServiceNeuGrid from './ServiceNeuGrid';
import { NEU } from '../ui/neuTheme';
import WordStaggerReveal from '../ui/WordStaggerReveal';
import { getHomeServicesFromProjects } from '../../lib/cms';

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    let active = true;
    getHomeServicesFromProjects().then((items) => {
      if (active) setServices(items);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className={`${NEU.section} ${NEU.sectionPad} snap-start`}>
      <div className='relative z-10 mx-auto max-w-7xl'>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className={`text-center ${NEU.eyebrow}`}
        >
          Passion led us here
        </motion.p>
        <WordStaggerReveal
          as='h2'
          text='What I can do for you'
          className={`mt-3 text-center ${NEU.display} text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-tight`}
          viewport={{ once: true, amount: 0.4 }}
        />

        <div className='mt-14 md:mt-16'>
          {services.length > 0 ? (
            <ServiceNeuGrid skills={services} />
          ) : (
            <div className={`${NEU.cardStatic} p-6 text-center`}>
              <p className={NEU.bodyText}>No services found in CMS project entries.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
