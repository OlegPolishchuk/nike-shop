import React from 'react';

import { Typography } from '@/common/ui';
import { BaseSection } from '@/components/sections';

export const NothingToShow = () => {
  return (
    <BaseSection className={'text-center'}>
      <Typography className={'text-center'} variant={'title-2'}>
        There is nothing to show yet =(
      </Typography>
      <Typography variant={'title-3'}>Please try another time</Typography>
    </BaseSection>
  );
};
