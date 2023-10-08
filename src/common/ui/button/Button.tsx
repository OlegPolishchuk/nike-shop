import React, { ComponentPropsWithRef, ReactNode } from 'react';

import clsx from 'clsx';

export type ButtonVariant = 'contained' | 'outlined';
export type ButtonSize = 'sm' | 'md';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode;
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = ({
  children,
  loading,
  startIcon,
  endIcon,
  variant = 'contained',
  className,
  size = 'sm',
  ...props
}: ButtonProps) => {
  const buttonClassName =
    'flex justify-center items-center gap-2 content-center w-full rounded-full align-middle text-sm border-[1.5px]';
  const containedClassName =
    'border-primary bg-primary text-light font-semibold hover:bg-black-200 hover:border-black-200';
  const outlinedClassName = 'border-secondary bg-light text-primary hover:border-primary bg-light';

  const sizeDefaultClassName = 'py-[6px] px-[20px]';
  const sizeMdClassname = 'py-[18px] px-[24px] min-h-[60px]';

  const variantClassName = variant === 'contained' ? containedClassName : outlinedClassName;
  const sizeClassName = size === 'sm' ? sizeDefaultClassName : sizeMdClassname;

  return (
    <button
      type='button'
      className={clsx(buttonClassName, variantClassName, sizeClassName, className)}
      {...props}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
};
