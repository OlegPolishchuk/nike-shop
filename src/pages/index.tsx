import { useQuery } from '@apollo/client';
import { query } from 'express';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import {
  getBannerSection,
  getHomePage,
  getMainTitleSection,
  getMembershipSection,
  getPopularSection,
  getTrendsSection,
} from '@/api';
import { createApolloClient } from '@/api/apollo-client';
import { Banner, ItemCardCarousel, MainTitle, Membership, VideoBanner } from '@/components';
import { getMainLayout } from '@/components/layouts';
import { Trends } from '@/components/sections';
import {
  GetSectionBannerQuery,
  GetSectionMainTitleQuery,
  GetSectionMembershipQuery,
  GetSectionPopularQuery,
  GetSectionTrendQuery,
} from '@/graphql/client';
import { getHomePageQuery } from '@/graphql/documents/queries/getHomePage';
import { getSectionMainTitleQuery } from '@/graphql/documents/queries/getSectionMainTitle';
import { graphql } from '@/graphql/generated';

interface Props {
  sectionMainTitle: GetSectionMainTitleQuery['sectionMainTitle'];
  bannerSection: GetSectionBannerQuery['bannerSection'];
  sectionMembership: GetSectionMembershipQuery['sectionMembership'];
  sectionTrend: GetSectionTrendQuery['sectionTrend'];
  sectionPopular: GetSectionPopularQuery['sectionPopular'];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const client = createApolloClient();

  const { data } = await client.query({ query: getHomePageQuery });

  console.log('data inb serverside = ', data);

  // const { homePage } = await getHomePage();
  const { homePage } = data;

  if (!homePage || !homePage.data) {
    return {
      notFound: true,
    };
  }

  const section_main_titleRef =
    homePage.data.attributes?.[' $fragmentRefs']?.HomePageFragmentFragment.section_main_title?.data
      ?.id;
  console.log('section_main_titleRef =', section_main_titleRef);
  const bannerSectionRef =
    homePage.data.attributes?.[' $fragmentRefs']?.HomePageFragmentFragment.banner_section;
  const sectionMembershipRef =
    homePage.data.attributes?.[' $fragmentRefs']?.HomePageFragmentFragment.section_membership;
  const sectionTrendRef =
    homePage.data.attributes?.[' $fragmentRefs']?.HomePageFragmentFragment.section_trend;
  const sectionPopularRef =
    homePage.data.attributes?.[' $fragmentRefs']?.HomePageFragmentFragment.section_popular;

  // const { sectionMainTitle } = await getMainTitleSection(attributes.section_main_title?.data?.id);
  // const { bannerSection } = await getBannerSection(attributes.banner_section?.data?.id);
  // const { sectionMembership } = await getMembershipSection(attributes.section_membership?.data.id);
  // const { sectionTrend } = await getTrendsSection(attributes.section_trend?.data?.id);
  // const { sectionPopular } = await getPopularSection(attributes.section_popular?.data?.id);

  const { data: sectionMainTitle } = await client.query({
    query: getSectionMainTitleQuery,
    variables: { id: section_main_titleRef?.data?.id },
  });
  const { data: bannerSection } = await client.query({
    query: getSectionMainTitleQuery,
    variables: { id: bannerSectionRef?.data?.id },
  });
  const { data: sectionMembership } = await client.query({
    query: getSectionMainTitleQuery,
    variables: { id: sectionMembershipRef?.data?.id },
  });
  const { data: sectionTrend } = await client.query({
    query: getSectionMainTitleQuery,
    variables: { id: sectionTrendRef?.data?.id },
  });
  const { data: sectionPopular } = await client.query({
    query: getSectionMainTitleQuery,
    variables: { id: sectionPopularRef?.data?.id },
  });

  return {
    props: {
      sectionMainTitle,
      bannerSection,
      sectionMembership,
      sectionTrend,
      sectionPopular,
    },
  };
};

const Home = ({
  sectionMainTitle,
  bannerSection,
  sectionMembership,
  sectionTrend,
  sectionPopular,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data } = useQuery(getHomePageQuery, {});

  return (
    <>
      {bannerSection && <Banner data={bannerSection.data.attributes} className={'mb-[48px]'} />}
      {sectionMainTitle && (
        <VideoBanner data={sectionMainTitle.data.attributes.Video.data.attributes} />
      )}
      {sectionMainTitle && <MainTitle data={sectionMainTitle.data.attributes} />}
      {sectionPopular && <ItemCardCarousel data={sectionPopular.data.attributes} />}
      {sectionTrend && <Trends data={sectionTrend.data.attributes} />}
      {sectionMembership && <Membership data={sectionMembership.data.attributes} />}
    </>
  );
};

Home.getLayout = getMainLayout;

export default Home;
