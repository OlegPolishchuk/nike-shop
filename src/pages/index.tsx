import { useQuery } from '@apollo/client';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import {
  getBannerSection,
  getHomePage,
  getMainTitleSection,
  getMembershipSection,
  getPopularSection,
  getTrendsSection,
} from '@/api';
import { Banner, ItemCardCarousel, MainTitle, Membership, VideoBanner } from '@/components';
import { getMainLayout } from '@/components/layouts';
import { Trends } from '@/components/sections';
import {
  GetHomePageDocument,
  HomePage,
  HomePageEntity,
  useGetHomePageQuery,
} from '@/graphql/__generated__';
import { createApolloClient } from '@/graphql/apollo-client';
import {
  GetSectionBannerQuery,
  GetSectionMainTitleQuery,
  GetSectionMembershipQuery,
  GetSectionPopularQuery,
  GetSectionTrendQuery,
} from '@/graphql/client';
import { getHomePageQuery } from '@/graphql/documents/queries/getHomePage';

interface Props {
  sectionMainTitle: GetSectionMainTitleQuery['sectionMainTitle'];
  bannerSection: GetSectionBannerQuery['bannerSection'];
  sectionMembership: GetSectionMembershipQuery['sectionMembership'];
  sectionTrend: GetSectionTrendQuery['sectionTrend'];
  sectionPopular: GetSectionPopularQuery['sectionPopular'];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { homePage } = await getHomePage();

  const attributes = homePage.data.attributes;

  const { sectionMainTitle } = await getMainTitleSection(attributes.section_main_title?.data?.id);
  const { bannerSection } = await getBannerSection(attributes.banner_section?.data?.id);
  const { sectionMembership } = await getMembershipSection(attributes.section_membership?.data.id);
  const { sectionTrend } = await getTrendsSection(attributes.section_trend?.data?.id);
  const { sectionPopular } = await getPopularSection(attributes.section_popular?.data?.id);

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
