import { FC } from 'react';
import LandingSloganAnimate from './LandingSloganAnimate';
import styles from '@/styles/Landing.module.css';
import LandingBtn from '@/components/buttons/LandingBtn';

const LandingSlogan: FC = () => {
  return (
    <article className="relative z-10 text-light-white flex flex-col items-center lg:items-start gap-5 w-full lg:w-[55%] mb-4 lg:mb-0 text-center lg:text-left">
      <h1 className={`${styles.landingTitle} text-7xl lg:text-8xl lg:text-left`}>Tuzgölü</h1>
      <LandingSloganAnimate />
      <h2 className={`${styles.landingTitle} text-3xl landing-title mb-1 before:content-['-'] before:text-light-orange`}>
        YILDIZ’ların üzerinde yükselen değeriniz
      </h2>
      <p className="leading-8 tracking-wide font-medium text-lg">
        Gerek servisimizde, gerek yolda kalınan durumlarda her türlü bakım, onarım, tamirat ve mekanik hizmetleri için güvenle
        arayabilirsiniz.
      </p>
      <LandingBtn />
    </article>
  );
};

export default LandingSlogan;
