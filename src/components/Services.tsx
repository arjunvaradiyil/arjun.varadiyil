'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  gradient: string;
  category: string;
  color: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Full Stack Development",
    description: "Complete web application development from frontend to backend with modern technologies.",
    icon: "💻",
    gradient: "from-blue-600 to-purple-600",
    category: "Development",
    color: "blue",
    features: [
      "React.js & Next.js Development",
      "Node.js & Express.js Backend",
      "MongoDB & Database Design",
      "RESTful API Development",
      "Responsive Web Design",
      "Performance Optimization"
    ]
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Creating stunning user interfaces with modern frontend technologies and frameworks.",
    icon: "🎨",
    gradient: "from-pink-500 to-rose-500",
    category: "UI/UX",
    color: "pink",
    features: [
      "React.js & TypeScript",
      "Next.js 13+ with App Router",
      "Tailwind CSS & Styled Components",
      "Responsive Design",
      "Component Architecture",
      "State Management"
    ]
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Building robust, scalable server-side applications and APIs.",
    icon: "⚙️",
    gradient: "from-green-500 to-emerald-500",
    category: "Backend",
    color: "green",
    features: [
      "Node.js & Express.js",
      "MongoDB & Database Design",
      "RESTful & GraphQL APIs",
      "Authentication & Authorization",
      "File Upload & Processing",
      "Performance Optimization"
    ]
  },
  {
    id: 4,
    title: "CMS Development",
    description: "Custom content management systems and headless CMS solutions.",
    icon: "📝",
    gradient: "from-orange-500 to-red-500",
    category: "CMS",
    color: "orange",
    features: [
      "Payload CMS Development",
      "Custom Admin Panels",
      "Content Modeling",
      "API Integration",
      "Multi-language Support",
      "SEO Optimization"
    ]
  },
  {
    id: 5,
    title: "API Development",
    description: "Designing and implementing robust APIs for web and mobile applications.",
    icon: "🔌",
    gradient: "from-indigo-500 to-blue-500",
    category: "API",
    color: "indigo",
    features: [
      "RESTful API Design",
      "GraphQL Development",
      "Authentication & Security",
      "Rate Limiting",
      "API Documentation",
      "Testing & Validation"
    ]
  },
  {
    id: 6,
    title: "Database Design",
    description: "Designing efficient database schemas and optimizing data storage solutions.",
    icon: "🗄️",
    gradient: "from-teal-500 to-cyan-500",
    category: "Database",
    color: "teal",
    features: [
      "MongoDB Schema Design",
      "SQL Database Design",
      "Data Modeling",
      "Query Optimization",
      "Data Migration",
      "Backup & Recovery"
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" ref={sectionRef} className="relative py-24 sm:py-32 bg-gray-900/50 backdrop-blur-sm overflow-hidden border-y border-slate-800/50 scroll-mt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div
            variants={cardVariants}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-400/10 border border-amber-400/20 text-amber-400 text-sm font-medium mb-8"
          >
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse"></div>
            Services
          </motion.div>
          
          <motion.h2 
            variants={cardVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8"
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Development
            </span>
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              {" "}Services
            </span>
          </motion.h2>
          
          <motion.p 
            variants={cardVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive web development solutions tailored to your needs. From concept to deployment, 
            I deliver high-quality, scalable applications that drive results.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => handleServiceClick(service)}
              className="group cursor-pointer"
            >
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/15">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  
                  {/* Category */}
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features Preview */}
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-sm text-gray-400">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-amber-400 font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                  
                  {/* CTA */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className={`inline-flex items-center text-sm font-medium text-amber-400 group-hover:text-amber-300 transition-colors duration-300`}>
                      Learn More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-white/10 shadow-2xl"
            >
              {/* Header */}
              <div className="sticky top-0 p-8 pb-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-3xl border-b border-white/10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedService.gradient} bg-opacity-20 flex items-center justify-center`}>
                      <span className="text-3xl">{selectedService.icon}</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          {selectedService.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {selectedService.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedService.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  >
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-6">
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <span className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 mr-3"></span>
                    Key Features
                  </h4>
                  <div className="grid gap-4">
                    {selectedService.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedService.gradient}`}></div>
                        <span className="text-gray-200 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-6 border-t border-white/10"
                >
                  <button className="w-full bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Get Started
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 