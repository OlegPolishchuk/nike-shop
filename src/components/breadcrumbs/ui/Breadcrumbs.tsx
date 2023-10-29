import React from 'react';

import Link from 'next/link';

import { splitSolidText } from '@/common/helpers/splitSolidText';
import { Typography } from '@/common/ui';
import { usePrevRoute } from '@/providers';

export const Breadcrumbs = () => {
  const prevRoute = usePrevRoute();

  const lastUrlParam = prevRoute.split('/').reverse()[0];
  const updatedParam = splitSolidText(lastUrlParam);

  // const isLastPageWasProduct = !isNaN(+updatedParam);

  return (
    <div className={'flex gap-2'}>
      {/*{isLastPageWasProduct && 'goods'}*/}

      <span>/</span>

      <Link href={prevRoute} className={'flex items-center gap-2'}>
        <Typography tag={'span'} variant={'body-1'} className={'hover:text-gray-300'}>
          {updatedParam === '' ? 'Main' : updatedParam}
        </Typography>
      </Link>
    </div>
  );
};
