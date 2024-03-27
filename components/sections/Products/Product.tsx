import Image from 'next/image';
import { FC } from 'react';
import { Product } from '@/types/types';
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCreative, Pagination, Navigation } from 'swiper/modules';

type Props = {
  product: Product;
};

const Product: FC<Props> = ({ product }) => {
  return (
    <article className={`shadow-md rounded-lg p-5 bg-light-white dark:bg-dark-black flex flex-col items-center gap-4`}>
      <Swiper
        navigation={true}
        pagination={true}
        grabCursor={true}
        className=" w-[300px] h-[300px] lg:w-[390px] lg:h-[390px] relative"
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative, Pagination, Navigation]}
      >
        {product.images.map((item, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center">
            <Image
              src={item}
              alt={product.name}
              width={100}
              height={100}
              className="w-full h-full object-cover rounded object-center-"
            />
            {product.id == 1 && (
              <p className="w-[101%] text-center py-2 absolute bottom-9 left-1/2 -translate-x-1/2 backdrop-blur-xl bg-light-white/60 text-dark-gray dark:text-dark-white dark:bg-dark-black/60 text-lg font-semibold">
                Parça No: 010 41 27
              </p>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="font-semibold text-lg text-center capitalize">{product.name}</p>
    </article>
  );
};

export default Product;
