import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Sphere, Plane, Html } from '@react-three/drei';
import * as THREE from 'three';
import Hero3D from './sections/Hero3D';
import Classes3D from './sections/Classes3D';
import Stats3D from './sections/Stats3D';
import About3D from './sections/About3D';
import Contact3D from './sections/Contact3D';

interface DanceStudio3DProps {
  scrollToSection: (sectionId: string) => void;
}

const DanceStudio3D = ({ scrollToSection }: DanceStudio3DProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Stage/Floor */}
      <Plane 
        args={[40, 40]} 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -2, 0]}
        receiveShadow
      >
        <meshStandardMaterial 
          color="#1a1a2e" 
          transparent 
          opacity={0.8}
          metalness={0.3}
          roughness={0.7}
        />
      </Plane>

      {/* Hero Section - Center Stage */}
      <Hero3D 
        position={[0, 0, 0]} 
        scrollToSection={scrollToSection}
        onHover={() => setHoveredSection('hero')}
        onLeave={() => setHoveredSection(null)}
        isHovered={hoveredSection === 'hero'}
      />

      {/* Classes Section - Left Stage */}
      <Classes3D 
        position={[-12, 0, 0]} 
        scrollToSection={scrollToSection}
        onHover={() => setHoveredSection('classes')}
        onLeave={() => setHoveredSection(null)}
        isHovered={hoveredSection === 'classes'}
      />

      {/* Stats Section - Right Stage */}
      <Stats3D 
        position={[12, 0, 0]}
        onHover={() => setHoveredSection('stats')}
        onLeave={() => setHoveredSection(null)}
        isHovered={hoveredSection === 'stats'}
      />

      {/* About Section - Back Left */}
      <About3D 
        position={[-8, 0, -12]}
        onHover={() => setHoveredSection('about')}
        onLeave={() => setHoveredSection(null)}
        isHovered={hoveredSection === 'about'}
      />

      {/* Contact Section - Back Right */}
      <Contact3D 
        position={[8, 0, -12]} 
        scrollToSection={scrollToSection}
        onHover={() => setHoveredSection('contact')}
        onLeave={() => setHoveredSection(null)}
        isHovered={hoveredSection === 'contact'}
      />

      {/* Ambient Elements */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Sphere
          key={i}
          args={[0.1]}
          position={[
            (Math.random() - 0.5) * 30,
            Math.random() * 10 + 2,
            (Math.random() - 0.5) * 30
          ]}
        >
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#ff00ff" : "#00ffff"} 
            emissive={i % 2 === 0 ? "#ff00ff" : "#00ffff"}
            emissiveIntensity={0.3}
          />
        </Sphere>
      ))}

      {/* Enhanced Navigation Instructions */}
      <Html position={[0, 8, 0]} center>
        <div className="text-center text-white font-bold text-lg bg-black/50 p-4 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl mb-2 animate-pulse">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-bounce">
              🕺 Dolly Dance Hub 💃
            </span>
          </h2>
          <p className="text-sm mb-2 animate-bounce">Explore our 3D dance studio!</p>
          <p className="text-xs text-purple-300 animate-pulse">
            Click and drag to rotate • Scroll to zoom • Click sections to interact
          </p>
        </div>
      </Html>
    </group>
  );
};

export default DanceStudio3D;