import { useEffect, useRef } from 'react';

import { useRouter } from 'next/router';

export const usePreviousRoute = () => {
  const previousRoute = useRef('');

  const router = useRouter();
  const handleBeforeHistoryChange = () => {
    previousRoute.current = router.asPath;
  };

  useEffect(() => {
    router.events.on('routeChangeStart', handleBeforeHistoryChange);

    return () => {
      router.events.off('routeChangeComplete', handleBeforeHistoryChange);
    };
  }, [router]);

  return previousRoute.current;
};
