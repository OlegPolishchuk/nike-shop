import React from 'react';

import Link from 'next/link';

import { ConverseIcon, JordanIcon } from '@/common/ui';

export const IconList = () => {
  return (
    <ul className={'flex'}>
      <li className={''}>
        <Link href={''} className={'flex w-full px-[12px] hover:fill-black-200'}>
          <JordanIcon className={'fill-inherit'} />
        </Link>
      </li>

      <li className={''}>
        <Link href={''} className={'flex w-full px-[12px] hover:fill-black-200'}>
          <ConverseIcon className={'fill-inherit'} />
        </Link>
      </li>
    </ul>
  );
};
