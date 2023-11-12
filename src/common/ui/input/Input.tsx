import React, { ComponentPropsWithRef, forwardRef, useId } from 'react';

import clsx from 'clsx';

interface Props extends ComponentPropsWithRef<'input'> {
  isError?: boolean;
  className?: string;
  label: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ isError, required, placeholder, label, ...restProps }, ref) => {
    return (
      <div className='group relative'>
        <input
          type='text'
          {...restProps}
          className={clsx(
            'peer w-full rounded-[8px] px-[12px] py-[16px] font-semibold outline-none',
            isError ? 'text-red-600' : 'text-black',
          )}
          ref={ref}
          placeholder=' '
        />

        <label
          className={clsx(
            'peer-placeholder-shown:text-md text-xm pointer-events-none absolute left-[9px] top-px -translate-y-1/2 transform px-1 transition-all duration-300 group-focus-within:!top-px group-focus-within:!text-xs group-focus-within:!text-black peer-placeholder-shown:top-1/2 peer-placeholder-shown:font-semibold',
            isError ? 'text-red-600 group-focus-within:!text-red-600' : 'text-black',
          )}
        >
          {`${label} ${required ? '*' : ''}`}
        </label>

        <fieldset
          className={clsx(
            'pointer-events-none invisible absolute inset-0 mt-[-9px] rounded border peer-placeholder-shown:visible',
            isError
              ? 'border-red-600 text-red-600 group-focus-within:!border-red-600'
              : 'border-black',
          )}
        >
          <legend className='invisible ml-2 max-w-[0.01px] whitespace-nowrap px-0 text-sm transition-all duration-300 group-focus-within:max-w-full group-focus-within:px-1'>
            {`${label} ${required ? '*' : ''}`}
          </legend>
        </fieldset>

        <fieldset
          className={clsx(
            'pointer-events-none visible absolute inset-0 mt-[-9px] rounded border  group-hover:border-gray-700 peer-placeholder-shown:invisible',
            isError
              ? 'border-red-600 text-red-600 group-focus-within:!border-red-600'
              : 'border-black',
          )}
        >
          <legend className='invisible ml-2 max-w-full whitespace-nowrap px-1 text-sm'>
            {`${label} ${required ? '*' : ''}`}
          </legend>
        </fieldset>
      </div>
    );
  },
);
