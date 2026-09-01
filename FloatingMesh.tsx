import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, useGLTF, Preload } from "@react-three/drei";

import * as THREE from "three";

function RocketModel() {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/rocket.glb");

  useFrame(() => {
    if (!meshRef.current) return;
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

    // Target Y bound within screen limits (from +1.8 near top down to -1.8 near bottom)
    const targetY = 1.8 - scrollProgress * 3.6;
    const targetRotationY = scrollProgress * Math.PI * 4;

    // Smooth movement using lerp
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.1);
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      {/* Starting position container */}
      <group ref={meshRef} position={[2.5, 1.8, 0]}>
        <primitive object={scene} scale={0.5} />
      </group>
    </Float>
  );
}

export default function Floating3DCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        {/* el-fallback null fa lou ma-ḥamalsh mesh hy-break el-page */}
        <Suspense fallback={null}>
          <RocketModel />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Pre-load the GLTF file to prevent render lag
useGLTF.preload("/rocket.glb");