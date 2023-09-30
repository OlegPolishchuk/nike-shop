import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@/common/ui';
import { ImageFromCms } from '@/components';
import { MembershipCardFragment } from '@/graphql/__generated__';

const BaseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

interface Props {
  card: MembershipCardFragment;
}

export const MembershipCard = ({ card }: Props) => {
  const { title, link, image, subtitle } = card;

  return (
    <div className='relative h-0 min-h-[300px] w-full pb-[100%]'>
      <Link href={link}>
        <ImageFromCms
          src={image.data.attributes.url}
          alt={'membership'}
          fill
          className='h-full w-full'
        />

        <div className={'absolute top-[80%] flex w-full flex-col  justify-center px-5'}>
          <Typography variant={'sub-title'}>{subtitle}</Typography>

          <Typography variant={'title-2'}>{<title></title>}</Typography>
        </div>
      </Link>
    </div>
  );
};
