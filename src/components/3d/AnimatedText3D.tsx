import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Html } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedText3DProps {
  position: [number, number, number];
  text: string;
  fontSize?: number;
  color?: string;
  animationType?: 'float' | 'pulse' | 'rotate' | 'rainbow' | 'shake';
  speed?: number;
}

const AnimatedText3D = ({ 
  position, 
  text, 
  fontSize = 1, 
  color = "#ffffff",
  animationType = 'float',
  speed = 1 
}: AnimatedText3DProps) => {
  const textRef = useRef<THREE.Mesh>(null);
  const [currentColor, setCurrentColor] = useState(color);

  useFrame((state) => {
    if (!textRef.current) return;

    const time = state.clock.elapsedTime * speed;

    switch (animationType) {
      case 'float':
        textRef.current.position.y = position[1] + Math.sin(time) * 0.3;
        break;
      
      case 'pulse':
        const scale = 1 + Math.sin(time * 2) * 0.1;
        textRef.current.scale.setScalar(scale);
        break;
      
      case 'rotate':
        textRef.current.rotation.y = time * 0.5;
        textRef.current.rotation.z = Math.sin(time) * 0.1;
        break;
      
      case 'rainbow':
        const hue = (time * 50) % 360;
        setCurrentColor(`hsl(${hue}, 80%, 70%)`);
        break;
      
      case 'shake':
        textRef.current.position.x = position[0] + Math.sin(time * 10) * 0.05;
        textRef.current.position.z = position[2] + Math.cos(time * 10) * 0.05;
        break;
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={fontSize}
      color={currentColor}
      anchorX="center"
      anchorY="middle"
      font="/fonts/arial.woff"
      outlineWidth={0.02}
      outlineColor={currentColor}
    >
      {text}
    </Text>
  );
};

export default AnimatedText3D;