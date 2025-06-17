import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface SavingsCalculatorProps {
  amount: number;
}

const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ amount }) => {
  const parsedAmount = useMemo(() => amount || 0, [amount]);

  const weaveFee = parsedAmount * 0.003;
  const otherFee = parsedAmount * 0.012;
  const savings = otherFee - weaveFee;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <motion.div 
      className="bg-black/20 border border-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-lg h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h3 className="text-2xl font-bold text-pearl-white mb-2">Your Weave Savings</h3>
      <p className="text-pearl-white/70 mb-6">Based on the amount you're sending.</p>

      <div className="space-y-4 flex-grow">
        <div className="flex justify-between items-center bg-black/30 p-3 rounded-lg">
          <span className="text-pearl-white/80">Weave Fee (0.3%)</span>
          <span className="font-semibold text-pearl-white">{formatCurrency(weaveFee)}</span>
        </div>
        <div className="flex justify-between items-center bg-black/30 p-3 rounded-lg">
          <span className="text-pearl-white/80">Typical Bank Fee (est. 1.2%)</span>
          <span className="font-semibold text-pearl-white line-through">{formatCurrency(otherFee)}</span>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-imperial-gold-300/20 text-center">
        <p className="text-lg text-pearl-white">You save</p>
        <p className="text-4xl font-bold text-imperial-gold-300 my-2 drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]">
          {formatCurrency(savings)}
        </p>
        <p className="text-pearl-white/70">by choosing Weave.</p>
      </div>
    </motion.div>
  );
};

export default SavingsCalculator;
