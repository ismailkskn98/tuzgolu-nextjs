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
    <article className="border rounded-md shadow-md">
      <Swiper
        navigation={true}
        pagination={true}
        grabCursor={true}
        className="w-[390px] h-[390px]"
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
            <Image src={item} alt={product.name} width={100} height={100} className="w-full h-full object-cover rounded-t-md" />
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="font-semibold text-center py-3">{product.name}</p>
    </article>
  );
};

export default Product;
