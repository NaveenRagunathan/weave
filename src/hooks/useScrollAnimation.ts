import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const animation = {
        ref,
        variants: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
        },
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        transition: { duration: 0.5 }
    };

    return animation;
};
