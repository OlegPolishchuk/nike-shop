import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';

import { Good } from '@/components/sections/goodsSection/types/types';
import { QueryProvider } from '@/providers/queryProvider/QueryProvider';

interface Props {
  children: ReactNode;
}

interface ProductContextData {
  goods: Good[];
  total: number;
}

const ProductContext = createContext<ProductContextData>({ goods: [], total: 0 });
const SetProductContext = createContext<(productData: ProductContextData) => void>(() => {});

export const useGetGoods = () => {
  return useContext(ProductContext);
};

export const useSetGoods = () => {
  return useContext(SetProductContext);
};

export const ProductProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<ProductContextData>({
    goods: [],
    total: 0,
  });

  const setGoods = useCallback(({ goods, total }: ProductContextData) => {
    setProducts({ goods, total });
  }, []);

  return (
    <ProductContext.Provider value={products}>
      <SetProductContext.Provider value={setGoods}>
        <QueryProvider>{children}</QueryProvider>
      </SetProductContext.Provider>
    </ProductContext.Provider>
  );
};
