import React, { ReactElement, ReactNode } from 'react';

import dynamic from 'next/dynamic';

import { Footer, PreHeader } from '@/components';

const Header = dynamic(() => import('../../Header').then((mode) => mode.Header), { ssr: false });

interface Props {
  children?: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <section className={'flex min-h-screen flex-col justify-between'}>
      <div>
        <PreHeader />
        <Header />
      </div>
      {children}
      <Footer />
    </section>
  );
};

export const getMainLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};
