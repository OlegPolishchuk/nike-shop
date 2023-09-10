import React from 'react';

import Link from 'next/link';

import { Typography } from '@/common/ui';
import { SubNavItem } from '@/components/Navigation/types/types';

interface Props {
  sublist: SubNavItem[][];
}

export const SubItemNav = ({ sublist }: Props) => {
  return (
    <div
      className={
        'z-100 invisible absolute left-0 right-0 top-[60px] flex max-h-[800px] origin-top scale-y-0 justify-center bg-light p-[40px] pt-[16px] opacity-0  [transition:opacity_.2s,visibility_.2s,transform_.2s] group-hover/subNav:visible group-hover/subNav:scale-y-100 group-hover/subNav:opacity-100'
      }
    >
      {sublist.map((subItem, index) => (
        <div
          key={index}
          className={
            'flex min-w-[16%] translate-y-[-10px] flex-col px-[6px] pt-[16px] opacity-0 [transition:opacity_.2s_.2s,transform_.5s] group-hover/subNav:translate-y-0 group-hover/subNav:opacity-100'
          }
        >
          {subItem.map((subItem, index) => (
            <div key={index} className={'flex flex-col [&:not(:last-child)]:mb-[40px]'}>
              <Typography variant={'body-1'} className={'mb-[14px]'}>
                {subItem.title}
              </Typography>

              {subItem.items.map((subItem, index) => (
                <Link
                  href={subItem.href}
                  key={index}
                  className={'text-gray-300 hover:text-black-100'}
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
