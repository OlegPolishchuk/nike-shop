import { graphql } from '@/graphql/generated';

export const BannerCardFragment = graphql(`
  fragment BannerCard on ComponentUiBannerCard {
    id
    Title
    description
  }
`);
