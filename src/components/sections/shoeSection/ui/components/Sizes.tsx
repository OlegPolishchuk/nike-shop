import React, { useState } from 'react';

import clsx from 'clsx';

import { Typography } from '@/common/ui';
import {
  GetSectionShoeQuery,
  KidSizeFragment,
  MenSizesFragment,
  SizeFragment,
  WomenSizesFragment,
} from '@/graphql/__generated__';
import { Nullable } from '@/types/types';

interface Props {
  sizes: GetSectionShoeQuery['sectionShoe']['data']['attributes']['sizes'];
}

export const Sizes = ({ sizes }: Props) => {
  const [chosenSize, chooseSize] = useState<Nullable<SizeFragment>>(null);

  const handleChoseSize = (size: SizeFragment) => {
    chooseSize(size);
  };

  console.log(chosenSize);

  return (
    <div className={'grid grid-cols-2 gap-2'}>
      {sizes.Sizes.map(({ inStock, title, id }) => (
        <button
          key={id}
          className={clsx(
            'rounded-md border px-[clamp(1.75rem,2.5rem)] py-5',
            inStock ? 'border-gray-200' : 'border-gray-100 text-gray-250 hover:border-gray-100',
            'hover:border-black-100',
            chosenSize?.id === id && '!border-black-100',
          )}
          disabled={!inStock}
          onClick={() => handleChoseSize({ id, inStock, title })}
        >
          <Typography variant={'body-1'}>{title}</Typography>
        </button>
      ))}
    </div>
  );
};