import React,  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Banner() {

   const designations = [
    'FRONTEND DEVELOPER',
    'BACKEND DEVELOPER',
    'WORDPRESS DEVELOPER',
    'UI/UX DESIGNER',
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === designations.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 300);
    }, 2500);
    
    return () => clearInterval(interval);
  }, [designations.length]);


  return (
    <div className="relative flex h-screen w-full text-white overflow-hidden">

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6 relative z-10 mt-16">

      {/* Profile splash image (only visible on <530px) */}
     <div className="splash-wrapper mb-6 mt-12">
        <img
          src="https://cdn.pixabay.com/photo/2024/01/16/22/25/ai-generated-8513200_1280.jpg"
          alt="menu visual"
          className="splash-image"
        />
      </div>


      {/* Heading */}
      <div className="bebas-neue-regular text-white/80 text-2xl sm:text-2xl md:text-3xl tracking-widest font-light uppercase mb-10">
        GOURINANDHANA E S
      </div>
      
      {/* Title */}
      <div className="text-white">
        
        {/* Animated Line */}
        <div className="flex items-center mt-2 sm:mt-4">
          <div className="relative overflow-hidden">
            <div 
              className={`bebas-neue-regular text-7xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none transition-all duration-300 ease-in-out ${
                isVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform -translate-y-4'
              }`}
            >
              {designations[currentIndex]}
            </div>
          </div>
        </div>
      </div>
      

      {/* button */}
      <div className="mt-32 flex justify-start">
        <button className="group relative">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-gray-500/40 hover:border-gray-400/70">
            <ChevronDown 
              className="w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 text-white/80 transition-all duration-1000 ease-in-out animate-bounce group-hover:text-white" 
            />
          </div>
        </button>
      </div>
    </div>

      {/* Background Image with dark overlay */}
      <div 
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://e0.pxfuel.com/wallpapers/627/591/desktop-wallpaper-better-start-of-a-future-technology-background-portfolio.jpg')`
        }}
      />
      <div className="absolute inset-0 -z-10 bg-black/70" /> 
    </div>
  );
}
