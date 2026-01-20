import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera, Sparkles } from '@react-three/drei';

const FloatingShape = ({ position, color, geometry: Geometry = 'icosahedron', scale = 1 }) => {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh position={position} scale={scale}>
        {Geometry === 'icosahedron' && <icosahedronGeometry args={[0.5, 0]} />}
        {Geometry === 'torus' && <torusGeometry args={[0.3, 0.1, 16, 32]} />}
        {Geometry === 'octahedron' && <octahedronGeometry args={[0.5]} />}
        <meshStandardMaterial color={color} wireframe transparent opacity={0.2} />
      </mesh>
    </Float>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-gray-900">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={60} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#4c1d95" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2563eb" />
        
        {/* Deep Space Background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Floating Digital Particles */}
        <Sparkles count={100} scale={12} size={2} speed={0.4} opacity={0.4} color="#60a5fa" />
        <Sparkles count={50} scale={8} size={4} speed={0.2} opacity={0.2} color="#a78bfa" />
        
        {/* Geometric "Digital" Debris */}
        <FloatingShape position={[-3, 2, -2]} color="#3b82f6" geometry="torus" scale={1.5} />
        <FloatingShape position={[3, -1, -1]} color="#8b5cf6" geometry="octahedron" scale={1.2} />
        <FloatingShape position={[-1, -2, 1]} color="#06b6d4" geometry="icosahedron" scale={0.8} />
        <FloatingShape position={[2, 3, -3]} color="#ec4899" geometry="torus" scale={1} />
        <FloatingShape position={[0, 0, -4]} color="#6366f1" geometry="icosahedron" scale={2} />
        
        <fog attach="fog" args={['#111827', 5, 20]} />
      </Canvas>
    </div>
  );
};

export default Background3D;
