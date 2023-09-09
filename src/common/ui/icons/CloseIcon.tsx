import React, { ComponentPropsWithRef } from 'react';

export const CloseIcon = (props: ComponentPropsWithRef<'svg'>) => {
  return (
    <svg
      aria-hidden='true'
      className='pre-close-icon'
      focusable='false'
      viewBox='0 0 24 24'
      role='img'
      width='18px'
      height='18px'
      fill='none'
      {...props}
    >
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945'
      ></path>
    </svg>
  );
};
