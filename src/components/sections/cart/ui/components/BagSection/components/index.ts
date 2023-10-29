import dynamic from 'next/dynamic';

export const ProductList = dynamic(() => import('./ProductList').then((mode) => mode.ProductList), {
  ssr: false,
});

export const ProductCard = dynamic(() => import('./ProductCard').then((mode) => mode.ProductCard), {
  ssr: false,
});

export const DescriptionMobile = dynamic(
  () => import('./DescriptionMobile').then((mode) => mode.DescriptionMobile),
  {
    ssr: false,
  },
);
