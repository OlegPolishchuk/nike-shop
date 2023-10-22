import dynamic from 'next/dynamic';

export const ProductList = dynamic(() => import('./ProductList').then((mode) => mode.ProductList), {
  ssr: false,
});

export const ProductCard = dynamic(() => import('./ProductCard').then((mode) => mode.ProductCard), {
  ssr: false,
});
