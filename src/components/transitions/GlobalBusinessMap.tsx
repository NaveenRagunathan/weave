import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import FlowLineSystem from './FlowLineSystem';

// Placeholder SVGs for each district (replace with Lottie or custom SVGs as needed)
const DistrictSVGs: Record<string, JSX.Element> = {
  'china-africa': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="18" width="24" height="8" rx="2" fill="#DC143C"/><rect x="12" y="14" width="16" height="4" rx="1.5" fill="#D4AF37"/><rect x="16" y="10" width="8" height="4" rx="1.5" fill="#00A86B"/></svg>
  ),
  'diaspora': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="12" fill="#D4AF37"/><circle cx="20" cy="20" r="6" fill="#DC143C"/><rect x="18" y="10" width="4" height="8" rx="2" fill="#00A86B"/></svg>
  ),
  'megaprojects': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="12" y="20" width="16" height="10" rx="2" fill="#00A86B"/><rect x="16" y="12" width="8" height="8" rx="2" fill="#D4AF37"/><rect x="18" y="8" width="4" height="4" rx="2" fill="#DC143C"/></svg>
  ),
  'fintech': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="10" y="18" width="20" height="12" rx="3" fill="#D4AF37"/><rect x="16" y="12" width="8" height="6" rx="2" fill="#00A86B"/></svg>
  ),
  'markets': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="12" y="22" width="16" height="8" rx="2" fill="#DC143C"/><rect x="14" y="16" width="12" height="6" rx="2" fill="#D4AF37"/></svg>
  ),
};

interface BusinessDistrict {
  id: string;
  title: string;
  description: string;
  svg: JSX.Element;
  coordinates: { x: number; y: number };
  color: string;
  connections: string[];
}

const businessDistricts: BusinessDistrict[] = [
  {
    id: 'china-africa',
    title: 'China-Africa Trade Corridor',
    description: '🇨🇳 Chinese exporters entering Africa & LatAm',
    svg: DistrictSVGs['china-africa'],
    coordinates: { x: 75, y: 40 },
    color: '#DC143C',
    connections: ['diaspora', 'megaprojects']
  },
  {
    id: 'diaspora',
    title: 'Global Diaspora Networks',
    description: '🔗 Diaspora entrepreneurs bridging family, trade & capital',
    svg: DistrictSVGs['diaspora'],
    coordinates: { x: 45, y: 35 },
    color: '#D4AF37',
    connections: ['china-africa', 'fintech']
  },
  {
    id: 'megaprojects',
    title: 'Megaproject Command Centers',
    description: '🏗️ Governments financing megaprojects',
    svg: DistrictSVGs['megaprojects'],
    coordinates: { x: 55, y: 55 },
    color: '#00A86B',
    connections: ['china-africa', 'fintech']
  },
  {
    id: 'fintech',
    title: 'Fintech Innovation Hubs',
    description: '🏛️ Global South fintechs & banks expanding regional liquidity',
    svg: DistrictSVGs['fintech'],
    coordinates: { x: 65, y: 60 },
    color: '#D4AF37',
    connections: ['diaspora', 'markets']
  },
  {
    id: 'markets',
    title: 'Market Trading Floors',
    description: '📊 Informal market traders scaling volume fast',
    svg: DistrictSVGs['markets'],
    coordinates: { x: 50, y: 65 },
    color: '#DC143C',
    connections: ['fintech', 'megaprojects']
  }
];

