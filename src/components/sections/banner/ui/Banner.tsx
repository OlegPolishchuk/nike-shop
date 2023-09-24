import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import { bannerData } from '../constants/bannerData';
import { useInitializeBanner } from '../hooks/useInitializeBanner';

import { Typography } from '@/common/ui';
import { GetSectionBannerQuery } from '@/graphql/__generated__';

type BannerData = GetSectionBannerQuery['bannerSection']['data']['attributes'];

interface Props {
  className?: string;
  data: BannerData;
}

export const Banner = ({ className, data }: Props) => {
  const { translateUl } = useInitializeBanner();

  return (
    <div
      className={clsx(
        'relative z-10 h-[58px] overflow-hidden whitespace-nowrap  bg-gray-100 pt-[10px] shadow-[inset_0_-1px_0_0_#e5e5e5]',
        className,
      )}
    >
      <ul
        className={clsx('inline-block w-full [transition:transform_.5s]')}
        style={{ transform: `translate(-${translateUl}%)` }}
      >
        {bannerData.map((item) => (
          <li key={item.id} className={`inline-block h-full w-full text-center `}>
            <Typography variant={'body-1'} className={'mb-[8px]'}>
              {item.title}
            </Typography>

            <Link href={item.href}>
              <Typography variant={'body-2'} tag={'span'} className={'underline'}>
                {item.link}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
