import { FC } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Model } from './Mercedes';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';

const LandingFrontAnimation: FC = () => {
  const { themes } = useSelector((state: RootState) => state.theme);

  return (
    <Canvas style={{ position: 'absolute', top: 0, right: 0, zIndex: 0 }} color={themes === 'light' ? '#497174' : '#222831'}>
      <OrbitControls enableZoom={false} autoRotate={true} enablePan={false} />
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 2, 1]} />
      <spotLight intensity={15} position={[-1, 2, 2]} />
      <Model />
    </Canvas>
  );
};

export default LandingFrontAnimation;
