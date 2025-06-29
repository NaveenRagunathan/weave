import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MoveRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Section5_Comparison = () => {
    const { ref, controls } = useScrollAnimation();

    const chinaMoves = [
        "Tariff-free access opens trade potential",
        "Infrastructure investments facilitate goods",
        "China cements soft power through commerce",
    ];

    const weaveRole = [
        "Weave moves money instantly",
        "Weave builds the financial infrastructure",
        "Weave enables soft power through capital flow",
    ];

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.2,
                delayChildren: 0.3
            } 
        },
    };

    const columnVariants: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.6,
                ease: "easeOut"
            } 
        },
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.4,
                ease: "easeOut"
            } 
        },
    };

    return (
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-off-white to-brand-blue-50">
            <div className="absolute inset-0 bg-grid-brand-blue-100/50 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="relative max-w-6xl mx-auto"
            >
                <motion.div variants={columnVariants} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue-100 text-brand-blue-700 text-sm font-medium mb-4">
                        The Future of Global Finance
                    </span>
                    <motion.h2 
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-600 via-brand-blue-500 to-brand-blue-700"
                    >
                        Why Weave Matters Now
                    </motion.h2>
                    <motion.p 
                        variants={itemVariants}
                        className="text-lg text-ink-black/80 max-w-2xl mx-auto"
                    >
                        In an era of shifting global dynamics, Weave provides the financial infrastructure for the next generation of commerce.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                    {/* China's Moves */}
                    <motion.div 
                        variants={columnVariants}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-brand-blue-100 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-1.5 h-8 bg-red-500 rounded-full mr-3"></div>
                            <h3 className="text-2xl font-bold text-ink-black">China's Moves</h3>
                        </div>
                        <motion.ul variants={containerVariants} className="space-y-4">
                            {chinaMoves.map((move, index) => (
                                <motion.li 
                                    key={index} 
                                    variants={itemVariants}
                                    className="flex items-start group"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mr-3 group-hover:bg-red-100 transition-colors">
                                            <MoveRight className="w-3.5 h-3.5 text-red-600" />
                                        </div>
                                    </div>
                                    <span className="text-ink-black/90 group-hover:text-ink-black transition-colors">{move}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Weave's Role */}
                    <motion.div 
                        variants={columnVariants}
                        className="bg-brand-blue-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue-500 rounded-full -mr-16 -mt-16 opacity-20"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-blue-400 rounded-full -ml-20 -mb-20 opacity-20"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                <div className="w-1.5 h-8 bg-white rounded-full mr-3"></div>
                                <h3 className="text-2xl font-bold text-white">Weave's Role</h3>
                            </div>
                            <motion.ul variants={containerVariants} className="space-y-4">
                                {weaveRole.map((role, index) => (
                                    <motion.li 
                                        key={index} 
                                        variants={itemVariants}
                                        className="flex items-start group"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                                            </div>
                                        </div>
                                        <span className="text-white/90 group-hover:text-white transition-colors">{role}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                            
                            <motion.div 
                                variants={itemVariants}
                                className="mt-8 pt-6 border-t border-white/10"
                            >
                                <button className="group flex items-center text-white text-sm font-medium hover:bg-white/10 px-4 py-2.5 rounded-lg transition-all">
                                    Learn more about Weave's solutions
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Section5_Comparison;
