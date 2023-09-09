import React, { ComponentPropsWithRef } from 'react';

export const NavArrowIcon = (props: ComponentPropsWithRef<'svg'>) => {
  return (
    <svg
      aria-hidden='true'
      className='pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h'
      focusable='false'
      viewBox='0 0 24 24'
      role='img'
      width='24px'
      height='24px'
      fill='none'
      {...props}
    >
      <path stroke='currentColor' strokeWidth='1.5' d='M8.474 18.966L15.44 12 8.474 5.033'></path>
    </svg>
  );
};
