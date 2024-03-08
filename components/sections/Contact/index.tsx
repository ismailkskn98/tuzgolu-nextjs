import { FC } from 'react';
import ContactForm from './Form';
import ContactInfo from './Info';
const Contact: FC = () => {
  return (
    <section id="iletisim">
      <header className="wrapper mx-auto">
        <h1 className="pb-4 font-bold text-5xl w-full text-center text-dark-gray dark:text-dark-white">İletişim</h1>
        <p className="desc text-light-teal/60 dark:text-gray-400 italic text-center">
          Herhangi bir sorunuz veya yorumunuz var mı? Bize bir mesaj yazmanız yeterli!
        </p>
      </header>
      <main className="wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3057.462085608038!2d32.7549722!3d39.9757778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU4JzMyLjgiTiAzMsKwNDUnMTcuOSJF!5e0!3m2!1str!2str!4v1709738508694!5m2!1str!2str"
          loading="lazy"
          className="w-full min-h-96 rounded drop-shadow-sm saturate-150 dark:grayscale-[50%] dark:invert"
        ></iframe>
      </main>
      <main className="relative wrapper bg-white dark:bg-dark-black p-4 mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between mt-10 overflow-hidden rounded drop-shadow-sm">
        <ContactInfo />
        <ContactForm />
        {/* <div className="absolute -bottom-20 right-10 lg:-bottom-10 lg:right-52 bg-contact-bg w-64 h-36 -rotate-[40deg]"></div> */}
      </main>
    </section>
  );
};

export default Contact;
