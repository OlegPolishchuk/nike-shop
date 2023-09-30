import React from 'react';

import { TrendCard } from '@/common/ui';
import { SectionTitle } from '@/components';
import { BaseSection } from '@/components/sections';
import { GetSectionTrendQuery, SectionTrend } from '@/graphql/__generated__';

interface Props {
  data: GetSectionTrendQuery['sectionTrend']['data']['attributes'];
}

export const Trends = ({ data }: Props) => {
  const { SectionTitle: title, card: cards } = data;

  return (
    <BaseSection>
      <SectionTitle title={title} />

      <div className={'flex flex-col gap-20 md:grid md:grid-cols-3 md:gap-3'}>
        {cards.map((card) => (
          <TrendCard key={card.id} card={card} />
        ))}
      </div>
    </BaseSection>
  );
};
