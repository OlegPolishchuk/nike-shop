import React from 'react';

import clsx from 'clsx';

import { Typography } from '@/common/ui';
import { GetSectionShoeQuery, SizeFragment } from '@/graphql/__generated__';
import { Nullable } from '@/types/types';

interface Props {
  sizes: GetSectionShoeQuery['sectionShoe']['data']['attributes']['sizes'];
  chosenSize: Nullable<SizeFragment>;
  setSize: (size: SizeFragment) => void;
  isValid?: boolean;
}

export const Sizes = ({ sizes, setSize, chosenSize, isValid }: Props) => {
  const handleChoseSize = (size: SizeFragment) => {
    setSize(size);
  };

  return (
    <div
      className={clsx(
        'grid grid-cols-2 gap-2 border p-1',
        isValid ? 'border-transparent' : 'border-red-500',
      )}
    >
      {sizes.Sizes.map(({ inStock, title, id }) => (
        <button
          key={id}
          className={clsx(
            'rounded-md border px-[clamp(1.75rem,2.5rem)] py-5',
            'hover:border-black-100',
            inStock ? 'border-gray-200' : '!text-gray-250 border-gray-100 hover:border-gray-100  ',
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
