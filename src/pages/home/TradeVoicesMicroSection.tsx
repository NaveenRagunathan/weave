import { Quote } from "lucide-react";
import React from "react";

import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";

const quotes = [
  {
    name: "Sarah",
    country: "Dubai",
    text: "It used to take 3 days and a broker. Now it takes 10 minutes and no phone calls.",
    accent: "en-GB"
  },
  {
    name: "Nana",
    country: "Ghana",
    text: "We saved $23,000 in FX fees in Q1 alone.",
    accent: "en-GB"
  },
  {
    name: "Li Ming",
    country: "Shenzhen",
    text: "USDC helps us close African deals without bank lag.",
    accent: "en-US"
  }
];

const CustomsStampTrail = () => {
    const [speaking, setSpeaking] = React.useState(false);

  const speak = ({ text, lang }) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const cancel = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <div className="w-full py-10 bg-yellow-50">
      <h2 className="text-xl font-bold text-center mb-4 text-red-800">Customs Stamp Trail</h2>
      <div className="flex flex-col items-center gap-8">
        {quotes.map((q, i) => (
          <motion.div
            key={i}
            className="w-11/12 max-w-md bg-white border-4 border-dashed border-red-400 px-6 py-4 rounded-xl relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3 }}
          >
                        <p className="text-md italic text-red-800">“{q.text}”</p>
                        <p className="text-sm mt-2 font-semibold text-red-800">— {q.name}, {q.country}</p>
            <div className="absolute -top-4 -right-4 bg-red-200 text-red-800 px-2 py-1 text-xs font-bold rounded-full rotate-[-10deg]">
              {q.country.toUpperCase()}
            </div>
            <button
              onClick={() =>
                speaking ? cancel() : speak({ text: q.text, lang: q.accent })
              }
              className="absolute bottom-3 right-3 text-gray-500 hover:text-red-600"
            >
              <Volume2 />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CustomsStampTrail;