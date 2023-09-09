import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import { SubNavItem } from '../../types/types';

import { ReturnBack } from './ReturnBack';

import { Typography } from '@/common/ui';

interface Props {
  sublist: SubNavItem[][];
  className?: string;
  onHide: () => void;
}

export const SubItemMobile = ({ sublist, className, onHide }: Props) => {
  return (
    <div
      className={clsx(
        'fixed right-0 top-0 z-20 h-full w-[100%] translate-x-[100%] overflow-y-auto bg-white px-[30px] [transition:all_.2s_.1s]',
        className && className,
      )}
    >
      <ReturnBack title={'All'} onClick={onHide} />

      {sublist.map((subItem, index) => (
        <div
          key={index}
          className={
            'flex min-w-[16%] translate-y-[-10px] flex-col flex-col px-[14px] opacity-0 [transition:opacity_.2s_.2s,transform_.5s] group-hover/subNav:translate-y-0 group-hover/subNav:opacity-100'
          }
        >
          {subItem.map((subItem, index) => (
            <div key={index} className={'mb-[20px] flex flex-col'}>
              <div className={'flex items-center justify-between '}>
                <Typography variant={'sub-title'} className={'mb-[16px] text-gray-300'}>
                  {subItem.title}
                </Typography>
              </div>

              {subItem.items.map((subItem, index) => (
                <Link
                  href={subItem.href}
                  key={index}
                  className={'mb-[8px] text-gray-300 hover:text-black-100'}
                >
                  <Typography tag={'span'} variant={'body-2'}>
                    {subItem.title}
                  </Typography>
                </Link>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
