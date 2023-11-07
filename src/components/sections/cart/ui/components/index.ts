import dynamic from 'next/dynamic';

export { ProductCard } from './BagSection/components';
export { BagSection } from './BagSection/BagSection';

export const SummarySection = dynamic(
  () => import('./SummarySection').then((mode) => mode.SummarySection),
  {
    ssr: false,
  },
);

export const CheckoutSection = dynamic(
  () => import('./CheckoutSection').then((mode) => mode.CheckoutSection),
  {
    ssr: false,
  },
);

export const CheckoutMobile = dynamic(
  () => import('./CheckoutMobile').then((mode) => mode.CheckoutMobile),
  {
    ssr: false,
  },
);
