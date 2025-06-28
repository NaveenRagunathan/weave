import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Section4_DigitalSilkRoad = () => {
    const animation = useScrollAnimation();

    const useCases = [
        { emoji: "☕", text: "Rwandan coffee co-op exports to China — paid in minutes" },
        { emoji: "🇹🇷", text: "Chinese logistics firm pays Brazil instantly" },
        { emoji: "🇬🇭", text: "Ghana megaproject gets funded in minutes" },
    ];

    const features = [
        { emoji: "🚀", title: "Instant stablecoin payments" },
        { emoji: "💸", title: "FX slippage elimination" },
        { emoji: "🤝", title: "Trust via compliance/liquidity" },
    ];

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
    
    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="bg-white py-20 px-4 overflow-hidden">
            <motion.div
                ref={animation.ref}
                variants={containerVariants}
                initial="hidden"
                animate={animation.animate}
                className="max-w-5xl mx-auto text-center"
            >
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">Weave: The Digital Silk Road</motion.h2>
                <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-3xl mx-auto mb-12">
                    Weave is the modern Silk Road — not made of camel caravans or dusty maps, but of stablecoins, blockchain rails, and instant FX-proof capital flows.
                </motion.p>

                <motion.div 
                    variants={containerVariants}
                    className="grid md:grid-cols-3 gap-8 mb-16"
                >
                    {useCases.map((useCase, index) => (
                        <motion.div 
                            key={index} 
                            variants={cardVariants}
                            className="bg-gray-100 p-6 rounded-lg shadow-md text-left"
                        >
                            <span className="text-4xl">{useCase.emoji}</span>
                            <p className="mt-4 text-lg font-medium">{useCase.text}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    className="grid md:grid-cols-3 gap-8"
                >
                     {features.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants} className="text-center">
                            <span className="text-4xl">{feature.emoji}</span>
                            <h3 className="text-xl font-semibold mt-2">{feature.title}</h3>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Section4_DigitalSilkRoad;
