import React from 'react';
import { productItems } from './productItems';
import Product from './Product';

const Products = () => {
  return (
    <section id="yedek-parcalar" className="relative text-dark-gray dark:text-dark-white">
      <header className="wrapper">
        <h1 className="pb-4 font-bold text-5xl w-full text-center">Yedek Parçalar</h1>
        <p className="desc text-light-teal/60 dark:text-gray-400 italic text-center">
          Ürünlerimiz resimlerdeki parçalardan ibaret değildir. Servisimizde
          <span className="font-semibold"> MERCEDES BENZ SPRİNTER </span>araçlarınızın her türlü yedek parçaları mevcuttur.
        </p>
      </header>
      <main className="wrapper flex items-center justify-center gap-10 flex-wrap">
        {productItems.map((product, i) => (
          <Product product={product} key={i} />
        ))}
      </main>
    </section>
  );
};

export default Products;
