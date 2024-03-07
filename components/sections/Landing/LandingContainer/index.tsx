import { FC } from 'react';
import LandingSlogan from './LandingSlogan';
import LandingAnimation from './LandingAnimation';
const LandingContainer: FC = () => {
  return (
    <article className="wrapper relative w-full flex flex-col lg:flex-row justify-between items-start lg:items-center flex-wrap lg:min-h-[600px]">
      <LandingSlogan />
      <LandingAnimation />
    </article>
  );
};

export default LandingContainer;
