import { ApolloClient, InMemoryCache } from '@apollo/client';

export const createApolloClient = () => {
  return new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_STRAPI_API_URL ?? ''}/graphql/playground`,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN || ''}`,
    },
    cache: new InMemoryCache(),
  });
};
