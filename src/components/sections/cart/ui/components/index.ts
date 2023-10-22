import dynamic from 'next/dynamic';

export { ProductCard } from './BagSection/components';
export { BagSection } from './BagSection/BagSection';
export { CheckoutSection } from './CheckoutSection';
export { CheckoutMobile } from './CheckoutMobile';

export const SummarySection = dynamic(
  () => import('./SummarySection').then((mode) => mode.SummarySection),
  {
    ssr: false,
  },
);
