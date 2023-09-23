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

const Header = dynamic(() => import('../components').then((mode) => mode.Header), { ssr: false });

export default function Home() {
  return (
    <>
      <PreHeader />
      <Header />

      <Banner className={'mb-[48px]'} />

      <VideoBanner />

      <MainTitle />

      <ItemCardCarousel />

      <Membership />

      <Footer />
    </>
  );
}
