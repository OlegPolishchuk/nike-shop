import React, { forwardRef } from 'react';

import Link from 'next/link';

import { Typography } from '@/common/ui';
import { ImageFromCms } from '@/components';
import { ShoeCarouselCardFragment } from '@/graphql/__generated__';

interface Props {
  card: ShoeCarouselCardFragment;
}

export const GoodsCard = forwardRef<HTMLDivElement, Props>(({ card }, ref) => {
  const { title, link, price, id, tag, media, section_shoes } = card;
  const { url, alternativeText } = media.data.attributes;
  const { id: goodId } = section_shoes.data[0];

  return (
    <div ref={ref}>
      <Link href={`/goods/${goodId}`}>
        <div className='relative h-0 min-h-[300px] w-full pb-[100%]'>
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
