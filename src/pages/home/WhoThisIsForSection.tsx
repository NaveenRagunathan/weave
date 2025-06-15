import React from "react";
import { Button } from "@/components/ui/button";
import { Ship, Link, Landmark, Banknote, BarChart2 } from "lucide-react";

const audiences = [
  {
    icon: <Ship className="w-7 h-7 text-silk-crimson-400" />, // Chinese exporters
    text: "Chinese exporters entering Africa & LatAm",
  },
  {
    icon: <Link className="w-7 h-7 text-imperial-gold-500" />, // Diaspora
    text: "Diaspora entrepreneurs bridging family, trade & capital",
  },
  {
    icon: <Landmark className="w-7 h-7 text-jade-flow-500" />, // Governments
    text: "Governments financing megaprojects",
  },
  {
    icon: <Banknote className="w-7 h-7 text-imperial-gold-500" />, // Fintechs
    text: "Global South fintechs & banks expanding regional liquidity",
  },
  {
    icon: <BarChart2 className="w-7 h-7 text-silk-crimson-400" />, // Market traders
    text: "Informal market traders scaling volume fast",
  },
];

const WhoThisIsForSection = () => {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-[#18181c] to-[#23232a] flex items-center justify-center min-h-[80vh]">
      <div className="relative max-w-2xl w-full mx-auto rounded-3xl bg-ink-black/70 border border-imperial-gold-400/30 shadow-2xl backdrop-blur-lg p-10 flex flex-col items-center"
        style={{ boxShadow: "0 8px 48px 0 #D4AF3740, 0 1.5px 0 0 #DC143C" }}>
        {/* Header */}
        <h2 className="text-4xl font-black text-center bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 bg-clip-text text-transparent mb-2 tracking-tight animate-reveal-text">
          Who This Is For
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-imperial-gold-500 to-silk-crimson-400 rounded-full mb-8 animate-underline-reveal" />
        {/* Audiences */}
        <ul className="w-full space-y-5 mb-10">
          {audiences.map((aud, i) => (
            <li key={i} className="flex items-center gap-4 text-lg font-medium text-pearl-white/90">
              <span>{aud.icon}</span>
              <span>{aud.text}</span>
            </li>
          ))}
        </ul>
        {/* Subheaders */}
        <div className="text-center mb-8">
          <span className="block text-lg font-semibold text-imperial-gold-400 mb-1 animate-fade-in">
            If moving Products, you already know you need to move Capital Fast
          </span>
          <span className="block text-base text-silk-crimson-400 animate-fade-in delay-200">
            And if you're building beyond borders, you're already late without WEAVE.
          </span>
        </div>
        {/* CTA */}
        <Button
          size="lg"
          className="bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500 hover:from-silk-crimson-600 hover:to-imperial-gold-600 text-pearl-white font-bold px-10 py-5 rounded-full shadow-xl transition"
        >
          Open your Weave Account Today
        </Button>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
