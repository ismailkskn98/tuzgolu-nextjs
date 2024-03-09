import { FC } from 'react';
import Image from 'next/image';
import style from '@/styles/About.module.css';

const Content: FC = () => {
  return (
    <main className="wrapper flex flex-col lg:flex-row gap-16">
      <article className="w-full lg:w-[40%] relative flex items-center justify-center">
        <div className="absolute -bottom-6 right-3 lg:-bottom-6 lg:-right-6 bg-light-teal w-10/12 lg:w-full h-full -z-10 rounded"></div>
        <Image
          src="/images/aboutPhoto.svg"
          alt="tuzgolu motorlu araçlar hakkımızda"
          width={500}
          height={500}
          priority={false}
          loading="lazy"
          placeholder="empty"
          className="w-10/12 lg:min-w-full rounded shadow-xl"
        />
      </article>
      <article className={`w-full lg:w-[60%] flex flex-col items-center gap-3`}>
        <h2 className="text-3xl font-semibold mb-3">Biz Kimiz?</h2>
        <ul className={`${style.pLine} flex flex-col items-center gap-3`}>
          <li className={`${style.paragraf}`}>
            <span className="font-semibold">Tuzgölü Motorlu Araçlar</span> mercedes Benz hafif ticari (sprinter) araçlarınızın
            mekanik tamir bakım ve yedek parça Tedariğinin yapılması, yolda kalınan durumlarda yol yardımının sağlanması amacıyla
            sizler için vardır.
          </li>
          <li className={`${style.paragraf}`}>
            Köklü ustalık sanatımızla firmamız bünyesinde yapılan tüm işlerde kazancın iki tarafında yararına olması en büyük
            prensibimizdir.
          </li>
          <li className={`${style.paragraf}`}>
            Sizlere verilen hizmetin her türlü arkasında olduğumuzu taahhüt ederiz. Bizleri ziyaret edebilirsiniz, sizleri
            <span className="font-semibold"> Ankara Yenimahalle</span>’deki servisimizde ağırlamaktan memnuniyet duyarız.
          </li>
          <li className={`${style.paragraf}`}>
            “Gerek servisimizde gerek yolda kalınan durumlarda her türlü bakım onarım tamirat ve mekanik hizmetleri için güvenle
            arayabilirsiniz.”⚙️🔧🛠
          </li>
        </ul>
      </article>
    </main>
  );
};

export default Content;
