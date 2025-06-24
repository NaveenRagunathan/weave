import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, BadgePercent } from "lucide-react";
import { gradients } from '@/lib/gradients';

const FinalRallySection = () => (
    <section className="relative py-20 px-4 bg-gradient-to-b from-off-white via-brand-blue-50 to-brand-blue-100 overflow-hidden">
    {/* Wave background effects */}
    <div className="absolute inset-0 overflow-hidden">
      {/* First wave */}
      <svg className="absolute bottom-0 left-0 w-full h-32 text-brand-blue-400/10" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          className="animate-wave"
          style={{ animationDuration: '10s' }}
        />
      </svg>
      
      {/* Second wave */}
      <svg className="absolute bottom-0 left-0 w-full h-40 text-brand-blue-400/10" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          className="animate-wave"
          style={{ animationDuration: '15s', animationDelay: '-5s' }}
        />
      </svg>
      
      {/* Third wave */}
      <svg className="absolute bottom-0 left-0 w-full h-48 text-brand-blue/10" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          className="animate-wave"
          style={{ animationDuration: '20s', animationDelay: '-10s' }}
        />
      </svg>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6">

      {/* Persuasive Tagline */}
      <div className="text-center mb-16 animate-reveal-text" style={{ animationDelay: '1.3s', animationFillMode: 'both' }}>
        <p className="text-3xl sm:text-4xl font-bold tracking-wide text-ink-black">
          No borders. No delays. No FX leakage.
        </p>
        <p className="mt-3 text-5xl sm:text-6xl font-extrabold tracking-tighter">
          <span className="font-serif italic text-brand-blue-400">Just WEAVE.</span>
        </p>
      </div>

      {/* Premium CTA buttons with sophisticated styling */}
      <div className="flex flex-col sm:flex-row gap-y-4 gap-x-6 justify-center items-center animate-reveal-text" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
        {/* Main call-to-action buttons */}
        <Button
          size="lg"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-blue hover:bg-brand-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <span className="relative z-10 flex items-center gap-3">
            Open Your Free WEAVE Account
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          className="group relative border-2 border-brand-blue text-brand-blue bg-white hover:bg-brand-blue/10 px-12 py-5 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-105 backdrop-blur-sm"
        >
          <span className="flex items-center gap-3">
            <Users className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Talk to a Real Human
          </span>
        </Button>
      </div>
    </div>

    {/* Premium bottom glow effect */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-36 bg-gradient-to-t from-brand-blue-100/40 via-brand-blue-50/30 to-transparent blur-3xl" />
  </section>
);

export default FinalRallySection;
