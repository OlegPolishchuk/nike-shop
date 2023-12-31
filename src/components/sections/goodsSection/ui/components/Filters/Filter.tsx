import React, { ReactNode, useState } from 'react';

import clsx from 'clsx';

import { ArrowIcon, Typography } from '@/common/ui';

interface Props {
  children: ReactNode;
  title: string;
  isFilterOpen?: boolean;
}

export const Filter = ({ children, title, isFilterOpen = false }: Props) => {
  const [isOpen, setIsOpen] = useState(isFilterOpen);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={'flex flex-col gap-3 border-t border-gray-200 py-4'}>
      <div>
        <label className={'flex w-full cursor-pointer items-center justify-between'}>
          <input type={'checkbox'} className={'sr-only'} checked={isOpen} onChange={handleOpen} />
          <Typography variant={'title-3'}>{title}</Typography>
          <ArrowIcon
            className={clsx(
              'h-[15px] w-[15px] transition-all duration-[.3s]',
              isOpen ? 'rotate-[-90deg]' : 'rotate-90',
            )}
          />
        </label>
      </div>

      <div
        className={clsx(
          'max-h-0 overflow-hidden',
          'linear transition-[max-height] duration-[.3s] ',
          isOpen && 'max-h-[1000px]',
        )}
      >
        {children}
      </div>
    </div>
  );
};
