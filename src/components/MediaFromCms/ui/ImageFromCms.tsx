import React from 'react';

import { ImageProps } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

const BaseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || '';

export const ImageFromCms = ({ src, alt, className, ...restProps }: ImageProps) => {
  return (
    <Image
      src={BaseUrl + src}
      alt={alt}
      {...restProps}
      priority
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      className={className}
    />
  );
};
