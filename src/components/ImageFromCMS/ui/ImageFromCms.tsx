import React from 'react';

import { ImageProps } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

const BaseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || '';

export const ImageFromCms = ({ src, alt, ...restProps }: ImageProps) => {
  return <Image src={BaseUrl + src} alt={alt} {...restProps} />;
};
