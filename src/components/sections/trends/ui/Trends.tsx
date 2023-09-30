import React from 'react';

import { TrendCard } from '@/common/ui';
import { SectionTitle } from '@/components';
import { BaseSection } from '@/components/sections';

export const Trends = () => {
  return (
    <BaseSection>
      <SectionTitle title={'Trending'} />

      <div className={'flex flex-col gap-20 md:grid md:grid-cols-3 md:gap-3'}>
        <TrendCard />
        <TrendCard />
        <TrendCard />
      </div>
    </BaseSection>
  );
};
