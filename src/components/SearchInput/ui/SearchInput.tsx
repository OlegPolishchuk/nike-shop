import React, { useState } from 'react';

import clsx from 'clsx';

import { Logo, Typography } from '@/common/ui';
import { SearchButton } from '@/components/buttons';

interface Props {
  className?: string;
}

export const SearchInput = ({ className }: Props) => {
  const [fullInput, setFullInput] = useState(false);

  const handleToggleFullInput = () => {
    setFullInput((prevState) => !prevState);
  };

  return (
    <div
      className={clsx(
        `middle absolute flex origin-right  bg-light [transition:width_.3s_.1s,right_.3s_.1s]`,
        fullInput ? 'right-0 top-0 w-full items-center px-[36px]' : 'right-[130px] w-[180px]',
        className && className,
      )}
    >
      {fullInput && <Logo />}

      <div className={'grow'}>
        <div
          className={clsx(
            'relative ml-auto h-[40px] rounded-[20px] bg-gray-100 [transition:transform_.35s,width_.3s]',
            fullInput ? 'mr-[72px] w-[500px] translate-x-[-30vw]' : 'w-[180px]',
          )}
        >
          <SearchButton
            className={'absolute left-[2px] top-[2px]'}
            onClick={handleToggleFullInput}
          />

          <input
            className={clsx(
              'h-full w-full rounded-[20px] bg-transparent py-[8px] pl-[48px] pr-[20px] [transition:width_.25s,transform_.35s] hover:bg-gray-200 focus:outline-none',
            )}
            placeholder={'Search'}
          />
        </div>
      </div>

      <Typography
        variant={'body-1'}
        className={clsx(
          'ml-auto inline scale-x-0 scale-y-0 self-center [transition:transform_.1s_.1s]',
          fullInput ? 'w-fit scale-x-100 scale-y-100' : 'w-0',
        )}
      >
        Cancel
      </Typography>
    </div>
  );
};
