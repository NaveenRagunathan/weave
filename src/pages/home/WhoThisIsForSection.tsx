import React, { useState, useEffect, useRef, Suspense } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Globe as GlobeIcon, Zap, Users, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import * as THREE from 'three';

const Globe = React.lazy(() => import('react-globe.gl'));
const GlobeComponent = Globe as any;

const locations = [
    { lat: 35.8617, lng: 104.1954, name: 'China', type: 'Exporter', stories: ['An electronics exporter in Shenzhen gets paid instantly from clients in Nigeria.'] },
    { lat: 9.0820, lng: 8.6753, name: 'Nigeria', type: 'Importer', stories: ['A Lagos-based entrepreneur pays Asian suppliers in real-time, keeping her supply chain moving.'] },
    { lat: -14.2350, lng: -51.9253, name: 'Brazil', type: 'Developer', stories: ['Developers move six-figure sums for infrastructure projects, bypassing slow banks.'] },
    { lat: 37.7749, lng: -122.4194, name: 'USA', type: 'Diaspora', stories: ['A tech entrepreneur in Silicon Valley funds a new family business in India with a click.', '"Weave helps our US-based charity send funds to our partners in Africa seamlessly." - NGO Founder'] },
    { lat: 51.5074, lng: -0.1278, name: 'UK', type: 'Fintech', stories: ['A London-based fintech uses Weave APIs to offer cross-border payments to their customers.'] },
    { lat: 20.5937, lng: 78.9629, name: 'India', type: 'Freelancer', stories: ['A freelance designer receives payments from US clients without high transaction fees.', '"Our startup in Bangalore now pays its remote team globally without any friction." - Tech CEO'] },
    { lat: -33.8688, lng: 151.2093, name: 'Australia', type: 'Exporter', stories: ['An agricultural exporter in Sydney settles payments for shipments to Southeast Asia.'] },
    { lat: 34.0522, lng: -118.2437, name: 'Los Angeles', type: 'Media', stories: ['A film production company pays its international crew instantly using Weave.'] },
    { lat: 25.276987, lng: 55.296249, name: 'Dubai', type: 'Trader', stories: ['"It used to take 3 days and a broker. Now it takes 10 minutes and no phone calls." - Sarah'] },
    { lat: 5.6037, lng: -0.1870, name: 'Ghana', type: 'Business Owner', stories: ['"We saved $23,000 in FX fees in Q1 alone." - Nana'] },
    { lat: 22.5431, lng: 114.0579, name: 'Shenzhen', type: 'Exporter', stories: ['"USDC helps us close African deals without bank lag." - Li Ming'] }
];

const arcsData = [
    { startLat: 35.8617, startLng: 104.1954, endLat: 9.0820, endLng: 8.6753, color: '#ffc107' },
    { startLat: 9.0820, startLng: 8.6753, endLat: 35.8617, endLng: 104.1954, color: '#4caf50' },
    { startLat: 37.7749, startLng: -122.4194, endLat: 20.5937, endLng: 78.9629, color: '#2196f3' },
    { startLat: 51.5074, startLng: -0.1278, endLat: 34.0522, endLng: -118.2437, color: '#f44336' },
    { startLat: -33.8688, startLng: 151.2093, endLat: 35.8617, endLng: 104.1954, color: '#9c27b0' }
];



