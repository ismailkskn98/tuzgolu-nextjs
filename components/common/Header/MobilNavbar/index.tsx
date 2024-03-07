import { FC, lazy, useState } from 'react';
import { NavItems } from '../index';
import { AnimatePresence, motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import ThemeBtn from '@/components/buttons/ThemeBtn';
import { RiMenu3Line } from 'react-icons/ri';
import { useActiveNav } from '@/hooks/useActiveNav';
import { useIsScroll } from '@/hooks/useIsScroll';
import Image from 'next/image';

type MobilNavbarProps = {
  navItems: NavItems[];
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const MobilNavbar: FC<MobilNavbarProps> = ({ navItems }) => {
  const [isShow, setIsShow] = useState(false);
  const { activeSection, handleNavLinkClick } = useActiveNav();
  const isScroll = useIsScroll();

  const handleNavClick = (sectionId: string): void => {
    setIsShow((prev) => !prev);
    handleNavLinkClick(sectionId);
  };

  return (
    <nav id="mobilNav" className="lg:hidden">
      <RiMenu3Line onClick={() => setIsShow((prev) => !prev)} className={`${isScroll ? 'text-3xl' : 'text-4xl'}`} />
      <AnimatePresence>
        {isShow && (
          <motion.div
            initial={{ translateX: '600px' }}
            animate={{ translateX: '0px' }}
            exit={{ translateX: '600px' }}
            transition={{ type: 'spring', stiffness: 600, damping: 50 }}
            className="h-full w-full fixed top-0 left-0 z-[60] px-6 pb-10 flex flex-col items-center gap-14  bg-light-white text-black dark:text-dark-white dark:bg-dark-black"
          >
            <motion.header
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="w-full flex items-center justify-between py-3"
            >
              <Image
                width={100}
                height={100}
                src="/images/logo.png"
                loading="lazy"
                placeholder="blur"
                alt="tuzgolu yedek parcalar"
                className="w-36 max-h-20"
              />
              <IoClose className="text-black text-[40px] dark:text-dark-white" onClick={() => setIsShow((prev) => !prev)} />
            </motion.header>
            <motion.ul
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-10 flex-grow text-2xl"
            >
              {navItems.map((navItem, i) => (
                <motion.li variants={item} key={i}>
                  <a
                    href={navItem.link}
                    onClick={() => handleNavClick(navItem.id)}
                    className={`block capitalize text-center cursor-pointer hover:text-light-orange transition-colors ${
                      activeSection === navItem.id ? 'text-light-orange' : ''
                    }`}
                  >
                    {navItem.title}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="w-full flex justify-between"
            >
              <ThemeBtn /> A
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobilNavbar;
