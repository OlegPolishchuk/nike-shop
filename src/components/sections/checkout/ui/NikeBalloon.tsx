import React from 'react';

import clsx from 'clsx';
import Image from 'next/image';

import { Typography } from '@/common/ui';
import { Store } from '@/types/types';

interface Props {
  store: Store;
  className?: string;
}

export const NikeBalloon = ({ store, className }: Props) => {
  return (
    <div
      className={clsx(
        'flex w-48 max-w-[250px] flex-col gap-2 rounded-md border border-black bg-light p-2',
        className && className,
      )}
    >
      <Typography className={'text-center'} variant={'title-4'}>
        {store.name}
      </Typography>

      <div className={'relative aspect-square w-full rounded-md'}>
        <Image src={store.imageUrl} alt={store.name} fill className={'rounded-md'} />
      </div>

      <div>
        <Typography variant={'title-5'}>
          Phone: <span className={'text-black-200'}>{store.phone}</span>
        </Typography>

        <Typography variant={'title-5'}>
          Address: <span className={'text-black-200'}>{store.address.address1}</span>
        </Typography>
      </div>
    </div>
  );
};
