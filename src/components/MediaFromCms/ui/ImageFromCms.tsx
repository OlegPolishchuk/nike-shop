import React, { useState } from 'react';

import { ImageProps } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

const BaseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || '';

export const ImageFromCms = ({ src, alt, className, ...restProps }: ImageProps) => {
  const [imgSrc, setSrc] = useState(BaseUrl + src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={() => setSrc('../../../../public/images/product-placeholder-wp.jpg')}
      {...restProps}
      priority
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      className={className}
    />
  );
};
