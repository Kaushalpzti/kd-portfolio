"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function OrbitalCore() {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.12;
  });

  return (
    <group ref={group}>
      <Float speed={1.35} rotationIntensity={0.38} floatIntensity={0.55}>
        <mesh rotation={[0.2, 0.4, 0]}>
          <icosahedronGeometry args={[1.12, 5]} />
          <MeshDistortMaterial
            color="#7765f7"
            emissive="#2d1a78"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.55}
            distort={0.32}
            speed={1.5}
          />
        </mesh>
      </Float>

      <mesh rotation={[1.12, 0.2, 0.28]}>
        <torusGeometry args={[1.58, 0.014, 16, 180]} />
        <meshStandardMaterial
          color="#9bb4ff"
          metalness={0.8}
          roughness={0.24}
          emissive="#5268ff"
          emissiveIntensity={1.2}
        />
      </mesh>

      <mesh rotation={[0.38, 1.15, 0.84]}>
        <torusGeometry args={[1.82, 0.009, 12, 180]} />
        <meshStandardMaterial
          color="#b09aff"
          emissive="#7651ff"
          emissiveIntensity={1.4}
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      <mesh position={[1.35, 0.67, 0.08]}>
        <sphereGeometry args={[0.075, 24, 24]} />
        <meshStandardMaterial
          color="#a9f3ff"
          emissive="#66dfff"
          emissiveIntensity={2.1}
        />
      </mesh>

      <mesh position={[-1.23, -0.76, 0.15]}>
        <sphereGeometry args={[0.048, 20, 20]} />
        <meshStandardMaterial
          color="#d0c4ff"
          emissive="#9b75ff"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.4], fov: 43 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      fallback={<div className="scene-fallback" aria-label="3D visual unavailable" />}
    >
      <ambientLight intensity={1.25} />
      <pointLight position={[3, 3, 3]} intensity={28} color="#978aff" />
      <pointLight position={[-3, -2, 1]} intensity={17} color="#43cfff" />
      <OrbitalCore />
      <Sparkles count={68} scale={4.8} size={1.8} speed={0.18} color="#aab7ff" />
    </Canvas>
  );
}
