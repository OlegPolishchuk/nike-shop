import React, { ReactNode } from 'react';

import clsx from 'clsx';

interface Props {
  children: ReactNode;
  className?: string;
}

export const BaseSection = ({ children, className }: Props) => {
  return (
    <section
      className={clsx(
        'mt-[48px] flex flex-col gap-[24px] px-[14px] pb-[20px] sm:px-[36px]',
        className && className,
      )}
    >
      {children}
    </section>
  );
};
