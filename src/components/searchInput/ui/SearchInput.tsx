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
        `middle absolute flex origin-right overflow-hidden bg-light [transition:width_.3s_.1s,right_.3s_.1s]`,
        fullInput
          ? 'right-0 top-0 w-full items-center px-[36px] max-[768px]:top-[3px] max-[768px]:mt-[8px] max-[768px]:px-2'
          : 'right-[130px] w-[180px] max-[960px]:right-[185px] max-[768px]:right-[192px] max-[768px]:top-[11px]  max-[768px]:w-[38px] max-[640px]:right-[173px]',
        className && className,
      )}
    >
      {fullInput && <Logo className={'max-[768px]:hidden'} />}

      <div className={'grow max-[768px]:grow-0'}>
        <div
          className={clsx(
            'h-[40px] rounded-[20px] bg-gray-100 [transition:transform_.35s,width_.3s] max-[768px]:ml-0',
            fullInput
              ? `ml-5  w-full translate-x-[0] max-[768px]:mr-[10px] min-[768px]:w-[500px]`
              : 'w-[180px] max-[768px]:w-[24px] max-[768px]:bg-light',
          )}
        >
          <SearchButton
            className={'absolute left-[2px] top-[2px]'}
            onClick={handleToggleFullInput}
          />

          <input
            className={clsx(
              'h-full w-full  rounded-[20px] bg-transparent py-[8px] pl-[48px] pr-[20px] [transition:visibility_.1s_.1s] hover:bg-gray-200 focus:outline-none',
              fullInput ? 'max-[768px]:visible' : 'max-[768px]:invisible',
            )}
            placeholder={'Search'}
          />
        </div>
      </div>

      <button
        className={clsx(
          'ml-auto inline scale-x-0 scale-y-0 self-center [transition:transform_.1s_.1s] max-[640px]:mr-2',
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
