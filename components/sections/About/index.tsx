import { FC } from 'react';
import Content from './Content';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const About: FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const animateLeft = useTransform(scrollYProgress, [0, 1], [0.2, 300]);
  const animateRight = useTransform(scrollYProgress, [0, 1], [0.2, -300]);

  return (
    <section id="hakkimizda" className="relative text-dark-gray dark:text-dark-white">
      <header className="wrapper">
        <h1 className="pb-4 font-bold text-5xl w-full text-center">Hakkımızda</h1>
        <p className="desc text-light-teal/60 dark:text-gray-400 italic text-center">Biz Kimiz?</p>
      </header>
      <Content />
      <motion.div
        style={{ translateX: animateLeft }}
        className={`absolute top-56 -left-0 -z-10 hidden lg:block border-t-[50px] border-t-transparent border-b-[50px] border-b-transparent border-l-[100px] border-l-light-orange`}
      ></motion.div>
      <motion.div
        style={{ translateX: animateRight }}
        className={`absolute bottom-0 right-0 -z-10 hidden lg:block border-t-[50px] border-t-transparent border-b-[50px] border-b-transparent border-r-[100px] border-r-light-teal dark:border-r-dark-black`}
      ></motion.div>
    </section>
  );
};

export default About;
