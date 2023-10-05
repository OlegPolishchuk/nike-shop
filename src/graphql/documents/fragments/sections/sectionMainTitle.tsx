import { graphql } from '@/graphql/generated';

export const SectionMainTitleFragment = graphql(`
  fragment SectionMainTitleFragment on SectionMainTitle {
    MainTitle
    SubTitle
    Video {
      data {
        attributes {
          ...FileFragment
        }
      }
    }
    ShowCollectionLinkButton {
      ...ButtonFragment
    }
    WatchLinkButton {
      ...ButtonFragment
    }
    Title
    publishedAt
  }
`);
