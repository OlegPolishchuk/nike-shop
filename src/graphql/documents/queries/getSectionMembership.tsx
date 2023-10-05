import { graphql } from '@/graphql/generated';

export const getSectionMembershipQuery = graphql(`
  query getSectionMembership($id: ID, $locale: I18NLocaleCode) {
    sectionMembership(id: $id, locale: $locale) {
      data {
        id
        attributes {
          ...SectionMembershipFragment
        }
      }
    }
  }
`);
