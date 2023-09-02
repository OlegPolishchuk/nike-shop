import React from 'react';

import Link from 'next/link';

import { ConverseIcon, JordanIcon } from '@/common/ui';

export const IconList = () => {
  return (
    <ul className={'flex'}>
      <li className={''}>
        <Link href={''} className={'hover:fill-black-200 flex w-full px-[12px]'}>
          <JordanIcon className={'fill-inherit'} />
        </Link>
      </li>

      <li className={''}>
        <Link href={''} className={'hover:fill-black-200 flex w-full px-[12px]'}>
          <ConverseIcon className={'fill-inherit'} />
        </Link>
      </li>
    </ul>
  );
};
