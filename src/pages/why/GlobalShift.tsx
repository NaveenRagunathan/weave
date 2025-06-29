import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Globe, { GlobeMethods } from 'react-globe.gl';

const Section1_GlobalShift = () => {
    // ...rest of the code remains unchanged
    // We'll wrap the section in a new gradient background

    const globeEl = useRef<GlobeMethods>();

    useEffect(() => {
        if (globeEl.current) {
            const globe = globeEl.current;
            globe.controls().autoRotate = true;
            globe.controls().autoRotateSpeed = 0.3;
            globe.controls().enableZoom = false;
        }
    }, []);

    // Major Global South cities/countries coordinates
    const globalSouthCities = [
        { name: 'São Paulo', lat: -23.5505, lng: -46.6333 }, // Brazil
        { name: 'Lagos', lat: 6.5244, lng: 3.3792 }, // Nigeria
        { name: 'Johannesburg', lat: -26.2041, lng: 28.0473 }, // South Africa
        { name: 'Jakarta', lat: -6.2088, lng: 106.8456 }, // Indonesia
        { name: 'Delhi', lat: 28.7041, lng: 77.1025 }, // India
        { name: 'Nairobi', lat: -1.2921, lng: 36.8219 }, // Kenya
        { name: 'Buenos Aires', lat: -34.6037, lng: -58.3816 }, // Argentina
        { name: 'Cairo', lat: 30.0444, lng: 31.2357 }, // Egypt
        { name: 'Manila', lat: 14.5995, lng: 120.9842 }, // Philippines
        { name: 'Mexico City', lat: 19.4326, lng: -99.1332 }, // Mexico
        { name: 'Bangkok', lat: 13.7563, lng: 100.5018 }, // Thailand
        { name: 'Istanbul', lat: 41.0082, lng: 28.9784 }, // Turkey
        { name: 'Lima', lat: -12.0464, lng: -77.0428 }, // Peru
        { name: 'Karachi', lat: 24.8607, lng: 67.0011 }, // Pakistan
        { name: 'Kuala Lumpur', lat: 3.139, lng: 101.6869 }, // Malaysia
    ];

    // Generate arcs between each pair of cities (for a lively, interconnected feel)
    const arcsData = globalSouthCities.flatMap((startCity, i) =>
        globalSouthCities.slice(i + 1).map((endCity) => ({
            startLat: startCity.lat,
            startLng: startCity.lng,
            endLat: endCity.lat,
            endLng: endCity.lng,
            color: [
                '#F4C542', // gold
                '#FF6F61', // coral
                '#6EE7B7', // mint
                '#60A5FA', // blue
                '#A78BFA', // purple
                '#F472B6', // pink
            ][Math.floor(Math.random() * 6)],
        }))
    );

    const textContainerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.5 } },
    };

    const textItemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    return (

        <section className="relative w-full h-screen bg-white overflow-hidden">
            {/* Bluish-white radial gradient behind the globe */}
            <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: '600px', height: '600px' }}>
                <div className="w-full h-full rounded-full" style={{
                    background: 'radial-gradient(circle, #e0e7ff 0%, #f8fafc 60%, transparent 100%)',
                    filter: 'blur(24px)',
                    opacity: 0.85
                }} />
            </div>
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <Globe
                    ref={globeEl}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                    backgroundColor="rgba(0,0,0,0)"
                    arcsData={arcsData}
                    arcColor={d => d.color}
                    arcDashLength={0.4}
                    arcDashGap={0.6}
                    arcDashAnimateTime={() => 6000}
                    arcStroke={0.45}
                    arcAltitude={0.18}
                    arcsTransitionDuration={2000}
                    // Add glowing effect by increasing stroke and altitude
                />
            </div>
            <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-gray-900">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none"></div>
                <motion.div
                    className="relative max-w-4xl px-4"
                    variants={textContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 
                        className="text-4xl md:text-6xl font-serif mb-6 drop-shadow-lg"
                        variants={textItemVariants}
                    >
                        China Is Powering the Global South — and Weave Is the Rail Beneath It
                    </motion.h1>
                    <motion.p 
                        className="max-w-3xl mx-auto text-lg md:text-xl drop-shadow-md"
                        variants={textItemVariants}
                    >
                        In a world fractured by conflict and economic insecurity, China isn’t building empires with tanks — it’s building partnerships with <span className="text-[#2563eb] font-semibold">tariff-free trade</span>, <span className="text-[#2563eb] font-semibold">infrastructure investments</span>, and <span className="text-[#2563eb] font-semibold">digital bridges</span> to the Global South.
                    </motion.p>
                </motion.div>
            </div>
        </section>
);
};

export default Section1_GlobalShift;
