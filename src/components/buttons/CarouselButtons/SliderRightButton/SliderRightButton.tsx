import React from 'react';

import clsx from 'clsx';

import { ArrowIcon, IconButton } from '@/common/ui';

interface Props {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}
export const SliderRightButton = ({ className, onClick, disabled }: Props) => {
  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'h-[48px] w-[48px] bg-gray-200 transition-all hover:bg-gray-250 disabled:bg-gray-100',
        className,
      )}
      icon={<ArrowIcon className={'h-[16px] w-[16px] fill-black-200'} />}
    />
  );
};
