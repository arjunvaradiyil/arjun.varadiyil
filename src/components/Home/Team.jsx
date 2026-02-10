'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { teamData } from '../../data/teamData';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function Team() {
  return (
    <section
      id='team'
      className='w-full text-white px-6 md:px-16 py-24 overflow-hidden bg-gray-50 dark:bg-[#0a0a0a]'
    >
      <motion.div
        className='max-w-6xl mx-auto'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p
          variants={itemVariants}
          className='text-xs tracking-widest text-blue-600 dark:text-cyan-400 mb-2'
        >
          (MY TEAM)
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className='font-anton font-bold uppercase tracking-wide text-[36px] sm:text-[48px] md:text-[64px] leading-[0.95] text-gray-800 dark:text-gray-200 mb-4'
        >
          The people behind the work
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className='text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mb-16'
        >
          Collaborators, mentors, and folks who make it happen.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'
        >
          {teamData.map((member) => (
            <motion.article
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className='group'
            >
              <div className='rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 h-full transition-colors duration-200 group-hover:border-gray-300 dark:group-hover:border-gray-700'>
                <div className='aspect-square max-w-[140px] mx-auto mb-5 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800'>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={140}
                      height={140}
                      className='w-full h-full object-cover'
                    />
                  ) : (
                    <div className='w-full h-full flex items-center justify-center text-2xl font-anton text-gray-500 dark:text-gray-500'>
                      {getInitials(member.name)}
                    </div>
                  )}
                </div>
                <h3 className='font-anton font-bold uppercase tracking-wide text-gray-800 dark:text-gray-200 text-lg'>
                  {member.name}
                </h3>
                <p className='text-blue-600 dark:text-cyan-400 text-sm mt-1'>
                  {member.role}
                </p>
                {member.bio && (
                  <p className='text-gray-600 dark:text-gray-400 text-sm mt-3'>
                    {member.bio}
                  </p>
                )}
                {member.link && (
                  <a
                    href={member.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block mt-3 text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors'
                  >
                    Profile →
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
