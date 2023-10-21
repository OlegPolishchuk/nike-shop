import React, { useEffect, useState } from 'react';

import { ProductCard } from '@/components/sections/cart/ui/ProductCard';
import { Good } from '@/components/sections/goodsSection/types/types';
import { getAllProductsFromLocalStorage } from '@/services';

export const ProductList = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  useEffect(() => {
    const goods = getAllProductsFromLocalStorage();

    setGoods(goods);
  }, []);

  return (
    <div>
      {goods.map((item) => (
        <ProductCard key={item.id} good={item} />
      ))}
    </div>
  );
};
