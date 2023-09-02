import React from 'react';

import { TypographyTag, TypographyVariant } from '@/common/ui/typography/types';

type Props<Tag extends TypographyTag> = {
  variant: TypographyVariant;
  tag?: TypographyTag;
  children: React.ReactNode;
  className?: string;
};

export const Typography = <T extends TypographyTag>({
  children,
  variant,
  className,
  tag: Tag = 'p',
}: Props<T>) => {
  return <Tag className={`${variant} ${className}`}>{children}</Tag>;
};
