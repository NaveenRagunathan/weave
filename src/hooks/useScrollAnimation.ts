import { useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

export const useScrollAnimation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const animation = {
        ref,
        controls,
        variants: {
            hidden: { opacity: 0, y: 50 },
            visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5 }
            },
        },
        initial: "hidden",
        animate: controls
    };

    return { ref, controls, animation };
};
