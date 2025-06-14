
import React from 'react';
import { Shield, Banknote, Globe } from 'lucide-react'; // Using Banknote for Capital Safety, Globe for Networks

const trustPillars = [
  {
    icon: Shield,
    title: 'Regulatory-Grade Compliance',
    description: 'We meet or exceed local, international, and cross-border FX standards in every corridor we serve.',
  },
  {
    icon: Banknote,
    title: 'Multi-Layer Capital Safety',
    description: 'Tiered vaults. Partner banks. Failover protections. You’ll never wonder where your money is.',
  },
  {
    icon: Globe,
    title: 'Embedded Trust Networks',
    description: 'We partner with embassies, diaspora unions, commerce chambers, and local banks to build the bridges software alone can’t.',
  },
];

const TrustLayerSection = () => {
  // TODO: Implement animated "Trust Triangle" visual
  // For now, display pillars and a placeholder for the visual.
  return (
    <section className="py-24 lg:py-32 bg-ink-black text-pearl-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            No guesswork. No Drift. <br className="hidden md:block" /> Just <span className="weave-gradient-text">Control & Confidence</span> <br className="hidden md:block" /> you can build a nation on.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {trustPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="bg-gray-800/30 p-8 rounded-xl border border-jade-flow-500/20 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                   <div className="w-12 h-12 bg-jade-flow-500/10 rounded-lg flex items-center justify-center">
                     <Icon className="w-6 h-6 text-jade-flow-400" />
                   </div>
                </div>
                <h3 className="text-xl font-bold text-pearl-white mb-3">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-gray-800/30 p-8 rounded-xl aspect-video flex items-center justify-center border border-jade-flow-500/20">
            <p className="text-gray-500 text-center">Animated "Trust Triangle" Placeholder: <br />Linking Compliance ↔ Security ↔ Relationships.</p>
        </div>
      </div>
    </section>
  );
};

export default TrustLayerSection;
