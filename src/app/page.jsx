'use client';

import React, { useEffect } from 'react';
import Banner from '../components/Home/Banner';
import Contactform from '../components/Contactform';
import ServicesSection from '../components/Home/Services';
import WhyMe from '../components/Home/Whyme';
import AboutScrollText from '../components/Home/AboutScrollText';
import { NEU } from '../components/ui/neuTheme';

export default function HomePage() {
  useEffect(() => {
    document.documentElement.classList.add('home-scroll-snap');
    return () => document.documentElement.classList.remove('home-scroll-snap');
  }, []);

  return (
    <div className={NEU.pageShell}>
      <Banner />
      <AboutScrollText />
      <ServicesSection />
      <WhyMe />
      <Contactform />
    </div>
  );
}
