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
        fullInput
          ? 'right-0 top-0 w-full items-center px-[36px] max-[640px]:mt-[8px] max-[640px]:px-2'
          : 'right-[130px] w-[180px] max-[640px]:right-[185px] max-[640px]:top-[11px] max-[640px]:w-[24px]',
        className && className,
      )}
    >
      {fullInput && <Logo className={'max-[640px]:hidden'} />}

      <div className={'grow max-[640px]:grow-0'}>
        <div
          className={clsx(
            'relative ml-auto h-[40px] rounded-[20px] bg-gray-100 [transition:transform_.35s,width_.3s] max-[640px]:ml-0',
            fullInput
              ? 'mr-[72px] w-[500px] translate-x-[-30vw] max-[640px]:mr-[10px] max-[640px]:w-full max-[640px]:translate-x-0'
              : 'w-[180px] max-[640px]:w-[24px] max-[640px]:bg-light',
          )}
        >
          <SearchButton
            className={'absolute left-[2px] top-[2px]'}
            onClick={handleToggleFullInput}
          />

          <input
            className={clsx(
              'h-full w-full rounded-[20px] bg-transparent py-[8px] pl-[48px] pr-[20px] hover:bg-gray-200 focus:outline-none ',
              fullInput ? 'max-[640px]:visible' : 'max-[640px]:invisible',
            )}
            placeholder={'Search'}
          />
        </div>
      </div>

      <button
        className={clsx(
          'ml-auto inline scale-x-0 scale-y-0 self-center [transition:transform_.1s_.1s]',
          fullInput ? 'w-fit scale-x-100 scale-y-100' : 'w-0',
        )}
        onClick={handleToggleFullInput}
      >
        <Typography variant={'body-1'} className={'hover:text-gray-300'}>
          Cancel
        </Typography>
      </button>
    </div>
  );
};
