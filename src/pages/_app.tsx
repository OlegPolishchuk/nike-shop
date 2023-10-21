import '@/styles/fonts.css';
import '@/styles/globals.css';
import { ReactElement } from 'react';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { ProductProvider } from '@/providers';

export type NextPageWithLayout<P = object> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <ProductProvider>{getLayout(<Component {...pageProps} />)}</ProductProvider>
    </>
  );
}
