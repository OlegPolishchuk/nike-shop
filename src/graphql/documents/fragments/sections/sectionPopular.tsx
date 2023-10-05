import { graphql } from '@/graphql/generated';

export const SectionPopularFragment = graphql(`
  fragment SectionPopularFragment on SectionPopular {
    sectionTitle
    card {
      ...ShoeCarouselCard
    }
    updatedAt
  }
`);
