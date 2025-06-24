import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Globe, Zap, MessageSquare } from 'lucide-react';

const stats = [
    { name: 'Verified Businesses', stat: '24,000+', icon: Users },
    { name: 'Corridors Live', stat: '12', icon: Globe },
    { name: 'Uptime', stat: '99.9%', icon: Zap },
    { name: 'Human Support', stat: 'Always On', icon: MessageSquare },
];

const SocialProofSection = () => {
    return (
        <section className="bg-gradient-to-b from-white to-brand-blue-50 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-brand-blue via-blue-500 to-indigo-600 bg-clip-text text-transparent">THE NETWORK GETS SMARTER WITH YOU</h2>
                    <p className="mt-4 text-md font-medium leading-8 text-cool-black uppercase tracking-wider">Every user strengthens the grid.</p>
                </div>
                <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-8">
                    {stats.map((item) => (
                        <div key={item.name} className="text-center bg-white p-8 rounded-2xl shadow-glow-blue transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-glow-blue-md">
                            <item.icon className="mx-auto h-10 w-10 text-brand-blue" aria-hidden="true" />
                            <p className="mt-4 text-3xl font-bold tracking-tight text-ink-black sm:text-4xl">{item.stat}</p>
                            <p className="mt-2 text-base leading-7 text-ink-black/80">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <Button
                        size="lg"
                        className="border-2 border-brand-blue text-brand-blue bg-transparent hover:bg-brand-blue hover:text-white font-bold px-14 py-6 rounded-full text-xl shadow-lg transition-all"
                    >
                        Join the Network
                    </Button>
                </motion.div>
        </section>
        
    );
};

export default SocialProofSection;
