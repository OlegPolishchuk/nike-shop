import { graphql } from '@/graphql/generated';

export const getSectionPopularQuery = graphql(`
  query getSectionPopular($id: ID, $locale: I18NLocaleCode) {
    sectionPopular(id: $id, locale: $locale) {
      data {
        id
        attributes {
          ...SectionPopularFragment
        }
      }
    }
  }
`);
