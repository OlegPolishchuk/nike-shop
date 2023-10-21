import React, { ComponentPropsWithRef } from 'react';

export const TrashIcon = (props: ComponentPropsWithRef<'svg'>) => {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 24 24'
      role='img'
      width='24px'
      height='24px'
      fill='none'
      {...props}
    >
      <path
        stroke='currentColor'
        strokeMiterlimit='10'
        strokeWidth='1.5'
        d='M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3'
      ></path>
    </svg>
  );
};
