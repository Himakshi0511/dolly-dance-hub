import { Html, useProgress } from '@react-three/drei';

const LoadingSpinner = () => {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mb-4"></div>
        <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Loading 3D Experience...
        </div>
        <div className="text-sm mt-2 text-purple-300">
          {Math.round(progress)}% loaded
        </div>
      </div>
    </Html>
  );
};

export default LoadingSpinner;