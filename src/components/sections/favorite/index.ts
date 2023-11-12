import { Template } from 'ejs';
import dynamic from 'next/dynamic';

export const FavoriteSection = dynamic(
  import('./ui/FavoriteSection').then((mode) => mode.FavoriteSection),
  {
    ssr: false,
  },
);
