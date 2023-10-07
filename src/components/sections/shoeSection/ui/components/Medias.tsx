import React, { useState } from 'react';

import clsx from 'clsx';

import { ImageFromCms } from '@/components';
import { SliderLeftButton, SliderRightButton } from '@/components/buttons';
import { GetSectionShoeQuery } from '@/graphql/__generated__';

interface Props {
  title: string;
  medias: GetSectionShoeQuery['sectionShoe']['data']['attributes']['options']['medias']['data'];
}

export const Medias = ({ medias, title }: Props) => {
  const [activeSlideUrl, setActiveSlideUrl] = useState(medias[0].attributes.url);

  const handleChangeActiveSlide = (url: string) => {
    setActiveSlideUrl(url);
  };

  const handleChangeSlide = (direction: 'prev' | 'next') => {
    const currentSlide = medias.find((slide) => activeSlideUrl === slide.attributes.url);
    if (!currentSlide) return;

    const currentSlideIndex = medias.indexOf(currentSlide);
    let nextSlideIndex = medias.length > currentSlideIndex + 1 ? currentSlideIndex + 1 : 0;

    if (direction === 'prev') {
      nextSlideIndex = currentSlideIndex === 0 ? medias.length - 1 : currentSlideIndex - 1;
    }

    setActiveSlideUrl(medias[nextSlideIndex].attributes.url);
  };

  return (
    <div className={'flex w-full gap-4'}>
      <div>
        <div className={'hidden h-full flex-col justify-between md:flex'}>
          {medias.map((mediaItem, index) => (
            <div
              key={index}
              className={clsx(
                'relative h-[60px] w-[60px] rounded-md border-2 border-transparent ',
                activeSlideUrl === mediaItem.attributes.url && 'border-gray-300',
              )}
              style={{
                borderColor:
                  activeSlideUrl === mediaItem.attributes.url ? '#7e7e7e' : 'transparent',
              }}
              onMouseEnter={() => handleChangeActiveSlide(mediaItem.attributes.url)}
            >
              <ImageFromCms
                className={'rounded-md'}
                src={mediaItem.attributes.url}
                alt={title}
                priority
                fill
              />
            </div>
          ))}
        </div>
      </div>

      <div className={'relative h-0 min-h-[300px] w-full pb-[100%] md:max-w-[530px]'}>
        <ImageFromCms src={activeSlideUrl} alt={title} priority fill className={'rounded-md'} />

        <SliderLeftButton
          className={'absolute bottom-5 left-5 bg-light'}
          onClick={() => handleChangeSlide('prev')}
        />
        <SliderRightButton
          className={'absolute bottom-5 right-5 bg-light'}
          onClick={() => handleChangeSlide('next')}
        />
      </div>
    </div>
  );
};
