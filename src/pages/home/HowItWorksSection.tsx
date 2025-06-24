import React from 'react';
import { gradients } from '@/lib/gradients';

import { ArrowRight, Network, CircleDollarSign, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Create your free WEAVE account",
    description: "",
    icon: Network,
  },
  {
    title: "Deposit CN¥ or your local currency",
    description: "",
    icon: CircleDollarSign,
  },
  {
    title: "Send USDC to your recipient — anywhere, instantly.",
    description: "",
    icon: CheckCircle2,
  },
];

export default function HowItWorksSection() {
  return (
        <section className="bg-gradient-to-b from-off-white via-brand-blue-50 to-brand-blue-100 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl uppercase bg-gradient-to-r from-brand-blue via-blue-500 to-indigo-600 bg-clip-text text-transparent">HOW WEAVE WORKS</h2>
          <div className="grid gap-10 md:grid-cols-3 mt-20">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="flex flex-col items-center bg-white border border-brand-blue/30 rounded-2xl px-6 py-10 shadow-glow-blue transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-glow-blue-md"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/10 border border-brand-blue mb-4">
                  <step.icon className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold text-ink-black mb-2 text-center">{step.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-brand-blue hover:bg-brand-blue-600 transition-all duration-200 shadow-lg"
            >
              Explore Payment Routes
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
