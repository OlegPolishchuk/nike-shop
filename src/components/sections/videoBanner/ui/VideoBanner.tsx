import React from 'react';

export const VideoBanner = () => {
  return (
    <section className={'my-[48px] hidden sm:block'}>
      <video autoPlay loop muted className='h-full w-full' preload='auto'>
        <source src={'/videos/banner.mp4'} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
      </video>
    </section>
  );
};
