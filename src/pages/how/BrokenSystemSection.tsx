import React from 'react';
import { motion } from 'framer-motion';

const BrokenSystemSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const bulletPoints = [
    'You wait 5 days for a payment that should take 5 seconds.',
    'You lose 9% of your revenue to FX slippage and remittance fees.',
    'You do deals on Telegram because banks don\'t understand your trade routes.',
    'Your entire supply chain freezes… because a wire transfer failed to clear.',
  ];

  return (
    <div className="relative bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-grid-gray-900 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side: The Pain */}
        <motion.div
          className="grayscale"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300">
            The Global South Is Rising — But Chained to a Broken System
          </h2>
          <motion.div
            className="mt-8 space-y-6 text-gray-400 text-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants}>You’ve seen it firsthand.</motion.p>
            <motion.p variants={itemVariants}>You’re exporting more, building more, trading more.</motion.p>
            <motion.p variants={itemVariants}>Your markets are alive with ambition — from Nairobi to São Paulo, Accra to Jakarta.</motion.p>
            <motion.p variants={itemVariants} className="font-bold text-gray-300">But your money still moves like it’s 1993 — slow, expensive, full of friction.</motion.p>
          </motion.div>
        </motion.div>

        {/* Right Side: Bullet Points with Animation */}
        <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg blur-xl opacity-20"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg space-y-6">
                {bulletPoints.map((point, index) => (
                <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: -5, transition: { duration: 0.2 } }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <span className="text-cyan-400 font-bold text-2xl mt-1">•</span>
                    <p className="text-gray-300">{point}</p>
                </motion.div>
                ))}
            </div>
        </div>
      </div>
      <motion.p 
        className="text-center text-xl text-gray-400 mt-16 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        You’re building the future. <span className="text-white font-semibold">But you’re moving money through the past.</span>
      </motion.p>
    </div>
  );
};

export default BrokenSystemSection;
