'use client';

import React from 'react';
import Banner from '../components/Home/Banner';
import Contactform from '../components/Contactform';
import ServicesSection from '../components/Home/Services';
import WhyMe from '../components/Home/Whyme';
import AboutScrollText from '../components/Home/AboutScrollText';
import { useTheme } from '../components/ThemeProvider';

export default function HomePage() {
  const { theme } = useTheme();

  return (
    <div className='overflow-x-hidden'>
      <Banner />
      <AboutScrollText theme={theme} />
      <ServicesSection />   
      <WhyMe />   
      <Contactform />
    </div>
  );
}
