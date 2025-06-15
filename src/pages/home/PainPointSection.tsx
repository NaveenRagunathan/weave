import React, { useState, useRef, useEffect } from 'react';
import { Clock, MessageSquare, DollarSign, UserCheck } from 'lucide-react';
import ScrollReveal from '@/components/interactions/ScrollReveal';
import { motion } from 'framer-motion';

const PainPointSection = () => {
  const [activeScene, setActiveScene] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scenes = [
    {
      title: "The Time Squeeze",
      description: "Lost 5 days waiting for payment clearance while market rates shifted.",
      icon: Clock,
      visual: "clock-animation",
      color: "text-amber-500",
      details: [
        "Transaction progress frozen at 20%",
        "Market rate volatility",
        "Currency symbols floating"
      ]
    },
    {
      title: "Supplier Disconnection",
      description: "Transaction failure led to supplier communication breakdown.",
      icon: MessageSquare,
      visual: "ghost-animation",
      color: "text-rose-500",
      details: [
        "Communication breakdown",
        "Transaction failure",
        "Supplier unavailability"
      ]
    },
    {
      title: "FX Erosion",
      description: "9% FX loss on a 6-figure deal due to delayed settlement.",
      icon: DollarSign,
      visual: "fx-animation",
      color: "text-emerald-500",
      details: [
        "FX rate volatility",
        "Financial impact",
        "Lost opportunity cost"
      ]
    },
    {
      title: "Trust Deficit",
      description: "Compelled to entrust critical transactions to unfamiliar intermediaries.",
      icon: UserCheck,
      visual: "trust-animation",
      color: "text-indigo-500",
      details: [
        "Limited visibility",
        "Risk of intermediation",
        "Transaction security concerns"
      ]
    }
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    const sceneWidth = container.clientWidth;
    const newScene = Math.round(scrollPosition / sceneWidth);
    setActiveScene(newScene);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d] overflow-hidden relative"
    >
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/50 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%231a1a1a'/%3E%3C/svg%3E')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal delay={200} direction="up">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-pearl-white leading-tight mb-8">
              The Hidden Costs
              <br />
              <span className="text-gradient bg-gradient-to-r from-red-500 to-red-500">of Traditional Payments</span>
            </h2>
            <div className="h-1.5 w-48 mx-auto bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Premium Horizontal Pain Points Row */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-center md:items-stretch relative z-10">
          {scenes.map((scene, index) => {
            const Icon = scene.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-1 min-w-[260px] max-w-sm mx-auto md:mx-0 bg-gradient-to-br from-[#1a1a1a] to-[#23272b] rounded-2xl p-8 border border-gray-800/60 shadow-xl flex flex-col justify-between relative"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-500 shadow-lg w-14 h-14">
                    <Icon className="w-7 h-7 text-white" />
                  </span>
                </div>
                {/* Title & Description */}
                <h3 className="text-xl font-bold text-pearl-white mb-2 text-center">{scene.title}</h3>
                <p className="text-base text-gray-300 mb-6 text-center">{scene.description}</p>
                {/* Details */}
                <div className="flex flex-col gap-3 mt-auto">
                  {scene.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-gradient-to-br from-red-500 to-red-500 inline-block" />
                      <span className="text-sm text-gray-400">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {scenes.map((_, index) => (
            <motion.button
              key={index}
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeScene === index 
                  ? 'bg-gradient-to-r from-red-500 to-red-500 shadow-lg' 
                  : 'bg-gray-600'
              }`}
              onClick={() => {
                if (timelineRef.current) {
                  timelineRef.current.scrollTo({
                    top: (100 / (scenes.length - 1)) * index,
                    behavior: 'smooth'
                  });
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;
