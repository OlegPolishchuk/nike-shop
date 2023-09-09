import dynamic from 'next/dynamic';

import { PreHeader } from '@/components';

const Header = dynamic(() => import('../components').then((mode) => mode.Header), { ssr: false });

export default function Home() {
  return (
    <>
      <PreHeader />
      <Header />
    </>
  );
}
