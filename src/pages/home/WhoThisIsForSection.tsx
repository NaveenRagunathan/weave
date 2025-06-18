import React, { useState, useEffect, useRef, useMemo, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Dynamically import the Globe component to avoid server-side rendering issues
const Globe = React.lazy(() => import('react-globe.gl'));
const GlobeComponent = Globe as any;

// Data for the globe points and stories
const locations = [
  {
    lat: 35.8617,
    lng: 104.1954,
    name: 'China',
    story: 'Mr. Chen, an electronics exporter in Shenzhen, uses Weave to get paid instantly from his clients in Nigeria, turning weeks of waiting into minutes of work.',
    type: 'Exporter'
  },
  {
    lat: 9.0820,
    lng: 8.6753,
    name: 'Nigeria',
    story: 'Amina, a Lagos-based entrepreneur, sources goods from Asia and uses Weave to pay her suppliers in real-time, keeping her supply chain moving without a hitch.',
    type: 'Importer'
  },
  {
    lat: -14.2350,
    lng: -51.9253,
    name: 'Brazil',
    story: 'For a major infrastructure project in Brazil, developers use Weave to move six-figure sums for equipment purchases, bypassing slow, traditional banking systems.',
    type: 'Developer'
  },
  {
    lat: 37.7749,
    lng: -122.4194,
    name: 'USA',
    story: 'Raj, a tech entrepreneur in Silicon Valley, sends capital back home to fund a new family business in India, bridging continents with a single click.',
    type: 'Diaspora'
  }
];

// Data for the arcs connecting the points
const arcsData = [
  { startLat: 35.8617, startLng: 104.1954, endLat: 9.0820, endLng: 8.6753, color: '#ffc107' }, // China -> Nigeria
  { startLat: 9.0820, startLng: 8.6753, endLat: 35.8617, endLng: 104.1954, color: '#4caf50' }, // Nigeria -> China
  { startLat: 35.8617, startLng: 104.1954, endLat: -14.2350, endLng: -51.9253, color: '#ff5722' }, // China -> Brazil
  { startLat: 37.7749, startLng: -122.4194, endLat: 20.5937, endLng: 78.9629, color: '#2196f3' } // USA -> India
];

const WhoThisIsForSection = () => {
  const globeEl = useRef<any>();
  const [hoveredPoint, setHoveredPoint] = useState<typeof locations[0] | null>(null);
  const [clickedPoint, setClickedPoint] = useState<typeof locations[0] | null>(null);
  const [isClient, setIsClient] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [avatarModel, setAvatarModel] = useState<THREE.Group | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load the 3D avatar model
  useEffect(() => {
    if (!isClient) return;
    const loader = new GLTFLoader();
    loader.load(
      'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-character/model.gltf',
      (gltf) => {
        const model = gltf.scene;
        setAvatarModel(model);
      },
      undefined,
      (error) => {
        console.error('An error happened while loading the avatar model:', error);
      }
    );
  }, [isClient]);

  const activeLocation = useMemo(() => clickedPoint || hoveredPoint, [clickedPoint, hoveredPoint]);

  const pointThreeObject = useMemo(() => {
    return (point: any) => {
      const isHovered = activeLocation && activeLocation.name === point.name;
      let object: THREE.Object3D;

      if (avatarModel) {
        object = avatarModel.clone();
        object.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({ 
              color: isHovered ? '#ff5722' : '#d4af37',
              roughness: 0.8,
              metalness: 0.2,
              emissive: isHovered ? '#ff5722' : '#000000',
              emissiveIntensity: isHovered ? 0.5 : 0
            });
          }
        });
      } else {
        // Fallback to a sphere if model is not loaded yet
        const geometry = new THREE.SphereGeometry(0.5, 16, 16);
        const material = new THREE.MeshBasicMaterial({ 
          color: isHovered ? '#ff5722' : '#d4af37',
          transparent: true,
          opacity: isHovered ? 1 : 0.8
        });
        object = new THREE.Mesh(geometry, material);
      }
      
      // Keep a consistent scale for all points
      const scale = 0.02;
      object.scale.setScalar(scale);
      object.rotation.y = Math.random() * 2 * Math.PI; // Randomize rotation

      return object;
    };
  }, [activeLocation, avatarModel]);

  useEffect(() => {
    const globe = globeEl.current;
    if (!isClient || !globe) return;

    if (!globe.isSetup) {
      const controls = globe.controls();
      controls.autoRotateSpeed = 0.3;
      controls.enableZoom = false;
      controls.enableRotate = false; // Disable rotation
      controls.enablePan = false; // Disable panning
      
      // Set initial view
      globe.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 1000);
      
      // Disable hover effects
      globe.enablePointerInteraction(false);
      
      globe.isSetup = true;
    }
  }, [isClient]);

  const handlePointClick = (point: typeof locations[0]) => {
    if (clickedPoint && clickedPoint.name === point.name) {
      setClickedPoint(null);
    } else {
      setClickedPoint(point);
      setHoveredPoint(null);
    }
  };

  const handlePointHover = (point: typeof locations[0] | null) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (!clickedPoint) {
      if (point) {
        setHoveredPoint(point);
      } else {
        hoverTimeoutRef.current = setTimeout(() => {
          setHoveredPoint(null);
        }, 300);
      }
    }
  };

  const handleGlobeClick = () => {
    setClickedPoint(null);
    setHoveredPoint(null);
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
            WEAVE IS FOR DOERS WHO TRADE GLOBALLY
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-12">
            We built Weave for the pioneers of international trade. We built WEAVE for the
            ones who move capital and make the world go round.{' '}
            <span className="text-imperial-gold-400 font-semibold animate-pulse">
              Hover or click the globe to see their stories.
            </span>
          </p>
        </motion.div>

        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center cursor-move">
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
                arcColor="color"
                arcDashLength={0.4}
                arcDashGap={0.6}
                arcDashAnimateTime={2000}
                arcStroke={0.3}
                width={800}
                height={600}
                waitForGlobeReady={true}
                animateIn={false}
                enablePointerInteraction={true}
                showAtmosphere={false}
                showGlobe={true}
                showGraticules={false}
              />
            </Suspense>
          )}
          <AnimatePresence>
            {activeLocation && (
              <motion.div
                key={activeLocation.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="absolute bottom-0 mb-8 md:mb-16 p-6 max-w-sm w-full bg-gray-900/80 backdrop-blur-md border border-imperial-gold-500/30 rounded-2xl shadow-2xl text-left pointer-events-none"
              >
                <h3 className="text-xl font-bold font-serif text-imperial-gold-400">{activeLocation.type}</h3>
                <p className="mt-2 text-gray-200">{activeLocation.story}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-12"
        >
          <Button
            size="lg"
            className="border-2 border-silk-crimson-400 text-silk-crimson-400 bg-transparent hover:bg-silk-crimson-400 hover:text-white font-bold px-10 py-5 rounded-full shadow-md transition-all"
          >
            Join the new world of finance
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
