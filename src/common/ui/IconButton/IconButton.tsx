import React, { ComponentPropsWithRef } from 'react';

interface Props extends ComponentPropsWithRef<'button'> {
  icon: React.ReactNode;
}

export const IconButton = ({ icon, className, ...restProps }: Props) => {
  return (
    <button
      className={`flex items-center justify-center rounded-full p-[6px] hover:bg-gray-200 ${className}`}
      {...restProps}
    >
      {icon}
    </button>
  );
};
