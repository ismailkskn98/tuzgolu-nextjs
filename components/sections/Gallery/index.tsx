import { FC } from 'react';
import style from '@/styles/Gallery.module.css';

const Gallery: FC = () => {
  return (
    <section id="galeri">
      <header className="wrapper">
        <h1 className="pb-4 font-bold text-5xl w-full text-center">Galeri</h1>
        <p className="desc text-light-teal/60 dark:text-gray-400 italic text-center">Dükkan Fotoraf Galerimiz</p>
      </header>
      <main className={`${style.gallery} wrapper`}></main>
    </section>
  );
};

export default Gallery;
