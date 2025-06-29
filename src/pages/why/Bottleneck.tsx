import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Section3_Bottleneck = () => {
    const { ref, controls, animation } = useScrollAnimation();

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
        },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const lineVariants = {
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: { duration: 0.5, delay: 1 } },
    };

    const sentenceVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delay: 1.5 } },
    };

    const words = ["Money.", "Can't.", "Move", "Fast", "and", "Easily."];

    return (
        <div className="bg-brand-blue-600 py-28 px-4 text-center overflow-hidden text-white">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white">
                    {words.map((word, index) => (
                        <motion.span key={index} variants={wordVariants} className="inline-black mr-3">
                            {word}
                        </motion.span>
                    ))}
                </h2>
                <motion.div 
                    className="h-1 w-32 bg-white/80 mx-auto my-8"
                    variants={lineVariants}
                />
                <motion.p 
                    className="text-2xl md:text-3xl font-medium text-white/90"
                    variants={sentenceVariants}
                >
                    And when money can't move, trade stalls.
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Section3_Bottleneck;
