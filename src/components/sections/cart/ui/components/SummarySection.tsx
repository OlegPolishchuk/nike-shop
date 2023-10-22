import React from 'react';

import { Typography } from '@/common/ui';

interface Props {
  summary: { goodsCount: number; subtotal: number; estimates: number; total: number };
}

export const SummarySection = ({ summary }: Props) => {
  const { goodsCount, estimates, subtotal, total } = summary;

  const wrapperClassName = 'items-between grid grid-cols-[70%_30%]';

  return (
    <>
      <div className={'py-6 text-center md:text-left'}>
        <Typography variant={'title-2'}>Summary</Typography>
      </div>

      <div className={'flex flex-col gap-3'}>
        <div className={wrapperClassName}>
          <Typography variant={'title-3'}>Subtotal</Typography>
          <Typography variant={'body-1'} className={'text-right'}>
            &#x24; {subtotal}
          </Typography>
        </div>

        <div className={wrapperClassName}>
          <Typography variant={'title-3'}>Estimated Shipping & Handling</Typography>
          <Typography variant={'body-1'} className={'text-right'}>
            &#x24; {estimates}
          </Typography>
        </div>

        <div className={wrapperClassName}>
          <Typography variant={'title-3'}>Items</Typography>
          <Typography variant={'body-1'} className={'text-right'}>
            {goodsCount}
          </Typography>
        </div>

        <div className={'flex justify-between border-t border-gray-200 py-[40px]'}>
          <Typography variant={'title-3'}>Total</Typography>
          <Typography variant={'body-1'} className={'text-right'}>
            &#x24; {total}
          </Typography>
        </div>
      </div>
    </>
  );
};
