
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-ink-black overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        {/* Swap the image below for your video in production */}
        <img
          src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1920&q=80"
          alt="WEAVE Silk Road background"
          className="w-full h-full object-cover brightness-[.45] contrast-125"
        />
        {/* Color overlay for drama */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink-black/90 via-ink-black/50 to-silk-crimson-400/30" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4 text-center">
        {/* Headline */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight font-black mb-6"
          style={{
            color: "#DC143C",
            fontFamily: "'Harnet Serif', serif"
          }}
        >
          Borders were made for maps, <br className="hidden md:inline" />
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

        {/* Subheadline */}
        <p className="text-lg sm:text-2xl text-pearl-white/90 font-sans font-medium mb-10 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
          WEAVE gives traders, builders, entrepreneurs and government institutions in the Global South the power to send, receive, and protect capital — <span className="text-silk-crimson-400 font-semibold">without banks, borders, or permission.</span>
          <br />
          <span className="text-imperial-gold-500 font-bold">
            No delays. No losses. No gatekeepers. Just pure financial velocity.
          </span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row justify-center items-center">
          <Button
            size="lg"
            className="bg-silk-crimson-400 hover:bg-silk-crimson-600 text-pearl-white font-bold tracking-wide px-8 py-4 rounded-full shadow-lg transition"
            onClick={() => console.log("Open your Free WEAVE Account")}
          >
            Open your Free WEAVE Account &rarr;
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-imperial-gold-500 text-imperial-gold-500 hover:bg-imperial-gold-500 hover:text-ink-black px-8 py-4 rounded-full font-semibold transition"
            onClick={() => console.log("Watch How It Works")}
          >
            Watch How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
