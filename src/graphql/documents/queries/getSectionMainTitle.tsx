import { graphql } from '@/graphql/generated';

export const getSectionMainTitleQuery = graphql(`
  query getSectionMainTitle($id: ID, $locale: I18NLocaleCode) {
    sectionMainTitle(id: $id, locale: $locale) {
      data {
        id
        attributes {
          ...SectionMainTitleFragment
        }
      }
    }
  }
`);
