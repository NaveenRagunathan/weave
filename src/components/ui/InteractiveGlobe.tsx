import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Stars, OrbitControls } from '@react-three/drei';

const Globe = () => {
  const globeRef = useRef<any>();
  const cloudsRef = useRef<any>();

  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
    '/textures/8k_earth_daymap.jpg',
    '/textures/8k_earth_normal_map.jpg',
    '/textures/8k_earth_specular_map.jpg',
    '/textures/8k_earth_clouds.jpg',
  ]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (globeRef.current) {
      globeRef.current.rotation.y = elapsedTime / 6;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = elapsedTime / 5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight color="#ffffff" intensity={1} position={[2, 2, 2]} />
      <Stars radius={300} depth={60} count={15000} factor={7} saturation={0} fade speed={2} />

      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite transparent />
      </mesh>

      <mesh ref={globeRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7} />
      </mesh>
    </>
  );
};

const InteractiveGlobe = () => {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <React.Suspense fallback={null}>
        <Globe />
        <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.05} autoRotate={false} />
      </React.Suspense>
    </Canvas>
  );
};

export default InteractiveGlobe;
