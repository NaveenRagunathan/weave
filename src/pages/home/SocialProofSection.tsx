import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Globe, Zap, Users, MessageSquare, Landmark, ArrowRight } from 'lucide-react';

const stats = [
  { name: 'Volume Moved', stat: '$1.2B+', icon: DollarSign },
  { name: 'Corridors Live', stat: '12', icon: Globe },
  { name: 'Uptime', stat: '99.9%', icon: Zap },
  { name: 'Verified Accounts', stat: '24,000+', icon: Users },
  { name: 'Human Support', stat: 'Real-time', icon: MessageSquare },
  { name: 'Partner Institutions', stat: '60+', icon: Landmark },
];

const SocialProofSection = () => {
  return (
    <div className="bg-ink-black pt-24 pb-16 sm:pt-32 sm:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-pearl-white sm:text-4xl">
              The Network Gets Smarter With You
            </h2>
            <p className="mt-4 text-lg leading-8 text-pearl-white/70">
            Over 24,000 verified business accounts already move capital through WEAVE. We are reshaping cross-border finance — corridor by corridor.
            </p>
          </motion.div>
          <motion.dl 
            className="mt-16 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ 
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
          >
            {stats.map((stat) => (
              <motion.div 
                key={stat.name}
                className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
                variants={{ 
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                  hidden: { opacity: 0, y: 30 }
                }}
              >
                <dt className="text-sm font-semibold leading-6 text-pearl-white/70 flex items-center gap-2">
                  <stat.icon className="h-5 w-5 text-imperial-gold-300" aria-hidden="true" />
                  {stat.name}
                </dt>
                <dd className="mt-2 text-3xl font-bold tracking-tight text-pearl-white">
                  {stat.stat}
                </dd>
              </motion.div>
            ))}
          </motion.dl>

          {/* Logo Wall and CTA */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex justify-center gap-x-8 gap-y-4 flex-wrap">
              {[
                'Chamber of Commerce China–Africa',
                'Shenzhen Port Tech',
                'Nairobi Corridor Fund',
                'Diaspora Capital Alliance',
                'African Fintech Circle'
              ].map((name) => (
                <p key={name} className="text-sm text-pearl-white/70 font-medium tracking-wider transition-colors hover:text-pearl-white">
                  {name}
                </p>
              ))}
            </div>
            <div className="mt-12">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-ink-black bg-imperial-gold-300 hover:bg-imperial-gold-400 shadow-lg shadow-imperial-gold-500/20 transition-all duration-300 transform hover:scale-105">
                Join the Winning Network
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;
