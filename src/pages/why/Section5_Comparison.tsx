import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Section5_Comparison = () => {
    const animation = useScrollAnimation();

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

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    };

    const columnVariants = (fromLeft = true) => ({
        hidden: { opacity: 0, x: fromLeft ? -50 : 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    });

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <div className="bg-gray-100 py-20 px-4 overflow-hidden">
            <motion.div
                ref={animation.ref}
                variants={containerVariants}
                initial="hidden"
                animate={animation.animate}
                className="max-w-5xl mx-auto"
            >
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-12">Why Weave Matters Now</motion.h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div variants={columnVariants(true)} className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-6">China’s Moves</h3>
                        <motion.ul variants={containerVariants} className="space-y-4">
                            {chinaMoves.map((move, index) => (
                                <motion.li key={index} variants={itemVariants} className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
                                    <span>{move}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                    <motion.div variants={columnVariants(false)} className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-6">Weave’s Role</h3>
                        <motion.ul variants={containerVariants} className="space-y-4">
                            {weaveRole.map((role, index) => (
                                <motion.li key={index} variants={itemVariants} className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-[#0a09f1] flex-shrink-0" />
                                    <span>{role}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Section5_Comparison;
