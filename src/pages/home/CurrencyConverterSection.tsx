import React, { useState } from "react";
import { motion } from "framer-motion";
import CurrencyConverterWidget from "../../components/ui/CurrencyConverterWidget";
import SavingsCalculator from "../../components/ui/SavingsCalculator";

const CurrencyConverterSection = () => {
  const [sendAmount, setSendAmount] = useState(1000);

  return (
    <motion.section
      className="w-full flex flex-col justify-center items-center py-24 px-4 bg-gradient-to-b from-ink-black via-ink-black to-brand-blue/30 border-t border-off-white/10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="w-full max-w-6xl text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-brand-blue to-cool-gray bg-clip-text text-transparent">
          Instantly convert & move money globally
        </h2>
        <div className="flex flex-col items-center w-full">
          <div className="w-full max-w-4xl mb-12 px-4 sm:px-8">
            <CurrencyConverterWidget sendAmount={sendAmount} onSendAmountChange={setSendAmount} />
          </div>
          <div className="w-full max-w-3xl">
            <SavingsCalculator amount={sendAmount} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CurrencyConverterSection;
