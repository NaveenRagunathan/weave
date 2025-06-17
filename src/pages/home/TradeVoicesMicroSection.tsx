import React, { useState } from "react";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "It used to take 3 days and a broker. Now it takes 10 minutes and no phone calls.",
    author: "Sarah, African textile importer - Dubai",
  },
  {
    text: "We saved $23,000 in FX fees in Q1 alone.",
    author: "Nana, Timber Exporter – Ghana",
  },
  {
    text: "USDC helps us close African deals without bank lag.",
    author: "Li Ming, Logistics Director – Shenzhen",
  },
];

export default function TradeVoicesMicroSection() {
  const [active, setActive] = useState(0);

  // Simple auto-advance carousel
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-8 px-2 flex justify-center bg-pearl-white">
      <div className="max-w-2xl w-full mx-auto rounded-2xl bg-white border border-imperial-gold-200 shadow-[0_2px_18px_0_rgba(212,175,55,0.08)] px-6 py-8 flex flex-col items-center relative">
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-pearl-white border border-imperial-gold-200 rounded-full p-2 shadow-md">
          <Quote className="w-7 h-7 text-silk-crimson-400" />
        </div>
        <div className="min-h-[80px] flex flex-col items-center justify-center text-center">
          <p className="text-lg sm:text-xl font-semibold text-ink-black mb-3 italic transition-all duration-300">
            “{quotes[active].text}”
          </p>
          <span className="block text-sm text-imperial-gold-500 font-medium">
            — {quotes[active].author}
          </span>
        </div>
        <div className="flex gap-2 mt-5">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-200 ${
                idx === active
                  ? "bg-silk-crimson-400 border-silk-crimson-400"
                  : "bg-imperial-gold-100 border-imperial-gold-200"
              }`}
              onClick={() => setActive(idx)}
              aria-label={`Show quote ${idx + 1}`}
            />
          ))}
        </div>
        <div className="mt-6 text-xs uppercase tracking-widest text-silk-crimson-400 font-bold flex items-center gap-2">
          <span className="text-xl">🗣️</span> REAL VOICES FROM THE TRADE FRONTLINES
        </div>
      </div>
    </section>
  );
}
