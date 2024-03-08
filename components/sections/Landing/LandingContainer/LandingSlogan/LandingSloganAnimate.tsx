import { TypeAnimation } from 'react-type-animation';
import { FC } from 'react';
import styles from '@/styles/Landing.module.css';

const LandingSloganAnimate: FC = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[100, 'Motorlu Araçlar', 2500, 'Yedek Parçalar', 2500]}
      wrapper="span"
      speed={60}
      cursor={true}
      repeat={Infinity}
      className={`${styles.landingTitle} landing-title text-[40px] lg:text-6xl xl:text-8xl lg:text-left text-light-orange`}
    />
  );
};

export default LandingSloganAnimate;
