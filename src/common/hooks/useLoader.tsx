import { useEffect } from 'react';

import { useRouter } from 'next/router';

export const useLoader = () => {
  const router = useRouter();

  useEffect(() => {
    const startLoading = () => document.body.classList.add('pulse');
    const endLoading = () => document.body.classList.remove('pulse');

    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', endLoading);
    router.events.on('routeChangeError', endLoading);

    return () => {
      router.events.off('routeChangeStart', startLoading);
      router.events.off('routeChangeComplete', endLoading);
      router.events.off('routeChangeError', endLoading);
    };
  }, [router]);
};
