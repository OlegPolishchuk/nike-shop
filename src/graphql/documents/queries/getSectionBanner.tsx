import { graphql } from '@/graphql/generated';

export const getSectionBannerQuery = graphql(`
  query getSectionBanner($id: ID, $locale: I18NLocaleCode) {
    bannerSection(id: $id, locale: $locale) {
      data {
        id
        attributes {
          ...SectionBannerFragment
        }
      }
    }
  }
`);
