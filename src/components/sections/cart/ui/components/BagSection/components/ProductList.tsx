import React from 'react';

import { ProductCard } from './ProductCard';

import { useLocalStorageState } from '@/common/hooks/useStorage';
import { CartProduct } from '@/components/sections/cart/types/types';
import { Good } from '@/components/sections/goodsSection/types/types';

interface Props {
  goods: CartProduct[];
  updateGoods: (goods: CartProduct[]) => void;
}
export const ProductList = ({ goods, updateGoods }: Props) => {
  const [favoriteProducts, setFavoriteProducts] = useLocalStorageState<Good[]>('goods', []);

  const isThisProductFavorite = (good: Good) =>
    !!favoriteProducts.find((product) => product.id === good.id);

  const handleRemoveProductFromCart = (product: CartProduct) => {
    const currentProduct = goods.find((cartProduct) => cartProduct === product);

    updateGoods(goods.filter((item) => item !== currentProduct));
  };

  const handleToggleFavoriteProduct = (product: Good) => {
    const productToFavorite: Good = {
      ...product,
    };

    if (isThisProductFavorite(product)) {
      return setFavoriteProducts((prevState) =>
        prevState.filter((product) => product.id !== productToFavorite.id),
      );
    }

    setFavoriteProducts([productToFavorite, ...favoriteProducts]);
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
          isFavorite={isThisProductFavorite(item)}
          handleToggleFavoriteProduct={handleToggleFavoriteProduct}
        />
      ))}
    </div>
  );
};
