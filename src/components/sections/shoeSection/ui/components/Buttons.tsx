import React from 'react';

import Link from 'next/link';

import { Button, LikeIcon, Typography } from '@/common/ui';

interface Props {
  handleAddProductToBag: () => void;
  handleToggleFavoriteProduct: () => void;
  isInCart: boolean;
  isFavorite: boolean;
}

export const Buttons = ({
  isInCart,
  handleAddProductToBag,
  handleToggleFavoriteProduct,
  isFavorite,
}: Props) => {
  return (
    <>
      {isInCart ? (
        <div className={'flex flex-col gap-2 text-center'}>
          <Typography variant={'title-2'}>This product has already been added to cart</Typography>

          <Link
            href={`${window.location.origin}/cart`}
            className={'underline hover:text-black-200'}
          >
            <Typography tag={'span'} variant={'body-1'}>
              see cart
            </Typography>
          </Link>
        </div>
      ) : (
        <Button size={'md'} onClick={handleAddProductToBag}>
          Add to Bag
        </Button>
      )}

      <Button
        size={'md'}
        variant={'outlined'}
        onClick={handleToggleFavoriteProduct}
        endIcon={<LikeIcon fill={isFavorite ? '#f87171' : '#fff'} />}
      >
        Favorite
      </Button>
    </>
  );
};
