import { FC } from 'react';
import { FiInstagram } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import styles from '@/styles/SosyalMedia.module.css';

const SosyalMediaIcon: FC = () => {
  return (
    <article className="flex items-center gap-5">
      <a
        href="https://www.instagram.com/tuzgolumotorluaraclar06/"
        className="relative flex items-center justify-center w-9 h-9 rounded-full border border-light-border-color dark:border-dark-black bg-transparent hover:bg-contact-hover dark:hover:bg-dark-black transition-all group"
      >
        <FiInstagram className="text-lg text-white group-hover:text-[#E1306C]" />
        <span
          className={`${styles.tooltip} invisible bg-light-light text-light-teal dark:bg-dark-black dark:text-dark-white dark:after:border-b-dark-black group-hover:visible group-hover:-top-10 group-hover:opacity-100`}
        >
          Instagram
        </span>
      </a>
      <a
        href="https://wa.me/05388490063"
        target="_blank"
        className="relative flex items-center justify-center w-9 h-9 rounded-full border border-light-border-color dark:border-dark-black bg-transparent hover:bg-contact-hover dark:hover:bg-dark-black transition-all group"
      >
        <BsWhatsapp className="text-white group-hover:text-[#25D366] text-lg" />
        <span
          className={`${styles.tooltip} invisible bg-light-light text-light-teal dark:bg-dark-black dark:text-dark-white dark:after:border-b-dark-black group-hover:visible group-hover:-top-10 group-hover:opacity-100`}
        >
          Whatsapp
        </span>
      </a>
    </article>
  );
};

export default SosyalMediaIcon;
