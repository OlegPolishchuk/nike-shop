import React from 'react';

import { ProductCard } from './ProductCard';

import { CartProduct } from '@/components/sections/cart/types/types';

interface Props {
  goods: CartProduct[];
  updateGoods: (goods: CartProduct[]) => void;
}
export const ProductList = ({ goods, updateGoods }: Props) => {
  const handleRemoveProductFromCart = (product: CartProduct) => {
    updateGoods(goods.filter((item) => item.id !== product.id));
  };

  return (
    <div>
      {goods.map((item) => (
        <ProductCard key={item.id} good={item} removeFromCart={handleRemoveProductFromCart} />
      ))}
    </div>
  );
};
