import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';

import {
  Banner,
  Footer,
  ItemCardCarousel,
  MainTitle,
  Membership,
  PreHeader,
  VideoBanner,
} from '@/components';
import { Trends } from '@/components/sections';
import {
  GetSectionBannerQuery,
  GetSectionMainTitleQuery,
  GetSectionMembershipQuery,
  GetSectionPopularQuery,
  GetSectionTrendQuery,
  gql,
} from '@/graphql/client';

const Header = dynamic(() => import('../components').then((mode) => mode.Header), { ssr: false });

export const getStaticPaths: GetStaticPaths = async () => {
  const { countries } = await gql.getCountries();
  const paths = countries.data.map((country) => ({ params: { code2: country.attributes.code2 } }));

  return { fallback: true, paths };
};

export const getStaticProps: GetStaticProps<{
  sectionMainTitle: GetSectionMainTitleQuery['sectionMainTitle'];
  bannerSection: GetSectionBannerQuery['bannerSection'];
  sectionMembership: GetSectionMembershipQuery['sectionMembership'];
  sectionTrend: GetSectionTrendQuery['sectionTrend'];
  sectionPopular: GetSectionPopularQuery['sectionPopular'];
}> = async ({ params, locale }) => {
  const { code2 } = params as { code2: string };
  const { countries } = await gql.getCountries();
  console.log('code2 =', code2);
  console.log('countries =', countries);
  const country = countries.data.find((country) => country.attributes.code2 === code2);
  console.log('country =', country);
  if (!country) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const { pageHome } = await gql.getPageHome({
    id: country.attributes.page_home.data.id,
    locale,
  });

  console.log('pageHome =', pageHome);

  const { sectionMainTitle } = await gql.getSectionMainTitle({
    id: pageHome.data.attributes.section_main_title?.data.id,
    locale,
  });

  console.log('sectionMainTitle =', sectionMainTitle);

  const { bannerSection } = await gql.getSectionBanner({
    id: pageHome.data.attributes.banner_section?.data.id,
    locale,
  });

  console.log('bannerSection =', bannerSection);

  const { sectionMembership } = await gql.getSectionMembership({
    id: pageHome.data.attributes.banner_section?.data.id,
    locale,
  });

  console.log('sectionMembership =', sectionMembership);

  const { sectionTrend } = await gql.getSectionTrend({
    id: pageHome.data.attributes.banner_section?.data.id,
    locale,
  });

  console.log('sectionTrend =', sectionTrend);

  const { sectionPopular } = await gql.getSectionPopular({
    id: pageHome.data.attributes.banner_section?.data.id,
    locale,
  });

  console.log('sectionPopular =', sectionPopular);

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

export default function Home({
  sectionMainTitle,
  bannerSection,
  sectionMembership,
  sectionTrend,
  sectionPopular,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log('sectionMainTitle =', sectionMainTitle);
  console.log('bannerSection =', bannerSection);
  return (
    <>
      <PreHeader />
      <Header />

      {bannerSection && <Banner data={bannerSection.data.attributes} className={'mb-[48px]'} />}
      {sectionMainTitle && (
        <VideoBanner data={sectionMainTitle.data.attributes.Video.data.attributes} />
      )}
      {sectionMainTitle && <MainTitle data={sectionMainTitle.data.attributes} />}
      {sectionPopular && <ItemCardCarousel data={sectionPopular.data.attributes} />}
      {sectionTrend && <Trends data={sectionTrend.data.attributes} />}
      {sectionMembership && <Membership data={sectionMembership.data.attributes} />}

      <Footer />
    </>
  );
}
