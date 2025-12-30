import React from "react";
import  HeroImage  from "../components/HeroImage";

const Hobbies = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-800 text-2xl md:text-[32px] bebas-neue-regular uppercase leading-tight mb-4">
            Duncan Robert
          </p>
          <h1 className="bebas-neue-regular text-gray-800 text-6xl md:text-[120px] font-bold leading-none tracking-tight">
            digital
          </h1>
        </div>

        {/* Middle Image */}
        <div className="flex-shrink-0">
          <HeroImage />
        </div>

        {/* Right Side */}
        <div className="flex-1 text-center md:text-right">
          <h1 className="text-gray-800 text-6xl md:text-[120px] bebas-neue-regular uppercase font-bold leading-none tracking-tight">
            designer
          </h1>
          <div className="max-w-md ml-auto">
            <p className="text-gray-800 text-lg font-light leading-relaxed">
              I'm a US-based digital designer and Framer developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
