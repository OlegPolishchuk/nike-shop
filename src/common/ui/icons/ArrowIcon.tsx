import React, { ComponentPropsWithRef } from 'react';

export const ArrowIcon = (props: ComponentPropsWithRef<'svg'>) => {
  return (
    <svg
      aria-hidden='true'
      fill='#111'
      height='30px'
      width='30px'
      viewBox='0 0 185.4 300'
      {...props}
    >
      <path d='M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z'></path>
    </svg>
  );
};
