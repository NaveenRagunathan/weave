
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const comparisonData = [
  { feature: 'Transfer Speed', legacy: '3–5 Days', weave: '< 24 Hours' },
  { feature: 'FX Losses', legacy: '6–15%', weave: '0–1% (USDC)' },
  { feature: 'Corridor Coverage', legacy: 'Western focus', weave: 'China–Global South' },
  { feature: 'Compliance Burden', legacy: 'High, fragmented', weave: 'Seamless, embedded' },
  { feature: 'Trust Networks', legacy: 'None', weave: 'Embedded in diaspora, embassies, trade bodies' },
];

const AdvantageSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gray-900 text-pearl-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            While Stripe moves money, <br className="hidden md:block" /> WEAVE <span className="weave-gradient-text">moves mountains</span>.
          </h2>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full bg-ink-black/50 border border-gray-700 rounded-xl shadow-2xl">
            <div className="grid grid-cols-3 p-4 font-semibold text-jade-flow-400 border-b border-gray-700">
              <div>Feature</div>
              <div className="text-center">Legacy Banking</div>
              <div className="text-center">WEAVE</div>
            </div>
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 p-4 items-center ${index < comparisonData.length - 1 ? 'border-b border-gray-800' : ''} ${index % 2 === 0 ? 'bg-gray-800/20' : ''}`}
              >
                <div className="font-medium text-pearl-white">{item.feature}</div>
                <div className="text-center text-silk-crimson-400">{item.legacy}</div>
                <div className="text-center text-jade-flow-300 font-semibold">{item.weave}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-jade-flow-500 text-jade-flow-400 hover:bg-jade-flow-500 hover:text-white px-6 py-3 text-md font-semibold rounded-full transition-all duration-300 group"
          >
            Compare for Yourself
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
