import React from "react";
import { motion } from "framer-motion";
import { gradients } from '@/lib/gradients';
import { Button } from "@/components/ui/button";
import { DollarSign, FileText, Globe, Zap, ArrowRight } from 'lucide-react';

const features = [
  { icon: DollarSign, text: "1:1 backed with U.S. dollars" },
  { icon: FileText, text: "Monthly audits" },
  { icon: Globe, text: "Accepted across continents" },
  { icon: Zap, text: "Final settlements, not rollbacks" },
];

export default function WeaveUSDCSection() {
  return (
        <section className={`relative ${gradients[1]} text-ink-black py-24 sm:py-32`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="font-semibold text-lg text-silk-crimson-400 tracking-wider uppercase">
            Instant Capital Movement, Built on USDC
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-ink-black">
            The Digital Dollar: <span className="bg-clip-text text-transparent bg-gradient-to-r from-silk-crimson-400 to-imperial-gold-500">Fast. Stable. Regulated.</span>
            <br />
            Built for Global Trade.
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-ink-black/80">
            WEAVE runs on USDC — a regulated, audit-backed stablecoin that clears fast, settles instantly, and protects your value.
          </p>
        </div>

        {/* Content Layout */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="relative flex justify-center items-center h-full">
            <div className="relative w-72 h-72 flex items-center justify-center">
              <div className="absolute inset-0 bg-imperial-gold-500/10 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-silk-crimson-400/10 rounded-full animate-pulse [animation-delay:0.5s]"></div>
              <div className="relative bg-white p-2 rounded-full shadow-2xl">
                <img 
                  src="/image.png" 
                  alt="Global Payment Network" 
                  className="w-40 h-40 object-contain"
                />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform hover:scale-105 transition-transform duration-300">
                <span className="inline-block bg-white/90 px-4 py-2 rounded-full text-lg font-extrabold bg-gradient-to-r from-silk-crimson-500 to-imperial-gold-500 bg-clip-text text-transparent shadow-lg">
                  Guangzhou
                </span>
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 transform md:-left-6 hover:scale-105 transition-transform duration-300">
                <span className="inline-block bg-white/90 px-4 py-2 rounded-full text-lg font-extrabold bg-gradient-to-r from-imperial-gold-500 to-silk-crimson-500 bg-clip-text text-transparent shadow-lg">
                  Lagos
                </span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform hover:scale-105 transition-transform duration-300">
                <span className="inline-block bg-white/90 px-4 py-2 rounded-full text-lg font-extrabold bg-gradient-to-r from-silk-crimson-500 to-imperial-gold-500 bg-clip-text text-transparent shadow-lg">
                  Bogotá
                </span>
              </div>
            </div>
          </div>

          {/* Features Side */}
          <div className="flex flex-col gap-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-imperial-gold-500/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-imperial-gold-500" />
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
          <Button size="lg" className="group bg-imperial-gold-500 text-ink-black hover:bg-imperial-gold-600 rounded-full px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
            Learn Why USDC Works for Real Trade
            <ArrowRight className="ml-3 w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
