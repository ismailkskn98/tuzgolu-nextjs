import { FC } from 'react';
import LandingShape from './LandingShape';
import LandingContainer from './LandingContainer';
import { motion } from 'framer-motion';

const Landing: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="anasayfa"
      className="relative w-full h-auto pb-24 pt-36 lg:py-0 lg:min-h-[920px] flex items-center bg-landing-light-bg dark:bg-landing-dark-bg bg-cover lg:bg-fixed bg-repeat bg-center overflow-hidden"
    >
      <div className="absolute -bottom-[.5px] left-0 w-full overflow-hidden">
        <LandingShape />
      </div>
      <LandingContainer />
    </motion.section>
  );
};

export default Landing;
