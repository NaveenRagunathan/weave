
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CloserSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-ink-black via-ink-black/95 to-ink-black text-pearl-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8">
          The next 100 years will be built on capital that flows with <span className="bg-gradient-to-r from-silk-crimson-400 via-imperial-gold-500 to-silk-crimson-600 bg-clip-text text-transparent">freedom, not permission</span>.
        </h2>
        <div className="space-y-8 text-xl text-pearl-white/90 leading-relaxed mb-12">
          <p className="text-2xl font-semibold text-pearl-white">
            WEAVE is not a product. It's a promise.
          </p>
          <p>That money should move where the people move.</p>
          <p>That opportunity should flow like capital — borderless, instant, and real.</p>
          <p className="mt-6 text-imperial-gold-400 font-semibold">
            The new economy won't be built on payment apps.
            <br />
            It will be built on trust, infrastructure, and scale.
          </p>
          <p>WEAVE is the engine beneath the next world economy.</p>
          <p>We don't just move money — <span className="font-bold text-silk-crimson-400">we move momentum.</span></p>
          <p className="mt-6 text-2xl text-pearl-white font-bold">
            This is post-colonial infrastructure. Sovereign. Liquid. Alive.
          </p>
          <p className="text-2xl">Join the movement. Build your future. Start today.</p>
        </div>
        <div className="space-y-6 sm:space-y-0 sm:flex sm:flex-col sm:items-center sm:space-x-0">
            <Button
                size="lg"
                className="w-full sm:w-auto bg-silk-crimson-600 hover:bg-silk-crimson-700 text-white px-10 py-5 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group mb-4 sm:mb-0 border border-imperial-gold-400/20"
            >
                Join the Weave Movement Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 text-imperial-gold-400" />
            </Button>
            <Button
                variant="link"
                size="lg"
                className="text-imperial-gold-400 hover:text-imperial-gold-300 px-8 py-4 text-lg font-semibold group mt-4"
            >
                Get a Personal Onboarding Advisor
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 text-imperial-gold-400" />
            </Button>
        </div>
      </div>
    </section>
  );
};

export default CloserSection;
