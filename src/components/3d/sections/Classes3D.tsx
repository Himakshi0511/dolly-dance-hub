import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Html, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

interface Classes3DProps {
  position: [number, number, number];
  scrollToSection: (sectionId: string) => void;
  onHover: () => void;
  onLeave: () => void;
  isHovered: boolean;
}

const danceTypes = [
  { name: "Ballet", color: "#ff69b4", icon: "🩰" },
  { name: "Hip Hop", color: "#00ffff", icon: "🎤" },
  { name: "Jazz", color: "#ffd700", icon: "🎷" },
  { name: "Contemporary", color: "#9370db", icon: "🌸" },
  { name: "Belly Dance", color: "#ff4500", icon: "💃" },
  { name: "Bollywood", color: "#ff6347", icon: "🪩" }
];

const Classes3D = ({ position, scrollToSection, onHover, onLeave, isHovered }: Classes3DProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Main Platform */}
      <Cylinder
        args={[3, 3, 0.5, 8]}
        position={[0, 0, 0]}
        onPointerOver={onHover}
        onPointerOut={onLeave}
        castShadow
      >
        <meshStandardMaterial 
          color={isHovered ? "#00ffff" : "#4a90e2"} 
          metalness={0.4}
          roughness={0.3}
          emissive={isHovered ? "#00ffff" : "#4a90e2"}
          emissiveIntensity={isHovered ? 0.2 : 0.1}
        />
      </Cylinder>

      {/* Dance Class Representations */}
      {danceTypes.map((dance, i) => (
        <Box
          key={dance.name}
          args={[0.8, 1.5, 0.8]}
          position={[
            Math.cos((i * Math.PI * 2) / danceTypes.length) * 2.5,
            1,
            Math.sin((i * Math.PI * 2) / danceTypes.length) * 2.5
          ]}
          onClick={() => setSelectedClass(selectedClass === dance.name ? null : dance.name)}
          onPointerOver={(e) => {
            e.stopPropagation();
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            document.body.style.cursor = 'default';
          }}
        >
          <meshStandardMaterial 
            color={dance.color}
            emissive={dance.color}
            emissiveIntensity={selectedClass === dance.name ? 0.4 : 0.1}
          />
        </Box>
      ))}

      {/* Title */}
      <Text
        position={[0, 4, 0]}
        fontSize={0.8}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#00ffff"
      >
        DANCE CLASSES
      </Text>

      {/* Class Details */}
      {selectedClass && (
        <Html position={[0, -2, 0]} center>
          <div className="bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm max-w-sm">
            <div className="text-center">
              <div className="text-3xl mb-2">
                {danceTypes.find(d => d.name === selectedClass)?.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-cyan-400">
                {selectedClass}
              </h3>
              <p className="text-sm mb-3">
                Professional {selectedClass.toLowerCase()} classes for all skill levels. 
                Join our passionate community of dancers!
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded text-sm hover:from-cyan-600 hover:to-blue-600"
              >
                Join This Class
              </button>
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};

export default Classes3D;