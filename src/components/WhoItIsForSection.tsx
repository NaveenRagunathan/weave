
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const userSegments = [
  { emoji: '🇨🇳', text: 'Chinese exporters entering Africa & LatAm' },
  { emoji: '🌍', text: 'Diaspora entrepreneurs bridging family, trade & capital' },
  { emoji: '🏗️', text: 'Governments financing megaprojects' },
  { emoji: '🏦', text: 'Global South fintechs & banks expanding regional liquidity' },
  { emoji: '📦', text: 'Informal market traders scaling volume fast' },
];

const WhoItIsForSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-ink-black text-pearl-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            If you're building beyond borders, <br className="hidden md:block" /> you're already late without WEAVE.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-pearl-white/80">
              The WEAVE network powers those who make things happen:
            </p>
            <ul className="space-y-4">
              {userSegments.map((segment, index) => (
                <li key={index} className="flex items-start text-lg">
                  <span className="text-2xl mr-3 shrink-0">{segment.emoji}</span>
                  <span className="text-pearl-white/80">{segment.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-silk-crimson-400/20 p-8 rounded-xl aspect-video flex items-center justify-center border border-imperial-gold-500/40">
            <p className="text-imperial-gold-500 text-center">Visual Slider Placeholder: <br />Illustrating user segments in action.</p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-silk-crimson-600 hover:bg-silk-crimson-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-silk-crimson-500/30 transition-all duration-300 group"
          >
            Open your Weave Account Today
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 text-imperial-gold-500" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhoItIsForSection;
