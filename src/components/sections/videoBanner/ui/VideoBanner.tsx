import React from 'react';

import { GetSectionMainTitleQuery } from '@/graphql/__generated__';
type VideoData =
  GetSectionMainTitleQuery['sectionMainTitle']['data']['attributes']['Video']['data']['attributes'];

interface Props {
  data: VideoData;
}

const BaseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const VideoBanner = ({ data }: Props) => {
  const { url } = data;

  return (
    <section className={'my-[48px] hidden sm:block'}>
      <video autoPlay loop muted className='h-full w-full' preload='auto'>
        {/*<source src={BaseUrl + url} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />*/}
        <source src={'/videos/banner1.mp4'} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
      </video>
    </section>
  );
};
