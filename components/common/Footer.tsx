import { FC } from 'react';
import SosyalMediaIcon from './SosyalMediaIcon';
import Image from 'next/image';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative w-full py-6 bg-light-teal dark:bg-dark-black mt-36">
      <div className="absolute -top-8 left-0 w-full min-h-12 bg-footer-light-bg dark:bg-footer-dark-bg bg-no-repeat bg-center bg-cover"></div>
      <main className="wrapper flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-between">
        <article>
          <Image
            width={100}
            height={100}
            src="/images/logo.png"
            loading="lazy"
            alt="tuzgolu motorlu araçlar logo"
            className="w-36 h-20"
          />
        </article>
        <article className="text-light-light text-sm text-center">
          Copyright © {currentYear} Tuzgölü motorlu araçlar tescillenmiş markadır, Tüm Hakları Saklıdır.
        </article>
        <article>
          <SosyalMediaIcon />
        </article>
      </main>
    </footer>
  );
};

export default Footer;
