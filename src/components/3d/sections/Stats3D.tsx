import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Html } from '@react-three/drei';
import * as THREE from 'three';

interface Stats3DProps {
  position: [number, number, number];
  onHover: () => void;
  onLeave: () => void;
  isHovered: boolean;
}

const stats = [
  { number: "500+", label: "Happy Dancers", color: "#ff1493" },
  { number: "15+", label: "Expert Instructors", color: "#00ff7f" },
  { number: "8", label: "Dance Styles", color: "#ffd700" },
  { number: "10+", label: "Years Experience", color: "#ff69b4" }
];

const Stats3D = ({ position, onHover, onLeave, isHovered }: Stats3DProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [animating, setAnimating] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      if (animating) {
        groupRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 5) * 0.1);
      }
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Main Platform */}
      <Box
        args={[4, 0.5, 4]}
        position={[0, 0, 0]}
        onPointerOver={() => {
          onHover();
          setAnimating(true);
        }}
        onPointerOut={() => {
          onLeave();
          setAnimating(false);
        }}
        castShadow
      >
        <meshStandardMaterial 
          color={isHovered ? "#00ff7f" : "#32cd32"} 
          metalness={0.5}
          roughness={0.2}
          emissive={isHovered ? "#00ff7f" : "#32cd32"}
          emissiveIntensity={isHovered ? 0.3 : 0.1}
        />
      </Box>

      {/* Stat Cubes */}
      {stats.map((stat, i) => (
        <Box
          key={i}
          args={[1, 1, 1]}
          position={[
            (i % 2 === 0 ? -1 : 1) * 1.5,
            1.5,
            (i < 2 ? -1 : 1) * 1.5
          ]}
        >
          <meshStandardMaterial 
            color={stat.color}
            emissive={stat.color}
            emissiveIntensity={0.2}
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
        outlineColor="#32cd32"
      >
        OUR ACHIEVEMENTS
      </Text>

      {/* Stats Display */}
      <Html position={[0, -2, 0]} center>
        <div className="bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm">
          <div className="grid grid-cols-2 gap-4 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div 
                  className="text-2xl font-bold mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <div className="text-xs text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Html>
    </group>
  );
};

export default Stats3D;