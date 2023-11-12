import React, { ComponentPropsWithRef, forwardRef } from 'react';

import clsx from 'clsx';

import { Input, Typography } from '@/common/ui';

interface Props extends ComponentPropsWithRef<'input'> {
  isError?: boolean;
  errorMessage?: string;
  className?: string;
  label: string;
}

export const TextField = forwardRef<HTMLInputElement, Props>(
  ({ errorMessage, className, disabled, ...restProps }, ref) => {
    return (
      <div className={clsx('relative w-full pb-[20px]', className && className)}>
        <Input ref={ref} {...restProps} />
        {errorMessage && (
          <span className={'bottom-0s absolute ml-3 text-xs text-red-600'}>{errorMessage}</span>
        )}
      </div>
    );
  },
);
