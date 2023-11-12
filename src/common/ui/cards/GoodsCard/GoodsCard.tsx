import React, { forwardRef } from 'react';

import Link from 'next/link';

import { Typography } from '@/common/ui';
import { ImageFromCms } from '@/components';
import { LikeButton } from '@/components/buttons';
import { Good } from '@/components/sections/goodsSection/types/types';
import { Tooltip } from '@/components/tooltip';
import { useIsFavorite } from '@/providers/favoriteProductProvider/FavoriteProductProvider';

interface Props {
  card: Good;
}

export const GoodsCard = forwardRef<HTMLDivElement, Props>(({ card }, ref) => {
  const { attributes, id } = card;
  const { options } = attributes;
  const { title, tag, price, mainImage } = options;
  const { url, alternativeText } = mainImage.data.attributes;

  const isThisProductFavorite = useIsFavorite();

  return (
    <div ref={ref} className={'relative'}>
      <div className={'absolute right-2 top-2 z-20'}>
        <Tooltip title={isThisProductFavorite(card.id) ? 'dislike' : 'like'}>
          <LikeButton good={card} />
        </Tooltip>
      </div>

      <Link href={`/goods/${id}`}>
        <div className='relative h-0 min-h-[180px] w-full pb-[100%]'>
          <ImageFromCms src={url} alt={alternativeText ?? title} fill className='h-full w-full' />
        </div>

        <div className={'mt-3 flex w-full flex-col  justify-between'}>
          <div className={'flex justify-between'}>
            <Typography variant={'body-1'} className={'mb-[10px]'}>
              {title}
            </Typography>

            <Typography className={'min-w-[50px]'} variant={'body-1'}>
              &#36; {price}
            </Typography>
          </div>

          <Typography variant={'body-1'} className={'text-gray-300'}>
            {tag}
          </Typography>
        </div>
      </Link>
    </div>
  );
});

GoodsCard.displayName = 'GoodsCard';
