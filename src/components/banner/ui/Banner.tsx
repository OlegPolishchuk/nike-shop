import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { set } from 'zod';

import { bannerData } from '../constants/bannerData';
import { useInitializeBanner } from '../hooks/useInitializeBanner';

import { Typography } from '@/common/ui';

export const Banner = () => {
  const { translateUl } = useInitializeBanner();

  return (
    <div
      className={'relative z-10 h-[58px] overflow-hidden  whitespace-nowrap bg-gray-100 pt-[10px]'}
    >
      <ul
        className={`inline-block translate-x-[-${translateUl}%] w-full [transition:transform_.5s]`}
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
