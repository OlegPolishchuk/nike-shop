import React from 'react';

import Link from 'next/link';

import { Typography } from '@/common/ui';
import { NavAboutNike, NavGetHelp, NavGiftCards } from '@/components/layouts/Footer/constants/data';

export const FooterNav = () => {
  return (
    <div className={'flex flex-col gap-5 text-light md:flex-row md:gap-[100px]'}>
      <ul
        className={
          'inline-flex flex-col gap-3 border-b border-light pb-5 uppercase md:border-0 md:pb-0'
        }
      >
        {NavGiftCards.map((item, index) => (
          <li key={index}>
            <Typography variant={'title-5'}>
              <Link href={item.href}>{item.title}</Link>
            </Typography>
          </li>
        ))}
      </ul>

      <ul
        className={
          'inline-flex flex-col gap-3 border-b  border-light pb-5 text-gray-300 md:border-0'
        }
      >
        {NavGetHelp.map((item, index) => (
          <li key={index} className={'hover:text-light'}>
            <Typography variant={'title-5'} className={index === 0 ? 'uppercase text-light' : ''}>
              <Link href={item.href}>{item.title}</Link>
            </Typography>
          </li>
        ))}
      </ul>

      <ul
        className={
          'inline-flex flex-col gap-3 border-b  border-light pb-5 text-gray-300 md:border-0'
        }
      >
        {NavAboutNike.map((item, index) => (
          <li key={index} className={'hover:text-light'}>
            <Typography variant={'title-5'} className={index === 0 ? 'uppercase text-light' : ''}>
              <Link href={item.href}>{item.title}</Link>
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
