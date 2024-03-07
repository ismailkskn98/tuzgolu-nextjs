import { FC } from 'react';
import SosyalMediaIcon from '../../common/SosyalMediaIcon';
import { IoMdMail } from 'react-icons/io';
import { FaAddressBook } from 'react-icons/fa';
import { BsFillPhoneFill } from 'react-icons/bs';
// import './contact.css';

const ContactInfo: FC = () => {
  return (
    <main className="relative overflow-hidden flex flex-col justify-between gap-12 w-full lg:w-[40%] p-10 min-h-[500px] lg:min-h-[590px] rounded bg-light-teal text-white dark:bg-dark-gray">
      <div className="absolute bottom-14 right-14 bg-light-light/50 w-[138px] h-[138px] rounded-full"></div>
      <div className="absolute -bottom-28 -right-28 bg-light-light/60 w-[269px] h-[269px] rounded-full"></div>
      <header>
        <h2 className="text-[28px] tracking-wide capitalize font-semibold">İletişim Bilgileri</h2>
        <p className="text-sm italic text-light-light">Bize buralardan canlı bir şekilde ulaşabilirsin!</p>
      </header>
      <article className="flex-grow flex flex-col gap-10">
        <p>
          <a href="tel:0538 849 00 63" className="flex items-center gap-3">
            <BsFillPhoneFill className="text-xl text-light-light" />
            <span className="text-sm">0538 849 00 63</span>
          </a>
        </p>
        <p>
          <a href="mailto:tuzgolumotorluaraclar@gmail.com" target="_blank" className="flex items-center gap-3">
            <IoMdMail className="text-xl text-light-light" />
            <span className="text-sm">tuzgolumotorluaraclar@gmail.com</span>
          </a>
        </p>
        <p>
          <a href="https://goo.gl/maps/2KKjkGtbyS3BnqA16" target="_blank" className="flex items-center gap-3">
            <FaAddressBook className="text-xl text-light-light" />
            <span className="text-sm">Ostim OSB Mah. Örnek sanayi sitesi 1258 CAD. NO: 28/D</span>
          </a>
        </p>
      </article>
      <SosyalMediaIcon />
    </main>
  );
};

export default ContactInfo;
