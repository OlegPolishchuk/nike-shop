import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';

import { useLocalStorageState } from '@/common/hooks/useStorage';
import { Good } from '@/components/sections/goodsSection/types/types';
import { QueryProvider } from '@/providers/queryProvider/QueryProvider';
import { localStorageWrapper } from '@/services';

interface Props {
  children: ReactNode;
}

const FavoriteProductContext = createContext<Good[]>([]);
const SetFavoriteProductContext = createContext<(goods: Good[]) => void>(() => {});

export const useGetFavoriteGoods = () => {
  return useContext(FavoriteProductContext);
};

export const useSetFavoriteGoods = () => {
  return useContext(SetFavoriteProductContext);
};

export const useIsFavorite = () => {
  const allGoods = useGetFavoriteGoods();

  return (productId: string) => {
    const isThisProductFavorite = allGoods.find((product) => product.id === productId);

    return !!isThisProductFavorite;
  };
};

export const useToggleFavorite = () => {
  const setFavorite = useSetFavoriteGoods();
  const isThisProductFavorite = useIsFavorite();

  return (good: Good) => {
    const allGoods = (localStorageWrapper.get('goods') || []) as Good[];

    if (isThisProductFavorite(good.id)) {
      return setFavorite(allGoods.filter((product) => product.id !== good.id));
    }

    setFavorite([good, ...allGoods]);
  };
};

export const FavoriteProductsProvider = ({ children }: Props) => {
  const [favoriteGoods, setFavoriteProducts] = useLocalStorageState<Good[]>('goods', []);

  const [products, setProducts] = useState<Good[]>(favoriteGoods);

  const setGoods = useCallback((goods: Good[]) => {
    setProducts(goods);
    setFavoriteProducts(goods);
  }, []);

  return (
    <FavoriteProductContext.Provider value={products}>
      <SetFavoriteProductContext.Provider value={setGoods}>
        <QueryProvider>{children}</QueryProvider>
      </SetFavoriteProductContext.Provider>
    </FavoriteProductContext.Provider>
  );
};
