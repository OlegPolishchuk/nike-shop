import React from 'react';

import { ProductCard } from './ProductCard';

import { CartProduct } from '@/components/sections/cart/types/types';

interface Props {
  goods: CartProduct[];
  updateGoods: (goods: CartProduct[]) => void;
}
export const ProductList = ({ goods, updateGoods }: Props) => {
  const handleRemoveProductFromCart = (product: CartProduct) => {
    const currentProduct = goods.find((cartProduct) => cartProduct === product);

    updateGoods(goods.filter((item) => item !== currentProduct));
  };

  const handleUpdateProductCount = (product: CartProduct) => {
    updateGoods(
      goods.map((goods) =>
        product.id === goods.id && product.size === goods.size ? product : goods,
      ),
    );
  };

  return (
    <div>
      {goods.map((item) => (
        <ProductCard
          key={item.id + item.size}
          good={item}
          removeFromCart={handleRemoveProductFromCart}
          updateCount={handleUpdateProductCount}
        />
      ))}
    </div>
  );
};
