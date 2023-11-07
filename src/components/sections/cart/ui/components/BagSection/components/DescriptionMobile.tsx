import React from 'react';

import { Typography } from '@/common/ui';

interface Props {
  summary: { goodsCount: number; subtotal: number; estimates: number; total: number };
}

export const DescriptionMobile = ({ summary }: Props) => {
  const { goodsCount, total, estimates } = summary;

  return (
    <div className={'mt-3 flex flex-col gap-3'}>
      <div className={'grid grid grid-cols-[45%_10%_45%] md:hidden'}>
        <Typography tag={'span'} variant={'body-1'} className={'text-right'}>
          {goodsCount} Items
        </Typography>
        <Typography tag={'span'} variant={'body-1'}>
          |
        </Typography>
        <Typography tag={'span'} variant={'body-1'} className={'text-left'}>
          &#x24; {total}
        </Typography>
      </div>

      {/*<div className={'grid grid grid-cols-[40%_20%_40%] text-black-200 md:hidden'}>*/}
      {/*  <Typography tag={'span'} variant={'body-1'} className={'text-right'}>*/}
      {/*    Estimates*/}
      {/*  </Typography>*/}

      {/*  <Typography tag={'span'} variant={'body-1'}>*/}
      {/*    |*/}
      {/*  </Typography>*/}

      {/*  <Typography tag={'span'} variant={'body-1'} className={'text-left'}>*/}
      {/*    &#x24; {estimates}*/}
      {/*  </Typography>*/}
      {/*</div>*/}
    </div>
  );
};
