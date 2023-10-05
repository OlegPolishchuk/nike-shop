import { graphql } from '@/graphql/generated';

export const SectionBannerFragment = graphql(`
  fragment SectionBannerFragment on BannerSection {
    card {
      ...BannerCard
    }
  }
`);
