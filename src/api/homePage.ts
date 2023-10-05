import { createApolloClient } from '@/api/apollo-client';
import { gql } from '@/graphql/client';

const client = createApolloClient();

export const getHomePage = async () => {
  return await gql.getHomePage();
};

export const getMainTitleSection = async (id: string, locale = 'en') => {
  return await gql.getSectionMainTitle({ id, locale });
};

export const getBannerSection = async (id: string, locale = 'en') => {
  return await gql.getSectionBanner({ id, locale });
};

export const getMembershipSection = async (id: string, locale = 'en') => {
  return await gql.getSectionMembership({ id, locale });
};

export const getTrendsSection = async (id: string, locale = 'en') => {
  return await gql.getSectionTrend({ id, locale });
};

export const getPopularSection = async (id: string, locale = 'en') => {
  return await gql.getSectionPopular({ id, locale });
};
