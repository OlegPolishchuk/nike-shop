import { graphql } from '@/graphql/generated';

export const HomePageFragment = graphql(`
  fragment HomePageFragment on HomePage {
    section_main_title {
      data {
        id
      }
    }
    banner_section {
      data {
        id
      }
    }
    section_trend {
      data {
        id
      }
    }
    section_popular {
      data {
        id
      }
    }
    section_membership {
      data {
        id
      }
    }
  }
`);
