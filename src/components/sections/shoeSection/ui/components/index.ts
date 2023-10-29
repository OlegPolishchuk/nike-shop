import dynamic from 'next/dynamic';

export { Medias } from './Medias';
export { Sizes } from './Sizes';

export const Buttons = dynamic(() => import('./Buttons').then((mode) => mode.Buttons), {
  ssr: false,
});
