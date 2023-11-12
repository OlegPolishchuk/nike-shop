import dynamic from 'next/dynamic';

export const Tooltip = dynamic(
  import('./ui/Tooltip').then((mode) => mode.Tooltip),
  {
    ssr: false,
  },
);