const WhoThisIsForSection = () => {
    const globeEl = useRef<any>();
    const [selectedLocation, setSelectedLocation] = useState<any | null>(null);
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [isClient, setIsClient] = useState(false);
    const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

            useEffect(() => {
        const globe = globeEl.current;
        if (!isClient || !globe) return;

        const controls = globe.controls();
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.8;
        controls.enableZoom = false;
        controls.enableRotate = true;
        
        globe.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 1000);
        setTimeout(() => {
            setIsInitialAnimationDone(true);
        }, 1000); // Match animation duration

    }, [isClient]);

    useEffect(() => {
        if (!isInitialAnimationDone) return;

        const globe = globeEl.current;
        if (globe && globe.controls) {
            globe.controls().autoRotate = !selectedLocation;
        }
    }, [selectedLocation, isInitialAnimationDone]);

        const handlePointClick = (point: any) => {
        const globe = globeEl.current;
        if (!globe) return;

        setSelectedLocation(point);
        setCurrentStoryIndex(0);
        globe.pointOfView({ lat: point.lat, lng: point.lng, altitude: 1.2 }, 500);
    };

    const handleGlobeClick = () => {
        const globe = globeEl.current;
        if (!globe) return;

        setSelectedLocation(null);
        globe.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 500);
    };

    const handlePointHover = (point: any) => {
        const globe = globeEl.current;
        if (globe && globe.controls()) {
            globe.controls().domElement.style.cursor = point ? 'pointer' : 'grab';
        }
    };

    const pointThreeObject = () => {
        const group = new THREE.Group();

        // Simple avatar head
        const headMaterial = new THREE.MeshBasicMaterial({ color: '#93c5fd' }); // Light blue for contrast
        const headGeometry = new THREE.SphereGeometry(0.35, 16, 16);
        const head = new THREE.Mesh(headGeometry, headMaterial);
        head.position.y = 0.5;

        // Simple avatar body
        const bodyMaterial = new THREE.MeshBasicMaterial({ color: '#2563eb' }); // A nice blue
        const bodyGeometry = new THREE.CylinderGeometry(0.3, 0.2, 0.8, 16); // Tapered body
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.position.y = -0.2;

        group.add(head);
        group.add(body);

        // Increased scale for better visibility
        group.scale.set(4, 4, 4);

        return group;
    };

    return (
        <section className="relative w-full bg-black text-white py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-serif mb-4">
                        The Network Gets Smarter With You
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-12">
                        We built Weave for the pioneers of international trade. Every user strengthens the grid.
                        <span className="text-brand-blue font-semibold block mt-2 animate-pulse">
                            Hover the globe to see their stories.
                        </span>
                    </p>
                </motion.div>

                <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center cursor-grab">
                    {isClient && (
                        <Suspense fallback={<div className="text-white text-lg">Loading Globe...</div>}> 
                            <GlobeComponent
                                ref={globeEl}
                                backgroundColor="rgba(0,0,0,0)"
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                pointsData={locations}
                                pointLat="lat"
                                pointLng="lng"
                                pointLabel="name"
                                pointThreeObject={pointThreeObject}
                                onPointHover={handlePointHover}
                                onPointClick={handlePointClick}
                                onGlobeClick={handleGlobeClick}
                                arcsData={arcsData}
                                arcColor={'color'}
                                arcDashLength={0.6}
                                arcDashGap={0.4}
                                arcDashAnimateTime={2000}
                                arcStroke={0.3}
                                width={800}
                                height={600}
                            />
                        </Suspense>
                    )}
                    <AnimatePresence>
                        {selectedLocation && (
                            <motion.div
                                key={selectedLocation.name}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                className="absolute bottom-0 mb-8 md:mb-16 p-6 max-w-sm w-full bg-gray-900/80 backdrop-blur-md border border-brand-blue/30 rounded-2xl shadow-2xl text-left"
                            >
                                <h3 className="text-xl font-bold font-serif text-brand-blue">{selectedLocation.type} in {selectedLocation.name}</h3>
                                <p className="mt-2 text-gray-200 min-h-[60px]">{selectedLocation.stories[currentStoryIndex]}</p>
                                {selectedLocation.stories.length > 1 && (
                                    <div className="mt-4 flex justify-between items-center">
                                        <Button
                                            variant="ghost" size="icon"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCurrentStoryIndex(prev => (prev - 1 + selectedLocation.stories.length) % selectedLocation.stories.length);
                                            }}
                                        >
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                        <span className="text-sm text-gray-400">
                                            {currentStoryIndex + 1} / {selectedLocation.stories.length}
                                        </span>
                                        <Button
                                            variant="ghost" size="icon"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCurrentStoryIndex(prev => (prev + 1) % selectedLocation.stories.length);
                                            }}
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <Button
                        size="lg"
                        className="border-2 border-brand-blue text-brand-blue bg-transparent hover:bg-brand-blue hover:text-white font-bold px-10 py-5 rounded-full shadow-md transition-all"
                    >
                        Join the Network
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default WhoThisIsForSection;
