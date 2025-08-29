import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Environment, Stars, Float } from '@react-three/drei';
import DanceStudio3D from './DanceStudio3D';
import LoadingSpinner from './LoadingSpinner';

interface Scene3DProps {
  scrollToSection: (sectionId: string) => void;
}

const Scene3D = ({ scrollToSection }: Scene3DProps) => {
  return (
    <div className="h-screen w-full relative">
      <Canvas
        camera={{ 
          position: [0, 5, 15], 
          fov: 50,
          near: 0.1,
          far: 1000 
        }}
        shadows
        className="bg-gradient-to-b from-purple-900 via-indigo-900 to-black"
      >
        <Suspense fallback={<LoadingSpinner />}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow 
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#00ffff" />
          
          {/* Environment */}
          <Environment preset="night" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          {/* Main 3D Content */}
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <DanceStudio3D scrollToSection={scrollToSection} />
          </Float>
          
          {/* Controls */}
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={5}
            maxDistance={50}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;