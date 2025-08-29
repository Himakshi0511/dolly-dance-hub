import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Html, Cone } from '@react-three/drei';
import { Mesh } from 'three';

interface Contact3DProps {
  position: [number, number, number];
  scrollToSection: (sectionId: string) => void;
  onHover: () => void;
  onLeave: () => void;
  isHovered: boolean;
}

const Contact3D = ({ position, scrollToSection, onHover, onLeave, isHovered }: Contact3DProps) => {
  const meshRef = useRef<Mesh>(null);
  const [showContact, setShowContact] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <group position={position}>
      {/* Main Contact Platform */}
      <Cone
        ref={meshRef}
        args={[2, 3, 6]}
        position={[0, 1, 0]}
        onPointerOver={onHover}
        onPointerOut={onLeave}
        onClick={() => setShowContact(!showContact)}
        castShadow
      >
        <meshStandardMaterial 
          color={isHovered ? "#ff4500" : "#ff6347"} 
          metalness={0.3}
          roughness={0.4}
          emissive={isHovered ? "#ff4500" : "#ff6347"}
          emissiveIntensity={isHovered ? 0.3 : 0.1}
        />
      </Cone>

      {/* Base Platform */}
      <Box
        args={[3, 0.3, 3]}
        position={[0, -0.5, 0]}
        castShadow
      >
        <meshStandardMaterial 
          color="#ff6347"
          metalness={0.5}
          roughness={0.3}
        />
      </Box>

      {/* Title */}
      <Text
        position={[0, 4, 0]}
        fontSize={0.7}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#ff4500"
      >
        CONTACT US
      </Text>

      {/* Contact Details */}
      {showContact && (
        <Html position={[0, -2, 0]} center>
          <div className="bg-black/80 text-white p-6 rounded-lg backdrop-blur-sm max-w-md">
            <h3 className="text-xl font-bold mb-4 text-orange-400">
              Get In Touch! 📞
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-orange-400">📍</span>
                <span>123 Dance Avenue, Studio City</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">📞</span>
                <span>(555) 123-DANCE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">✉️</span>
                <span>info@dollydancehub.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">🕒</span>
                <span>Mon-Sat: 9AM-9PM</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded text-sm hover:from-orange-600 hover:to-red-600"
              >
                Send Message
              </button>
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};

export default Contact3D;