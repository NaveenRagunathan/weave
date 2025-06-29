import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Handshake, BarChart2 } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ChinaAfricaTrade = () => {
    const { ref, controls, animation } = useScrollAnimation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const stats = [
        {
            icon: <Globe className="w-8 h-8 text-blue-600" />,
            title: "100% Tariff-Free",
            description: "53 African nations now have tariff-free export access to China.",
        },
        {
            icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
            title: "$170B in Exports",
            description: "Africa exported goods worth $170B to China in 2023.",
        },
        {
            icon: <Handshake className="w-8 h-8 text-blue-600" />,
            title: "15 Years Strong",
            description: "China has been Africa's largest trading partner for 15 years.",
        },
    ];

    return (
        <section className="bg-white py-20 px-4">
            <motion.div 
                {...animation}
                className="max-w-6xl mx-auto"
            >
                <div className="text-center mb-16">
                    <motion.h2 
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
                    >
                        Rewriting Centuries of Economic Imbalance
                    </motion.h2>
                    <motion.p 
                        variants={itemVariants}
                        className="text-xl text-blue-800 max-w-3xl mx-auto"
                    >
                        While the world focuses on conflict, China has quietly signed one of the most ambitious trade pacts of the century.
                    </motion.p>
                </div>

                <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className="grid md:grid-cols-3 gap-8 mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-blue-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow"
                        >
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                {stat.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-blue-900 mb-3">{stat.title}</h3>
                            <p className="text-blue-800">{stat.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    variants={itemVariants}
                    className="bg-blue-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <p className="text-xl md:text-2xl leading-relaxed mb-6">
                            "China is doubling down on resource partnerships, infrastructure deals, and non-military influence, shifting from geopolitics to economics—building roads, rail, ports, and power plants, all underpinned by trade."
                        </p>
                        <div className="flex items-center">
                            <a 
                                href="https://www.bbc.com/news/articles/czdy6qdln4jo" 
                                className="inline-flex items-center text-blue-200 hover:text-white font-medium group"
                            >
                                Learn more about China-Africa trade
                                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                    <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-800 rounded-full opacity-20"></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ChinaAfricaTrade;
