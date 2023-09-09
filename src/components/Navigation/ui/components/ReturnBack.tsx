import React from 'react';

import { NavArrowIcon, Typography } from '@/common/ui';

interface Props {
  title: string;
  onClick: () => void;
}

export const ReturnBack = ({ onClick, title }: Props) => {
  return (
    <div className={'mb-[28px] mt-[60px] flex items-center gap-8'}>
      <button onClick={onClick} className={'flex items-center gap-5'}>
        <NavArrowIcon className={'rotate-180'} />

        <Typography variant={'body-1'}>{title}</Typography>
      </button>
    </div>
  );
};
