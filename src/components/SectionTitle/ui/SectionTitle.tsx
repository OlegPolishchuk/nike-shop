import React from 'react';

import clsx from 'clsx';

import { Typography } from '@/common/ui';

interface Props {
  title: string;
  className?: string;
}
export const SectionTitle = ({ className, title }: Props) => {
  return (
    <Typography variant={'sub-title'} className={clsx(className)}>
      {title}
    </Typography>
  );
};
