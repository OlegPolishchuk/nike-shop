import { PlaceMarkPosition } from '../types/types';

import { balloonMarginLeft, balloonMarginTop } from '@/components/sections/checkout/constants/map';

export const getBalloonPosition = (placeMarkPosition: PlaceMarkPosition) => {
  return {
    x: placeMarkPosition.x + balloonMarginTop,
    y: placeMarkPosition.y - balloonMarginLeft,
  };
};

export const getMapContainerCenter = (container: React.RefObject<HTMLElement>) => {
  const element = container.current as HTMLElement;
  const rect = element.getBoundingClientRect();

  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const centerX = rect.left + scrollLeft + rect.width / 2;
  const centerY = rect.top + scrollTop + rect.height / 2;

  return { x: centerX, y: centerY };
};

export const roundStringCoordinate = (coordinate: string) => {
  const numberValue = parseFloat(coordinate);
  return parseFloat(numberValue.toFixed(1));
};
