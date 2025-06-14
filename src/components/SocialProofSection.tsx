
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, CheckCircle, Users, Clock } from 'lucide-react'; // Placeholder icons

const stats = [
  { value: '$1.2B+', label: 'Volume Moved', icon: TrendingUp },
  { value: '12', label: 'Corridors Live', icon: Globe }, // Assuming Globe for corridors
  { value: '99.9%', label: 'Uptime', icon: CheckCircle },
  { value: '24/7', label: 'Human Support', icon: Users }, // Using Users for support
];

const logos = [ // Placeholder logos
  'Chamber of Commerce China–Africa',
  'Shenzhen Port Tech',
  'Nairobi Corridor Fund',
  'Diaspora Capital Alliance',
  'African Fintech Circle',
];

const SocialProofSection = () => {
  // TODO: Implement actual logo wall and potentially more dynamic stat display
  return (
    <section className="py-24 lg:py-32 bg-gray-900 text-pearl-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
            Every new account makes the network <span className="weave-gradient-text">smarter, faster, safer</span>.
          </h2>
          <p className="text-2xl text-gray-300">
            Every dollar accelerates the flow.
          </p>
        </div>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center leading-relaxed mb-16">
          Over 24,000 verified business accounts already move capital through WEAVE. We are reshaping cross-border finance — corridor by corridor.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-ink-black/50 p-6 rounded-xl border border-jade-flow-500/10">
                <Icon className="w-10 h-10 text-jade-flow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-pearl-white">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        <div className="mb-16">
          <h3 className="text-center text-lg font-semibold text-gray-400 uppercase tracking-wider mb-6">Partnered With 60+ Trade, Banking & Regulatory Bodies</h3>
          <div className="bg-ink-black/30 p-8 rounded-xl border border-gray-700/50">
            <p className="text-gray-500 text-center">Logos Wall Placeholder:</p>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
              {logos.map(logo => <span key={logo} className="text-gray-400 text-sm p-2 bg-gray-700 rounded">{logo}</span>)}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-jade-flow-600 hover:bg-jade-flow-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-jade-flow-500/30 transition-all duration-300 group"
          >
            Join the Winning Network
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
