import React from 'react';

import { CloseIcon, IconButton } from '@/common/ui';

interface Props {
  onClick: () => void;
  className?: string;
}

export const CloseButton = ({ onClick, className }: Props) => {
  return (
    <IconButton
      icon={<CloseIcon className={'h-[28px] w-[28px]'} />}
      onClick={onClick}
      className={`${className && className}`}
    />
  );
};
