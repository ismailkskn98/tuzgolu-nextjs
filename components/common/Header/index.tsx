import { FC } from 'react';
import ThemeBtn from '@/components/buttons/ThemeBtn';
import Navbar from './Navbar';
import MobilNavbar from './MobilNavbar';
import { useIsScroll } from '@/hooks/useIsScroll';
import Image from 'next/image';

export type NavItems = {
  id: string;
  link: string;
  title: string;
};

const navItems: NavItems[] = [
  { id: 'anasayfa', link: '#anasayfa', title: 'anasayfa' },
  { id: 'yedek-parcalar', link: '#yedek-parcalar', title: 'yedek parcalar' },
  { id: 'hakkimizda', link: '#hakkimizda', title: 'hakkımızda' },
  { id: 'galeri', link: '#galeri', title: 'galeri' },
  { id: 'iletisim', link: '#iletisim', title: 'İletişim' },
];

const Header: FC = () => {
  const isScroll = useIsScroll();

  return (
    <header
      className={`fixed top-0 left-0 w-full py-3 z-50 bg-light-teal dark:bg-dark-black lg:dark:bg-transparent ${
        isScroll ? 'lg:bg-[#0c0c0c1c] lg:backdrop-blur-[50px] lg:dark:bg-dark-black/70' : 'lg:bg-transparent'
      }`}
    >
      <div className="wrapper flex justify-between items-center text-light-white dark:text-dark-white">
        <Image
          src="/images/logo.png"
          alt="tuzgolu motorlu araçlar logo"
          width={100}
          height={100}
          priority={true}
          // unoptimized
          className={`transition-all ${isScroll ? 'max-h-[54px] lg:w-32 lg:max-h-[70px]' : 'w-36 max-h-20 lg:max-h-24 lg:w-44'}`}
        />
        <Navbar navItems={navItems} />
        <MobilNavbar navItems={navItems} />
        <div className="buttons items-center gap-3 hidden lg:flex">
          <ThemeBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
