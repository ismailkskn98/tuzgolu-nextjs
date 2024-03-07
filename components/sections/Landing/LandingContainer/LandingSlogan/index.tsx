import { FC } from 'react';
import LandingSloganAnimate from './LandingSloganAnimate';

const LandingSlogan: FC = () => {
  return (
    <article className="relative z-10 text-light-white flex flex-col items-center lg:items-start gap-5 w-full lg:w-[55%] mb-4 lg:mb-0 text-center lg:text-left">
      <h1 className="landing-title text-7xl lg:text-8xl lg:text-left">Tuzgölü</h1>
      <LandingSloganAnimate />
      <h2 className="text-3xl landing-title mb-5 before:content-['-'] before:text-light-orange">
        YILDIZ’ların üzerinde yükselen değeriniz
      </h2>
      <p className="leading-7 tracking-wide font-medium text-lg">
        Gerek servisimizde, gerek yolda kalınan durumlarda her türlü bakım, onarım,
      </p>
      <p className='className="leading-7 tracking-wide font-medium text-lg"'>
        tamirat ve mekanik hizmetleri için güvenle arayabilirsiniz.
      </p>
    </article>
  );
};

export default LandingSlogan;
