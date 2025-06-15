
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex flex-col justify-center items-center bg-ink-black overflow-hidden px-4 pt-12 pb-14">
    {/* BG Video Placeholder */}
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <img
        src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1920&q=80"
        alt="Silk Road drama"
        className="w-full h-full object-cover brightness-[.55] contrast-125 blur-[0.5px]"
        draggable={false}
      />
      {/* Subtle overlay for mood */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-black/90 via-ink-black/70 to-silk-crimson-600/30" />
    </div>
    <div className="relative max-w-4xl mx-auto text-center z-10">
      <h1
        className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight font-black mb-6"
        style={{ color: "#DC143C", fontFamily: "'Harnet Serif', serif" }}
      >
        Borders were made for maps,<br className="hidden md:inline" />
        <span className="text-pearl-white block">
          Not your money.
        </span>
        <span
          className="block text-imperial-gold-500 font-serif mt-2"
          style={{ fontFamily: "'Harnet Serif', serif" }}
        >
          Trade freely, Build boldly,<br />
          Move capital and <span className="text-silk-crimson-400">Increase your Wealth</span> easily like you want to.
        </span>
      </h1>
      <p className="text-lg sm:text-2xl text-pearl-white/90 font-sans font-medium mb-8 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
        WEAVE gives traders, builders, entrepreneurs and government institutions in the Global South the power to send, receive, and protect capital — <span className="text-silk-crimson-400 font-semibold">without banks, borders, or permission.</span>
        <br />
        <span className="text-imperial-gold-500 font-bold">
          No delays. No losses. No gatekeepers. Just pure financial velocity.
        </span>
      </p>
      <div className="flex flex-col gap-4 sm:flex-row justify-center items-center mb-8">
        <Button
          size="lg"
          className="bg-silk-crimson-400 hover:bg-silk-crimson-600 text-pearl-white font-bold tracking-wide px-8 py-4 rounded-full shadow-lg transition"
        >
          Open your Free WEAVE Account &rarr;
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-imperial-gold-500 text-imperial-gold-500 hover:bg-imperial-gold-500 hover:text-ink-black px-8 py-4 rounded-full font-semibold transition"
        >
          Watch How It Works
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
