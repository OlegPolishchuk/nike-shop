import dynamic from 'next/dynamic';

export { CartButton } from './CartButton/CartButton';
export { SearchButton } from './SearchButton/SearchButton';
export { MenuButton } from './MenuButton/MenuButton';
export { UserButton } from './UserButton/UserButton';
export { CloseButton } from './CloseButton/CloseButton';
export { NavArrowButton } from './NavArrowButton/NavArrowButton';
export { SliderLeftButton, SliderRightButton } from './CarouselButtons';
export { ShowFiltersButton } from './ShowFiltersButton/ShowFiltersButton';
export { TrashButton } from './TrashButton/TrashButton';

export const LikeButton = dynamic(
  import('./LikeButton/LikeButton').then((mode) => mode.LikeButton),
  {
    ssr: false,
  },
);
