import React, { useEffect, useState, useRef } from "react";
import ProfileImg from '../assets/images/profilepic.png'

export default function AboutPreview() {
  const [scrollY, setScrollY] = useState(0);
  const cardRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Tailwind's `lg` breakpoint
    };

    // Initial check and event listeners
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const parallaxOffset = () => {
    if (!cardRef.current) return 0;

    const sectionTop = cardRef.current.closest('section').offsetTop;
    const scrollProgress = Math.max(0, scrollY - sectionTop);

    if (isLargeScreen) {
      const offset = Math.max(0, 200 - scrollProgress * 1.5); 
      return `translateY(${offset}px)`;
    } else {
      const offset = Math.max(0, 100 - scrollProgress * 1.2);
      return `translateX(${offset}px)`;
    }
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex items-center gap-2 bebas-neue-regular text-white/80 text-sm font-medium">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Creativity Into Code
            </div>
            {/* Main Heading */}
            <h1 className="bebas-neue-regular text-6xl lg:text-9xl font-bold text-white leading-tight">
              BUILDING
              <br />
              <span className="text-[#34ebd2] ">IDEAS INTO </span>
              <br />
              REALITY
            </h1>
            {/* Description */}
            <p className="oswald-sub text-xl text-white/80 leading-relaxed max-w-lg">
              I’m a web developer who loves creating clean, responsive, and dynamic websites.  
                With a strong foundation in React, Next.js, and the MERN stack, I focus on building  
                user-friendly interfaces and efficient solutions. From designing to deployment,  
                I enjoy bringing ideas to life with detail and precision.
            </p>
            {/* CTA Button */}
            <div className="pt-4">
              <a href="/about">
                <button 
                    className="inline-flex items-center gap-2 border border-gray-400 bg-black oswald-sub text-[#34ebd2] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-400 transition-colors duration-200"
                >
                    Know More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button> 
              </a>
            </div>
          </div>
          {/* Right Side - Profile Card with Parallax */}
          <div className="relative flex justify-center lg:justify-end">
            <div 
              ref={cardRef}
              className="relative transition-transform duration-75 ease-out"
              style={{
                transform: parallaxOffset()
              }}
            >
              {/* Profile Card */}
              <div className="bg-white p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 max-w-sm">
                {/* Profile Image */}
                <div className="mb-4 overflow-hidden">
                  <img 
                    src={ProfileImg}
                    alt="Me" 
                    className="w-full h-96 object-cover"
                  />
                </div>             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}