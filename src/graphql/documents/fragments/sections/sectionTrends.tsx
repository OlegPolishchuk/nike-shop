import { graphql } from '@/graphql/generated';

export const SectionTrendFragment = graphql(`
  fragment SectionTrendFragment on SectionTrend {
    SectionTitle
    card {
      ...TrendCard
    }
    updatedAt
  }
`);
