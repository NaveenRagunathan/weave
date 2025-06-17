import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Network, CircleDollarSign, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Open a Corridor",
    description: "Choose your route: China → Nigeria, Brazil, and beyond.",
    icon: Network,
  },
  {
    title: "Fund in USDC",
    description: "Instantly backed, instantly auditable. No delay, no doubts.",
    icon: CircleDollarSign,
  },
  {
    title: "Send & Settle",
    description: "Funds delivered in hours. Local currency hits instantly.",
    icon: CheckCircle2,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-gradient-to-b from-ink-black via-ink-black to-imperial-gold/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-base font-semibold leading-7 text-imperial-gold-300">How Weave Works</h2>
          <p className="font-serif mt-2 text-4xl font-bold tracking-tight text-pearl-white sm:text-5xl">
            No middlemen. No permission.<br />
            Just capital, flowing.
          </p>
        </div>
        <div className="relative mt-20">
          <div
            className="absolute left-1/2 top-4 -ml-px h-[calc(100%-2rem)] w-px bg-pearl-white/10 md:hidden"
            aria-hidden="true"
          />
          <div className="hidden md:block absolute top-1/2 left-0 -mt-px w-full h-px bg-pearl-white/10" aria-hidden="true" />
          <motion.div 
            className="relative flex flex-col md:flex-row justify-between items-start gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex-1 text-center flex flex-col items-center"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white/5 border border-white/10 rounded-full">
                  <step.icon className="w-8 h-8 text-imperial-gold-300" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-pearl-white">{step.title}</h3>
                <p className="mt-2 text-base text-pearl-white/70">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-ink-black bg-imperial-gold-300 hover:bg-imperial-gold-400 shadow-lg shadow-imperial-gold-500/20 transition-all duration-300 transform hover:scale-105"
          >
            Open Your First Corridor
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
