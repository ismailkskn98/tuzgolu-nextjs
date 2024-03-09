/* eslint-disable jsx-a11y/alt-text */
import { FC } from 'react';
import style from '@/styles/Gallery.module.css';
import Image from 'next/image';
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

type PhotoItem = {
  href: string;
  img: {
    src: string;
    alt: string;
  };
};

const photoItems: PhotoItem[] = [
  {
    href: '/images/gallery/1.jpg',
    img: {
      alt: 'Araç Giriş',
      src: '/images/gallery/1.jpg',
    },
  },
  {
    href: '/images/gallery/2.jpg',
    img: {
      alt: 'Araç Giriş',
      src: '/images/gallery/2.jpg',
    },
  },
  {
    href: '/images/gallery/3.jpg',
    img: {
      alt: 'Ofis',
      src: '/images/gallery/3.jpg',
    },
  },
  {
    href: '/images/gallery/4.jpg',
    img: {
      alt: 'Hediyeler',
      src: '/images/gallery/4.jpg',
    },
  },
  {
    href: '/images/gallery/8.jpg',
    img: {
      alt: 'Ofis',
      src: '/images/gallery/8.jpg',
    },
  },
  {
    href: '/images/gallery/5.jpg',
    img: {
      alt: 'Ofis',
      src: '/images/gallery/5.jpg',
    },
  },
  {
    href: '/images/gallery/6.jpg',
    img: {
      alt: 'Depo',
      src: '/images/gallery/6.jpg',
    },
  },
  {
    href: '/images/gallery/7.jpg',
    img: {
      alt: 'Depo',
      src: '/images/gallery/7.jpg',
    },
  },
];

const Gallery: FC = () => {
  return (
    <section id="galeri">
      <header className="wrapper">
        <h1 className="pb-4 font-bold text-5xl w-full text-center text-dark-gray dark:text-dark-white">Galeri</h1>
        <p className="desc text-light-teal/60 dark:text-gray-400 italic text-center">Dükkan Fotoraf Galerimiz</p>
      </header>
      <main className={`${style.gallery} wrapper`}>
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          {photoItems.map(({ href, img }, i) => (
            <a key={i} href={href}>
              <Image {...img} width={500} height={500} />
            </a>
          ))}
        </LightGallery>
      </main>
    </section>
  );
};

export default Gallery;
