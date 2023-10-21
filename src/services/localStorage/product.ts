import { Good } from '@/components/sections/goodsSection/types/types';

export const getAllProductsFromLocalStorage = (): Good[] => {
  const products = localStorage.getItem('goods') ?? '[]';

  return JSON.parse(products);
};

export const addProductToLocalStorage = (product: Good) => {
  const allGoods = getAllProductsFromLocalStorage();
  const updatedGoods = [product, ...allGoods];

  localStorage.setItem('goods', JSON.stringify(updatedGoods));
};
