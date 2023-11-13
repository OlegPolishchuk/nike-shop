import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';

import { useSessionStorageState } from '@/common/hooks/useStorage';
import { CartProduct } from '@/components/sections/cart/types/types';
import { Good } from '@/components/sections/goodsSection/types/types';
import { QueryProvider } from '@/providers/queryProvider/QueryProvider';

interface Props {
  children: ReactNode;
}

const CartContext = createContext<CartProduct[]>([]);
const SetCartContext = createContext<(goods: CartProduct[]) => void>(() => {});

export const useGetCartGoods = () => {
  return useContext(CartContext);
};

export const useSetCartGoods = () => {
  return useContext(SetCartContext);
};

export const CartProvider = ({ children }: Props) => {
  const [goods, setGoods] = useSessionStorageState<CartProduct[]>('goods', []);
  const [cartGoods, setCartGoods] = useState<CartProduct[]>(goods);

  const handleUpdateGoods = useCallback((goods: CartProduct[]) => {
    setCartGoods(goods);
    setGoods(goods);
  }, []);

  return (
    <CartContext.Provider value={cartGoods}>
      <SetCartContext.Provider value={handleUpdateGoods}>
        <QueryProvider>{children}</QueryProvider>
      </SetCartContext.Provider>
    </CartContext.Provider>
  );
};
