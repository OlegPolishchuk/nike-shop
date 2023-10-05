import { graphql } from '@/graphql/generated';

export const SectionMembershipFragment = graphql(`
  fragment SectionMembershipFragment on SectionMembership {
    title
    subtitle
    JoinUsButton {
      ...ButtonFragment
    }
    SignInButton {
      ...ButtonFragment
    }
    card {
      ...MembershipCard
    }
    publishedAt
  }
`);
