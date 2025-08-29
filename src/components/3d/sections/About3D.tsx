import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Html, Sphere } from '@react-three/drei';
import { Mesh } from 'three';

interface About3DProps {
  position: [number, number, number];
  onHover: () => void;
  onLeave: () => void;
  isHovered: boolean;
}

const About3D = ({ position, onHover, onLeave, isHovered }: About3DProps) => {
  const meshRef = useRef<Mesh>(null);
  const [showAbout, setShowAbout] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group position={position}>
      {/* Main About Platform */}
      <Box
        ref={meshRef}
        args={[3, 0.5, 3]}
        position={[0, 0, 0]}
        onPointerOver={onHover}
        onPointerOut={onLeave}
        onClick={() => setShowAbout(!showAbout)}
        castShadow
      >
        <meshStandardMaterial 
          color={isHovered ? "#ffd700" : "#daa520"} 
          metalness={0.7}
          roughness={0.1}
          emissive={isHovered ? "#ffd700" : "#daa520"}
          emissiveIntensity={isHovered ? 0.2 : 0.1}
        />
      </Box>

      {/* Floating Elements */}
      {Array.from({ length: 4 }).map((_, i) => (
        <Sphere
          key={i}
          args={[0.2]}
          position={[
            Math.cos((i * Math.PI) / 2) * 2,
            1 + Math.sin(i + Date.now() * 0.002) * 0.3,
            Math.sin((i * Math.PI) / 2) * 2
          ]}
        >
          <meshStandardMaterial 
            color="#ffd700"
            emissive="#ffd700"
            emissiveIntensity={0.4}
          />
        </Sphere>
      ))}

      {/* Title */}
      <Text
        position={[0, 3, 0]}
        fontSize={0.7}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#ffd700"
      >
        ABOUT US
      </Text>

      {/* About Details */}
      {showAbout && (
        <Html position={[0, -2, 0]} center>
          <div className="bg-black/80 text-white p-6 rounded-lg backdrop-blur-sm max-w-md">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">
              Our Story ✨
            </h3>
            <p className="text-sm mb-3">
              For over a decade, Dolly Dance Hub has been nurturing dancers and building a community 
              where artistry flourishes. Our state-of-the-art facilities and world-class instructors 
              create the perfect environment for growth.
            </p>
            <p className="text-sm mb-4">
              Whether you're a beginner taking your first steps or a seasoned performer, 
              we provide the support and inspiration you need to reach new heights.
            </p>
            <div className="text-center">
              <div className="text-2xl mb-2">🏆</div>
              <p className="text-xs text-yellow-300">
                Award-winning dance studio since 2014
              </p>
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};

export default About3D;