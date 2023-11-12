import dynamic from 'next/dynamic';

export const CheckoutSection = dynamic(
  import('./ui/CheckoutSection').then((mode) => mode.CheckoutSection),
  {
    ssr: false,
  },
);
