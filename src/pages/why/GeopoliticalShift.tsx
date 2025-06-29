import { motion } from 'framer-motion';
import { Landmark, ShieldCheck, Ship } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Section2_GeopoliticalShift = () => {
    const { ref, controls, animation } = useScrollAnimation();

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
            icon: <Ship className="w-12 h-12 text-blue-600" />,
            text: 'China has held top trading position with Africa for 15 years (>$170B exports in 2023)',
        },
        {
            icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
            text: '100% tariff-free access for 53 African nations',
        },
        {
            icon: <Landmark className="w-12 h-12 text-blue-600" />,
            text: 'Builds rail, roads, ports, megafactories',
        },
    ];

    return (
        <section className="bg-white py-24 px-4 text-blue-900">
            <motion.div 
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={animation.variants}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">
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
                                className="flex items-center space-x-6 p-6 bg-white border border-blue-200 text-blue-900 rounded-xl shadow-md"
                            >
                                <div className="flex-shrink-0">
                                    {stat.icon}
                                </div>
                                <p className="text-lg text-blue-800 font-medium">
                                    {stat.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div 
                        variants={quoteVariants}
                        className="mt-12 md:mt-0 bg-blue-50 rounded-xl p-8 text-2xl font-semibold text-blue-900 shadow-md border-l-8 border-blue-400"
                    >
                        <span className="block text-blue-700 mb-2">“While the West wages war,</span>
                        <span className="block bg-blue-100 px-2 py-1 rounded text-blue-800">China builds infrastructure”</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Section2_GeopoliticalShift;
