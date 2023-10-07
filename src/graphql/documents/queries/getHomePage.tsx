import { gql } from '@apollo/client';

export const getHomePageQuery = gql(`
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
