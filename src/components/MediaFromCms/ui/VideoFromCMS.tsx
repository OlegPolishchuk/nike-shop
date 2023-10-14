import React, { ComponentPropsWithRef } from 'react';

const BaseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || '';

type Props = ComponentPropsWithRef<'video'>;
export const VideoFromCms = ({ src, ...restProps }: Props) => {
  return (
    <video muted className='h-full w-full' preload='auto' {...restProps}>
      <source src={BaseUrl + src} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
    </video>
  );
};
