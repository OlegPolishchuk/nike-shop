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
        'invisible absolute right-0 top-[34px] min-w-[240px] translate-y-[-20px] bg-light px-[16px] py-[24px] opacity-0 [transition:opacity_.2s,visibility_0s,transform_.25s]  group-hover/sublist:visible group-hover/sublist:translate-y-0 group-hover/sublist:opacity-100'
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
            className={'text-black-200 hover:text-black-100 py-[4px] text-[14px]'}
          >
            <Typography tag={'span'} variant={'body-2'}>
              {sublink.title}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  );
};
