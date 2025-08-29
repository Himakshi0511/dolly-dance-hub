import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Html, Sphere } from '@react-three/drei';
import { Mesh } from 'three';

interface Hero3DProps {
  position: [number, number, number];
  scrollToSection: (sectionId: string) => void;
  onHover: () => void;
  onLeave: () => void;
  isHovered: boolean;
}

const Hero3D = ({ position, scrollToSection, onHover, onLeave, isHovered }: Hero3DProps) => {
  const meshRef = useRef<Mesh>(null);
  const [showDetails, setShowDetails] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group position={position}>
      {/* Main Hero Platform */}
      <Box
        ref={meshRef}
        args={[4, 0.5, 4]}
        position={[0, 0, 0]}
        onPointerOver={onHover}
        onPointerOut={onLeave}
        onClick={() => setShowDetails(!showDetails)}
        castShadow
      >
        <meshStandardMaterial 
          color={isHovered ? "#ff1493" : "#9d4edd"} 
          metalness={0.6}
          roughness={0.2}
          emissive={isHovered ? "#ff1493" : "#9d4edd"}
          emissiveIntensity={isHovered ? 0.2 : 0.1}
        />
      </Box>

      {/* Floating Dancers */}
      {Array.from({ length: 6 }).map((_, i) => (
        <Sphere
          key={i}
          args={[0.3]}
          position={[
            Math.cos((i * Math.PI * 2) / 6) * 3,
            2 + Math.sin(i + Date.now() * 0.001) * 0.5,
            Math.sin((i * Math.PI * 2) / 6) * 3
          ]}
        >
          <meshStandardMaterial 
            color="#fff"
            emissive="#ff69b4"
            emissiveIntensity={0.3}
          />
        </Sphere>
      ))}

      {/* Animated Title */}
      <Text
        position={[0, 3 + Math.sin(Date.now() * 0.003) * 0.2, 0]}
        fontSize={1.5}
        color={`hsl(${(Date.now() * 0.1) % 360}, 70%, 90%)`}
        anchorX="center"
        anchorY="middle"
        font="/fonts/arial.woff"
        outlineWidth={0.02}
        outlineColor="#ff1493"
      >
        DOLLY DANCE HUB
      </Text>

      <Text
        position={[0, 1.5 + Math.cos(Date.now() * 0.002) * 0.1, 0]}
        fontSize={0.5}
        color={`hsl(${(Date.now() * 0.15 + 60) % 360}, 80%, 70%)`}
        anchorX="center"
        anchorY="middle"
        font="/fonts/arial.woff"
      >
        Where passion meets rhythm
      </Text>

      {/* Interactive UI */}
      {showDetails && (
        <Html position={[0, -2, 0]} center>
          <div className="bg-black/80 text-white p-6 rounded-lg backdrop-blur-sm max-w-md">
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Welcome to Our Studio! 💃
            </h3>
            <p className="text-sm mb-4">
              Experience the magic of dance in our premier studio where dreams take flight through rhythm and movement.
            </p>
            <div className="flex gap-2">
              <button 
                onClick={() => scrollToSection('classes')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded text-sm hover:from-purple-700 hover:to-pink-700"
              >
                Explore Classes
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-white px-4 py-2 rounded text-sm hover:bg-white hover:text-black"
              >
                Get Started
              </button>
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};

export default Hero3D;