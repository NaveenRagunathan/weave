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
    <section className="py-32 px-4 bg-pearl-white flex items-center justify-center min-h-[80vh]">
      <div className="relative max-w-2xl w-full mx-auto rounded-3xl bg-white border border-imperial-gold-200 shadow-[0_8px_48px_0_rgba(212,175,55,0.08)] p-10 flex flex-col items-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-ink-black mb-2 tracking-tight font-serif">
          We built WEAVE for the ones who move capital and make the world go round.
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-imperial-gold-500 to-silk-crimson-400 rounded-full mb-8" />
        {/* Audiences */}
        <ul className="w-full space-y-5 mb-10">
          <li className="flex items-center gap-4 text-lg font-semibold text-ink-black">
            <span className="text-2xl">🇨🇳</span>
            <span>Chinese exporters selling to Africa & LatAm</span>
          </li>
          <li className="flex items-center gap-4 text-lg font-semibold text-ink-black">
            <span className="text-2xl">🌍</span>
            <span>Diaspora entrepreneurs sending capital home</span>
          </li>
          <li className="flex items-center gap-4 text-lg font-semibold text-ink-black">
            <span className="text-2xl">📦</span>
            <span>African traders importing from Asia</span>
          </li>
          <li className="flex items-center gap-4 text-lg font-semibold text-ink-black">
            <span className="text-2xl">🏗️</span>
            <span>Megaproject developers moving 6-figures fast</span>
          </li>
        </ul>
        {/* Microcopy */}
        <div className="text-center mb-8">
          <span className="block text-lg font-semibold text-silk-crimson-400">
            If you’re wiring money, clearing FX, or closing cross-border deals — WEAVE was built for you.
          </span>
        </div>
        {/* CTA */}
        <Button
          size="lg"
          className="border-2 border-silk-crimson-400 text-silk-crimson-400 bg-white hover:bg-imperial-gold-100 hover:text-silk-crimson-500 font-bold px-10 py-5 rounded-full shadow-md transition-all"
        >
          Open your Weave Account Today
        </Button>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
