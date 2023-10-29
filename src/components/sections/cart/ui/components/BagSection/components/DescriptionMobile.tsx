import React from 'react';

import { Typography } from '@/common/ui';

export const DescriptionMobile = () => {
  return (
    <div className={'mt-4 flex w-full justify-center gap-3 md:hidden'}>
      <Typography tag={'span'} variant={'body-1'}>
        4 Items
      </Typography>
      <Typography tag={'span'} variant={'body-1'}>
        |
      </Typography>
      <Typography tag={'span'} variant={'body-1'}>
        &#x24; 557
      </Typography>
    </div>
  );
};
