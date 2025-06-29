import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const projects = [
  {
    id: 'uganda',
    icon: '🛣️',
    title: 'Roads in Uganda',
    description: 'Building and funding new roads to connect cities and trade hubs',
    year: '2023',
    investment: '$1.2B',
    color: 'from-brand-blue-50 to-white',
    textColor: 'text-brand-blue-900',
    borderColor: 'border-brand-blue-100'
  },
  {
    id: 'kenya',
    icon: '🚆',
    title: 'Rail in Kenya',
    description: 'Modern railway linking Mombasa to Nairobi',
    year: '2022',
    investment: '$3.8B',
    color: 'from-white to-brand-blue-50',
    textColor: 'text-brand-blue-900',
    borderColor: 'border-brand-blue-100'
  },
  {
    id: 'tanzania',
    icon: '🛳️',
    title: 'Ports in Tanzania',
    description: 'Expanding ports to create a major East African shipping hub',
    year: '2023',
    investment: '$2.1B',
    color: 'from-brand-blue-50 to-white',
    textColor: 'text-brand-blue-900',
    borderColor: 'border-brand-blue-100'
  },
  {
    id: 'brazil',
    icon: '🏭',
    title: 'Megafactories in Brazil',
    description: 'Large-scale manufacturing for electronics and vehicles',
    year: '2024',
    investment: '$5.6B',
    color: 'from-white to-brand-blue-50',
    textColor: 'text-brand-blue-900',
    borderColor: 'border-brand-blue-100'
  },
  {
    id: 'nigeria',
    icon: '⚡',
    title: 'Power Stations in Nigeria',
    description: 'New power plants boosting national electricity supply',
    year: '2023',
    investment: '$4.3B',
    color: 'from-brand-blue-50 to-white',
    textColor: 'text-brand-blue-900',
    borderColor: 'border-brand-blue-100'
  },
  {
    id: 'jakarta',
    icon: '💾',
    title: 'Data Centers in Jakarta',
    description: 'Digital infrastructure for Southeast Asia',
    year: '2024',
    investment: '$1.9B',
    color: 'from-white to-brand-blue-50',
    textColor: 'text-brand-blue-900',
    borderColor: 'border-brand-blue-100'
  }
];

const Section4_DigitalSilkRoad = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showBottleneck, setShowBottleneck] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Set up intersection observers for each project
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveProject(index);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: '0px 0px -40% 0px'
      }
    );

    // Observe all project elements
    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToProject = (index: number) => {
    projectRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  const nextProject = () => {
    const nextIndex = (activeProject + 1) % projects.length;
    scrollToProject(nextIndex);
  };

  const prevProject = () => {
    const prevIndex = (activeProject - 1 + projects.length) % projects.length;
    scrollToProject(prevIndex);
  };

  const currentProject = projects[activeProject];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-off-white to-brand-blue-50 text-ink-black overflow-hidden py-20 px-4">
      {/* Headline */}
      <div className="container mx-auto text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-500 via-brand-blue-400 to-brand-blue-700 animate-gradient-x"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Digital Silk Road
        </motion.h2>
        <motion.p 
          className="text-xl text-ink-black/80 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          China's global digital infrastructure network is reshaping global trade and economic power.
        </motion.p>
      </div>

      {/* Bottleneck Section */}
      <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${showBottleneck ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute bottom-0 left-0 right-0 bg-white p-8 rounded-t-3xl shadow-2xl border-t border-brand-blue-100 transform transition-transform duration-300 ${showBottleneck ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-brand-blue-500 rounded-full mr-3"></div>
                  <h3 className="text-2xl font-bold text-brand-blue-900">The Digital Bottleneck</h3>
                </div>
                <p className="text-ink-black/80 max-w-3xl text-lg">
                  While digital infrastructure is expanding rapidly, cross-border payments and financial flows remain slow and expensive. 
                  Traditional banking systems can't keep up with the speed of modern digital trade and commerce.
                </p>
              </div>
              <button 
                onClick={() => setShowBottleneck(false)}
                className="ml-6 p-2 rounded-full hover:bg-brand-blue-50 text-brand-blue-700 transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-8 pt-6 border-t border-brand-blue-100">
              <div className="flex items-center justify-center space-x-4">
                <button 
                  onClick={() => setShowBottleneck(false)}
                  className="px-8 py-3 bg-gradient-to-r from-brand-blue-600 to-brand-blue-700 text-white font-medium rounded-lg shadow-md hover:from-brand-blue-700 hover:to-brand-blue-800 transition-all duration-300 hover:shadow-lg"
                >
                  Got it
                </button>
                <button 
                  onClick={() => setShowBottleneck(false)}
                  className="px-8 py-3 text-brand-blue-700 font-medium hover:bg-brand-blue-50 rounded-lg transition-all duration-300 border border-brand-blue-200"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vertical Timeline */}
      <div className="relative max-w-5xl mx-auto" ref={containerRef}>
        {/* Center line with scroll indicator */}
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-20">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToProject(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === activeProject ? 'bg-brand-blue-600 scale-125' : 'bg-brand-blue-300 hover:bg-brand-blue-400'
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
        
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-blue-200 via-brand-blue-400 to-brand-blue-200 transform -translate-x-1/2"></div>
        
        {/* Projects */}
        <div className="space-y-32 py-16">
          {projects.map((project, index) => {
            const isActive = index === activeProject;
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div 
                key={project.id}
                ref={el => projectRefs.current[index] = el}
                className={`relative flex items-center justify-between ${isLeft ? 'flex-row' : 'flex-row-reverse'} cursor-pointer`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.3,
                  y: isActive ? 0 : 50,
                  scale: isActive ? 1 : 0.9,
                  transition: { duration: 0.4 }
                }}
                whileHover={{ scale: isActive ? 1 : 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => scrollToProject(index)}
              >
                {/* Project Card */}
                <div className={`w-5/12 p-8 rounded-2xl bg-gradient-to-r ${project.color} shadow-md transform transition-all duration-300 ${isActive ? 'scale-105 border-2 border-brand-blue-300' : 'scale-95 border border-brand-blue-100'}`}>
                  <div className="text-5xl mb-6 text-brand-blue-500">{project.icon}</div>
                  <h3 className={`text-2xl font-bold mb-3 ${project.textColor}`}>{project.title}</h3>
                  <p className="text-ink-black/80 mb-6 text-lg">{project.description}</p>
                  <div className="flex justify-between items-center text-sm font-medium text-brand-blue-600">
                    <span>Investment: {project.investment}</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Year Marker */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl bg-brand-blue-600 shadow-lg border-4 border-white`}>
                  {project.year}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default Section4_DigitalSilkRoad;
