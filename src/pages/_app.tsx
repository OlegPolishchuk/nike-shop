import '@/styles/fonts.css';
import '@/styles/globals.css';
import { ReactElement } from 'react';

import { ApolloProvider } from '@apollo/client';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { createApolloClient } from '@/api/apollo-client';

export type NextPageWithLayout<P = object> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const client = createApolloClient();

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      {getLayout(
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>,
      )}
    </>
  );
}
