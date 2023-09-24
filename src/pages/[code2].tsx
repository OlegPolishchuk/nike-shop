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
import { GetSectionBannerQuery, GetSectionMainTitleQuery, gql } from '@/graphql/client';

const Header = dynamic(() => import('../components').then((mode) => mode.Header), { ssr: false });

export const getStaticPaths: GetStaticPaths = async () => {
  const { countries } = await gql.getCountries();
  const paths = countries.data.map((country) => ({ params: { code2: country.attributes.code2 } }));

  return { fallback: true, paths };
};

export const getStaticProps: GetStaticProps<{
  sectionMainTitle: GetSectionMainTitleQuery['sectionMainTitle'];
  bannerSection: GetSectionBannerQuery['bannerSection'];
}> = async ({ params, locale }) => {
  const { code2 } = params as { code2: string };
  const { countries } = await gql.getCountries();
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

  return {
    props: {
      sectionMainTitle,
      bannerSection,
    },
  };
};

export default function Home({
  sectionMainTitle,
  bannerSection,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log('sectionMainTitle =', sectionMainTitle);
  console.log('bannerSection =', bannerSection);
  return (
    <>
      <PreHeader />
      <Header />

      {bannerSection && <Banner data={bannerSection.data.attributes} className={'mb-[48px]'} />}

      {sectionMainTitle && (
        <VideoBanner videoBannerData={sectionMainTitle.data.attributes.Video.data.attributes} />
      )}

      {sectionMainTitle && <MainTitle data={sectionMainTitle.data.attributes} />}

      <ItemCardCarousel />

      <Membership />

      <Footer />
    </>
  );
}
