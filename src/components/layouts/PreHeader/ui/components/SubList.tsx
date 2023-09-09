import React from 'react';

import Link from 'next/link';

import { ListItem } from '../../types/types';

import { Typography } from '@/common/ui';

interface Props {
  title: string;
  sublist: ListItem[];
}
export const SubList = ({ sublist, title }: Props) => {
  return (
    <div
      className={
        'invisible absolute right-0 top-[64px] w-full min-w-[240px] translate-y-[-20px] bg-light px-[16px] py-[24px] opacity-0 [transition:opacity_.2s,visibility_.1s,transform_.25s] group-hover/sublist:visible  group-hover/sublist:translate-y-0 group-hover/sublist:opacity-100 sm:right-0 sm:top-[34px]'
      }
    >
      <Typography variant={'body-1'} className={'mb-[14px] text-[16px]'}>
        {title}
      </Typography>

      <div className={'flex flex-col'}>
        {sublist.map((sublink, index) => (
          <Link
            href={sublink.href}
            key={index}
            className={'py-[4px] text-black-200 hover:text-black-100'}
          >
            <Typography tag={'span'} variant={'body-2'} className={'text-[14px]'}>
              {sublink.title}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  );
};
