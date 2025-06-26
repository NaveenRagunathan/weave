import { useEffect, useMemo } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface LiveCounterProps {
  value: number;
  currency: string;
  userLocale: string;
}

const LiveCounter: React.FC<LiveCounterProps> = ({ value, currency, userLocale }) => {
  const formatted = useMemo(
    () =>
      new Intl.NumberFormat(userLocale, {
        style: 'currency',
        currency,
        maximumFractionDigits: 0,
      }).format(value),
    [value, currency, userLocale]
  );

  return (
    <motion.div
      className="top-20 mt-[45px]"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-4 px-6 py-3 bg-blue-600 backdrop-blur-lg rounded-full shadow-2xl border border-white/30">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <div className="text-white font-medium text-lg tracking-wide flex items-baseline gap-2">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-300">Live:</span>
          <motion.span className="font-mono text-xl font-bold">{formatted}</motion.span>
          <span className="text-white/70 text-base">sent and counting...</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LiveCounter;
