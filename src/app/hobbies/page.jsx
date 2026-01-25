'use client';

import React from "react";
import HeroImage from "../../components/HeroImage";

export default function HobbiesPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <p className="text-cyan-400 text-2xl md:text-[32px] bebas-neue-regular uppercase leading-tight mb-4">
            ARJUN VARADIYIL
          </p>
          <h1 className="bebas-neue-regular text-gray-300 text-6xl md:text-[120px] font-bold leading-none tracking-tight">
            software
          </h1>
        </div>

        <div className="flex-shrink-0">
          <HeroImage />
        </div>

        <div className="flex-1 text-center md:text-right">
          <h1 className="text-gray-300 text-6xl md:text-[120px] bebas-neue-regular uppercase font-bold leading-none tracking-tight">
            developer
          </h1>
          <div className="max-w-md ml-auto">
            <p className="text-gray-300 text-lg font-light leading-relaxed">
              I'm a US-based digital designer and Framer developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