const GlobalBusinessMap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const [openDistrict, setOpenDistrict] = useState<BusinessDistrict | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const districtVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Ticker animation for subheader
  const tickerText = 'If moving Products, you already know you need to move Capital Fast   •   ';

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[600px] bg-gradient-to-br from-ink-black via-imperial-gold-500/5 to-silk-crimson-400/5 rounded-2xl overflow-hidden"
    >
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <img 
          src="/world-map.svg" 
          alt="World Map" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Atmospheric Particles */}
      <FlowLineSystem pattern="smooth" intensity="high" color="mixed" />

      {/* Ticker */}
      <div className="absolute top-0 left-0 w-full overflow-hidden h-10 z-20 pointer-events-none">
        <div className="whitespace-nowrap animate-premium-scroll text-lg font-semibold text-imperial-gold-400/90 tracking-wide" style={{animationDuration: '28s'}}>
          {tickerText.repeat(8)}
        </div>
      </div>

      {/* Business Districts & Lines */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative w-full h-full"
      >
        {/* Connection Lines */}
        {businessDistricts.map(district => (
          district.connections.map(targetId => {
            const target = businessDistricts.find(d => d.id === targetId);
            if (!target) return null;
            return (
              <svg
                key={`${district.id}-${targetId}`}
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: hoveredDistrict === district.id || hoveredDistrict === targetId ? 0.7 : 0.25 
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  x1={`${district.coordinates.x}%`}
                  y1={`${district.coordinates.y}%`}
                  x2={`${target.coordinates.x}%`}
                  y2={`${target.coordinates.y}%`}
                  stroke={district.color}
                  strokeWidth="3"
                  strokeDasharray="6,6"
                  style={{ filter: hoveredDistrict === district.id || hoveredDistrict === targetId ? `drop-shadow(0 0 8px ${district.color}99)` : 'none' }}
                />
              </svg>
            );
          })
        ))}

        {/* District Nodes */}
        {businessDistricts.map(district => (
          <motion.div
            key={district.id}
            variants={districtVariants}
            className="absolute"
            style={{
              left: `${district.coordinates.x}%`,
              top: `${district.coordinates.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <Dialog open={openDistrict?.id === district.id} onOpenChange={open => setOpenDistrict(open ? district : null)}>
              <DialogTrigger asChild>
                <div
                  className={`group cursor-pointer`}
                  onMouseEnter={() => setHoveredDistrict(district.id)}
                  onMouseLeave={() => setHoveredDistrict(null)}
                  onClick={() => setOpenDistrict(district)}
                >
                  <motion.div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl border-2 border-imperial-gold-400/40 backdrop-blur-md"
                    style={{
                      background: `linear-gradient(135deg, ${district.color} 0%, #18181c 100%)`,
                      boxShadow: hoveredDistrict === district.id ? `0 0 32px 8px ${district.color}55` : `0 0 16px 2px ${district.color}33`,
                      filter: hoveredDistrict === district.id ? `drop-shadow(0 0 16px ${district.color}99)` : 'none',
                      transition: 'box-shadow 0.3s, filter 0.3s',
                    }}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {district.svg}
                  </motion.div>
                  {/* Glassmorphic Info Card on Hover (desktop) */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredDistrict === district.id ? 1 : 0,
                      y: hoveredDistrict === district.id ? 0 : 10
                    }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-6 w-72 p-5 rounded-2xl bg-ink-black/70 border border-imperial-gold-400/30 shadow-2xl backdrop-blur-lg pointer-events-none z-30"
                    style={{
                      boxShadow: `0 8px 32px 0 ${district.color}33`,
                      borderColor: district.color
                    }}
                  >
                    <h3 className="text-lg font-bold text-imperial-gold-400 mb-1">{district.title}</h3>
                    <p className="text-pearl-white/90 text-sm">{district.description}</p>
                  </motion.div>
                </div>
              </DialogTrigger>
              {/* Modal for District Details */}
              <DialogContent className="backdrop-blur-lg bg-ink-black/80 border border-imperial-gold-400/30 rounded-2xl shadow-2xl p-8 flex flex-col items-center animate-fade-in max-w-md">
                <div className="mb-4">{district.svg}</div>
                <h3 className="text-2xl font-bold text-imperial-gold-400 mb-2">{district.title}</h3>
                <p className="text-pearl-white/90 text-center mb-4">{district.description}</p>
                <div className="mt-2 text-imperial-gold-400 font-mono text-lg">[Premium vignette, stat, or animation here]</div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </motion.div>

      {/* Header Text */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center z-30">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-black bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(220,20,60,0.09)]"
        >
          Who This Is For
        </motion.h2>
      </div>
    </div>
  );
};

export default GlobalBusinessMap; 