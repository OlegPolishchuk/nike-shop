import React from 'react';

import { TypographyTag, TypographyVariant } from '@/common/ui/typography/types';

type Props<Tag extends TypographyTag> = {
  variant: TypographyVariant;
  tag?: TypographyTag;
  children?: React.ReactNode;
  className?: string;
  dangerousHTML?: string;
};

export const Typography = <T extends TypographyTag>({
  children,
  variant,
  className,
  dangerousHTML,
  tag: Tag = 'p',
}: Props<T>) => {
  return (
    <>
      {dangerousHTML ? (
        <Tag
          className={`${variant} ${className ? className : ''}`}
          dangerouslySetInnerHTML={{ __html: dangerousHTML }}
        >
          {children}
        </Tag>
      ) : (
        <Tag className={`${variant} ${className ? className : ''}`}>{children}</Tag>
      )}
    </>
  );
};
