import React, { useState } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import { Typography } from '@/common/ui';
import { SubNavItem } from '@/components/Navigation/types/types';

interface Props {
  sublist: SubNavItem[][];
  isShowSibList: boolean;
  setShowSubList: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SubItemNav = ({ sublist, isShowSibList, setShowSubList }: Props) => {
  const handleSubItemClick = () => {
    setShowSubList(false);
  };

  return (
    <div
      className={clsx(
        'absolute left-0 right-0 top-[60px] z-50 flex max-h-[800px] origin-top justify-center bg-light p-[40px] pt-[16px]  [transition:opacity_.2s,visibility_.2s,transform_.2s]',
        isShowSibList
          ? 'group-hover/subNav:visible group-hover/subNav:scale-y-100 group-hover/subNav:opacity-100'
          : 'invisible  scale-y-0  opacity-0  ',
      )}
    >
      {sublist.map((subItem, index) => (
        <div
          key={index}
          className={clsx(
            'flex min-w-[16%]  flex-col px-[6px] pt-[16px]  [transition:opacity_.2s_.2s,transform_.5s]',
            isShowSibList
              ? 'group-hover/subNav:translate-y-0 group-hover/subNav:opacity-100'
              : 'translate-y-[-10px] opacity-0',
          )}
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
                  onClick={handleSubItemClick}
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
