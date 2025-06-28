import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Section6_CTA = () => {
    const animation = useScrollAnimation();

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } },
    };

    return (
        <div className="bg-[#0a09f1] text-white text-center py-28 px-4 overflow-hidden">
            <motion.div
                ref={animation.ref}
                variants={{ 
                    hidden: {}, 
                    visible: { transition: { staggerChildren: 0.2 } } 
                }}
                initial="hidden"
                animate={animation.animate}
                className="max-w-4xl mx-auto"
            >
                <motion.h2 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto mb-4"
                >
                    Weave completes what China has started.
                </motion.h2>
                <motion.p 
                    variants={itemVariants}
                    className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
                >
                    It makes all this capital movement not just possible — but instant, trustable, and sovereign.
                </motion.p>
                <motion.button 
                    variants={buttonVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        scale: [1, 1.03, 1],
                        transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="bg-[#F4C542] text-[#0a09f1] font-bold py-4 px-8 rounded-lg text-lg shadow-lg"
                >
                    Open Your Free WEAVE Account Today
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Section6_CTA;
