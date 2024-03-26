import { FC } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Whatsapp: FC = () => {
  return (
    <>
      <a
        href="https://wa.me/05388490063"
        target="_blank"
        className="hidden lg:flex fixed bottom-8 right-8 z-50 w-[80px] cursor-pointer"
      >
        <Player autoplay loop src="./whatsapp.json" className="w-full">
          <Controls buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
      </a>
      <main className="flex items-center lg:hidden fixed bottom-0 w-full z-50  ">
        <a
          href="tel:0538 849 00 63"
          target="_blank"
          className="group w-1/2 h-full flex items-center justify-center gap-3 cursor-pointer bg-light-teal text-white"
        >
          <span className="font-semibold transition-all group-hover:text-[#23B33A]">Bizi Arayın</span>
          <Player autoplay loop src="./phone.json" className="w-[50px]">
            <Controls buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
        </a>
        <a
          href="https://wa.me/05388490063"
          target="_blank"
          className="group w-1/2 h-full flex items-center justify-center gap-3 cursor-pointer bg-dark-gray text-white"
        >
          <span className="font-semibold transition-all group-hover:text-[#23B33A]">Whatsapp</span>
          <Player autoplay loop src="./whatsapp.json" className="w-[50px]">
            <Controls buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
        </a>
      </main>
    </>
  );
};

export default Whatsapp;
