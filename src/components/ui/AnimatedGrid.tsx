import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 z-0">
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]"
        animate={{
          maskImage: [
            'radial-gradient(circle at 50% 50%, transparent 0%, black 10%)',
            'radial-gradient(circle at 50% 50%, transparent 80%, black 100%)',
          ],
          maskSize: ['200% 200%', '100% 100%'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
    </div>
  );
};

export default AnimatedGrid;
