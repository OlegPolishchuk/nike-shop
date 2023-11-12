import '@/styles/fonts.css';
import '@/styles/globals.css';
import { ReactElement } from 'react';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { PrevRouteProvider, ProductProvider } from '@/providers';
import { FavoriteProductsProvider } from '@/providers/favoriteProductProvider/FavoriteProductProvider';

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
      <PrevRouteProvider>
        <ProductProvider>
          <FavoriteProductsProvider>
            {getLayout(<Component {...pageProps} />)}

            <div id={'container_tooltip'} className={'absolute top-0 z-[99999]'} />
          </FavoriteProductsProvider>
        </ProductProvider>
      </PrevRouteProvider>
    </>
  );
}
