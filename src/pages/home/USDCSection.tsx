import React from "react";
import { motion } from "framer-motion";
import { gradients } from '@/lib/gradients';
import { Button } from "@/components/ui/button";
import { DollarSign, FileText, Globe, Zap, ArrowRight } from 'lucide-react';
import WeaveLogo from '@/components/ui/WeaveLogo';

const features = [
  { icon: DollarSign, text: "1:1 backed with U.S. dollars" },
  { icon: FileText, text: "Monthly audits" },
  { icon: Globe, text: "Accepted across continents" },
  { icon: Zap, text: "Final settlements, not rollbacks" },
];

export default function WeaveUSDCSection() {
  return (
        <section className="relative bg-gradient-to-b from-off-white via-brand-blue-50 to-brand-blue-100 text-ink-black py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="font-semibold text-lg text-brand-blue tracking-wider uppercase">
            Instant Capital Movement, Built on USDC
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-ink-black">
             The Digital Dollar: <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-500 via-brand-blue-400 to-brand-blue-700 animate-gradient-x">Fast. Stable. Regulated.</span>
             <br />
             Built for <span className="text-brand-blue font-extrabold underline decoration-brand-blue/30 underline-offset-4">Global Trade</span>.
           </h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-ink-black/80">
            <WeaveLogo /> runs on USDC — a regulated, audit-backed stablecoin that clears fast, settles instantly, and protects your value.
          </p>
        </div>

        {/* Content Layout */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="relative flex justify-center items-center h-full">
            <div className="relative w-72 h-72 flex items-center justify-center">
              <div className="absolute inset-0 bg-brand-blue/10 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-brand-blue/10 rounded-full animate-pulse [animation-delay:0.5s]"></div>
              <div className="relative bg-white p-2 rounded-full shadow-2xl">
                <img 
                  src="/image.png" 
                  alt="Global Payment Network" 
                  className="w-40 h-40 object-contain"
                />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform hover:scale-105 transition-transform duration-300">
                <span className="inline-block bg-white/90 px-4 py-2 rounded-full text-lg font-extrabold bg-gradient-to-r from-brand-blue to-cool-gray bg-clip-text text-transparent shadow-lg">
                  Guangzhou
                </span>
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 transform md:-left-6 hover:scale-105 transition-transform duration-300">
                <span className="inline-block bg-white/90 px-4 py-2 rounded-full text-lg font-extrabold bg-gradient-to-r from-cool-gray to-brand-blue bg-clip-text text-transparent shadow-lg">
                  Lagos
                </span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform hover:scale-105 transition-transform duration-300">
                <span className="inline-block bg-white/90 px-4 py-2 rounded-full text-lg font-extrabold bg-gradient-to-r from-brand-blue to-cool-gray bg-clip-text text-transparent shadow-lg">
                  Bogotá
                </span>
              </div>
            </div>
          </div>

          {/* Features Side */}
          <div className="flex flex-col gap-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink-black">{feature.text}</h3>
                  <p className="mt-1 text-base text-ink-black/70">Built for reliability and trust in global transactions.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Button size="lg" className="group bg-brand-blue text-off-white hover:bg-brand-blue/90 rounded-full px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
            Learn Why USDC Works for Real Trade
            <ArrowRight className="ml-3 w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
