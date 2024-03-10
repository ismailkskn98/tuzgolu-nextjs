import { FC } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Whatsapp: FC = () => {
  return (
    <>
      <a
        href="https://wa.me/05388490063"
        target="_blank"
        className="hidden lg:flex fixed bottom-8 right-8 z-50 w-[105px] cursor-pointer"
      >
        <Player autoplay loop src="./whatsapp.json" className="w-full">
          <Controls buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
      </a>
      <a
        href="https://wa.me/05388490063"
        target="_blank"
        className="group flex items-center justify-center gap-3 lg:hidden fixed bottom-0 right-0 z-50 w-full cursor-pointer dark:bg-dark-black dark:text-white"
      >
        <span className="text-lg font-semibold transition-all group-hover:text-[#23B33A]">0 538 849 00 63</span>
        <Player autoplay loop src="./whatsapp.json" className="w-[70px]">
          <Controls buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
      </a>
    </>
  );
};

export default Whatsapp;
