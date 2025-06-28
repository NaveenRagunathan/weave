import { motion } from 'framer-motion';
import { Landmark, ShieldCheck, Ship } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Section2_GeopoliticalShift = () => {
    const animation = useScrollAnimation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    const quoteVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    const stats = [
        {
            icon: <Ship className="w-12 h-12 text-white" />,
            text: 'China has held top trading position with Africa for 15 years (>$170B exports in 2023)',
        },
        {
            icon: <ShieldCheck className="w-12 h-12 text-white" />,
            text: '100% tariff-free access for 53 African nations',
        },
        {
            icon: <Landmark className="w-12 h-12 text-white" />,
            text: 'Builds rail, roads, ports, megafactories',
        },
    ];

    return (
        <section className="bg-[#F5F5DC] py-24 px-4">
            <motion.div 
                ref={animation.ref}
                initial="hidden"
                animate={animation.animate}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center text-[#333] mb-16">
                    This Isn't Just Strategy. It's a Power Shift.
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        variants={containerVariants}
                        className="space-y-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div 
                                key={index}
                                variants={cardVariants}
                                className="flex items-center space-x-6 p-6 bg-[#0a09f1] rounded-xl shadow-lg"
                            >
                                <div className="flex-shrink-0">
                                    {stat.icon}
                                </div>
                                <p className="text-lg text-white font-medium">
                                    {stat.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div variants={quoteVariants}>
                        <blockquote className="text-4xl md:text-5xl font-serif text-right text-[#333] leading-tight">
                            “While the West wages war, <span className="bg-yellow-300/80 px-2">China builds infrastructure</span>”
                        </blockquote>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Section2_GeopoliticalShift;
