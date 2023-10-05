import { graphql } from '@/graphql/generated';

export const getHomePageQuery = graphql(`
  query getHomePage {
    homePage {
      data {
        id
        attributes {
          ...HomePageFragment
        }
      }
    }
  }
`);
