import { useEffect, useState } from 'react';

import { bannerData } from '../constants/bannerData';

const BANNER_INTERVAL = 6000;

export const useInitializeBanner = () => {
  const [index, setIndex] = useState(0);
  const [translateUl, setTranslateUl] = useState(0);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      if (index === bannerData.length - 1) {
        setIndex(0);
        setTranslateUl(0);
        return;
      }
      const newIndex = index + 1;

      setTranslateUl(newIndex * 100);
      setIndex(newIndex);
    }, BANNER_INTERVAL);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [index]);

  return {
    translateUl,
  };
};
