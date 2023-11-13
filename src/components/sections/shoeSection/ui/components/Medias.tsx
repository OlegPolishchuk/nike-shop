import React, { memo, useState } from 'react';

import clsx from 'clsx';

import { ImageFromCms, VideoFromCms } from '@/components';
import { SliderLeftButton, SliderRightButton } from '@/components/buttons';
import { GetSectionShoeQuery, UploadFile, UploadFileEntity } from '@/graphql/__generated__';

interface Props {
  title: string;
  medias: GetSectionShoeQuery['sectionShoe']['data']['attributes']['options']['medias']['data'];
}

export const Medias = memo(({ medias, title }: Props) => {
  const [activeSlide, setActiveSlide] = useState(medias[0].attributes);

  const handleChangeActiveSlide = (slide: UploadFile) => {
    setActiveSlide(slide);
  };

  const handleChangeSlide = (direction: 'prev' | 'next') => {
    const currentSlide = medias.find((slide) => activeSlide.url === slide.attributes.url);
    if (!currentSlide) return;

    const currentSlideIndex = medias.indexOf(currentSlide);
    let nextSlideIndex = medias.length > currentSlideIndex + 1 ? currentSlideIndex + 1 : 0;

    if (direction === 'prev') {
      nextSlideIndex = currentSlideIndex === 0 ? medias.length - 1 : currentSlideIndex - 1;
    }

    setActiveSlide(medias[nextSlideIndex].attributes);
  };

  const isVideo = (slide: UploadFile) => {
    return slide.mime === 'video/mp4';
  };

  return (
    <div className={'flex w-full gap-0 sm:gap-4'}>
      <div>
        <div className={'hidden h-full flex-col justify-between md:flex'}>
          {medias.map((mediaItem, index) => (
            <div
              key={index}
              className={clsx(
                'relative h-[60px] w-[60px] rounded-md border-2 border-transparent ',
                activeSlide === mediaItem.attributes && 'border-gray-300',
              )}
              style={{
                borderColor: activeSlide === mediaItem.attributes ? '#7e7e7e' : 'transparent',
              }}
              onMouseEnter={() => handleChangeActiveSlide(mediaItem.attributes as UploadFile)}
            >
              {isVideo(mediaItem.attributes as UploadFile) ? (
                <VideoFromCms src={mediaItem.attributes.url} />
              ) : (
                <ImageFromCms
                  className={'rounded-md'}
                  src={mediaItem.attributes.url}
                  alt={title}
                  priority
                  fill
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={'relative h-0 min-h-[300px] w-full pb-[100%] md:max-w-[530px]'}>
        {isVideo(activeSlide as UploadFile) ? (
          <VideoFromCms
            autoPlay
            loop
            src={activeSlide.url}
            className={'absolute bottom-0 left-0 right-0 top-0'}
          />
        ) : (
          <ImageFromCms
            key={activeSlide.url}
            src={activeSlide.url}
            alt={title}
            priority
            fill
            className={'rounded-md'}
          />
        )}

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
});
