import { graphql } from '@/graphql/generated';

export const getSectionPopularQuery = graphql(`
  query getSectionTrend($id: ID, $locale: I18NLocaleCode) {
    sectionTrend(id: $id, locale: $locale) {
      data {
        id
        attributes {
          ...SectionTrendFragment
        }
      }
    }
  }
`);
