import React from 'react';
import { gradients } from '@/lib/gradients';
import { Globe, Zap, Users, MessageSquare } from 'lucide-react';

const stats = [
  { name: 'Verified Businesses', stat: '24,000+', icon: Users },
  { name: 'Corridors Live', stat: '12', icon: Globe },
  { name: 'Uptime', stat: '99.9%', icon: Zap },
  { name: 'Human Support', stat: 'Always On', icon: MessageSquare },
];

const SocialProofSection = () => {
  return (
        <section className={`${gradients[3]} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-black font-serif mb-4">
            The Network Gets Smarter With You
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink-black/70 font-medium">
            Every user strengthens the grid.
          </p>
        </div>
        <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="flex flex-col items-center justify-center p-8 bg-white border border-imperial-gold-200 rounded-2xl shadow-[0_2px_12px_0_rgba(212,175,55,0.06)]"
            >
              <dt className="text-base font-semibold leading-6 text-ink-black flex items-center gap-2 mb-2">
                <stat.icon className="h-6 w-6 text-silk-crimson-400" aria-hidden="true" />
                {stat.name}
              </dt>
              <dd className="mt-1 text-3xl font-extrabold tracking-tight text-ink-black">
                {stat.stat}
              </dd>
            </div>
          ))}
        </dl>
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 border border-silk-crimson-400 text-base font-bold rounded-full text-silk-crimson-400 bg-white hover:bg-imperial-gold-100 hover:text-silk-crimson-500 transition-all duration-200 shadow-md"
          >
            Join the Network
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
export default SocialProofSection;
