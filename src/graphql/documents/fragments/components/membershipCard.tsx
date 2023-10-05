import { graphql } from '@/graphql/generated';

export const MembershipCard = graphql(`
  fragment MembershipCard on ComponentUiMembershipCard {
    id
    title
    subtitle
    image {
      data {
        attributes {
          ...FileFragment
        }
      }
    }
    link
  }
`);
