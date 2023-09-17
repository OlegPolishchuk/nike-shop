import React, { useRef, useState } from 'react';

import { flushSync } from 'react-dom';
import { useInView } from 'react-intersection-observer';

import { ItemCard } from '@/common/ui';
import { SectionTitle } from '@/components';
import { SliderLeftButton, SliderRightButton } from '@/components/buttons';
import { BaseSection } from '@/components/sections';

const itemsList = Array.from({ length: 5 });

export const ItemCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { ref: lastItemRef, inView } = useInView({
    threshold: 1,
  });

  const selectedRef = useRef<HTMLLIElement>(null);

  const onNextClick = () => {
    if (!selectedRef.current) return;

    flushSync(() => {
      if (currentIndex < itemsList.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    });

    selectedRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  const onBackClick = () => {
    if (!selectedRef.current) return;

    flushSync(() => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    });

    selectedRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  const isBackDisabled = currentIndex === 0;
  const isNextDisabled = inView || currentIndex == itemsList.length - 1;

  const getRef = (index: number) => {
    if (index === currentIndex) return selectedRef;
    if (index === itemsList.length - 1) return lastItemRef;

    return null;
  };

  return (
    <BaseSection>
      <div className={'flex w-full items-center justify-between'}>
        <SectionTitle title={'Popular Right Now'} />

        <div className={'flex gap-3'}>
          <SliderLeftButton disabled={isBackDisabled} onClick={onBackClick} />
          <SliderRightButton disabled={isNextDisabled} onClick={onNextClick} />
        </div>
      </div>

      <div className={'pb-[30px]'}>
        <ul className={'flex gap-4 overflow-hidden'}>
          {itemsList.map((item, index) => (
            <li key={index} ref={getRef(index)}>
              <ItemCard
                category='Shoes'
                title='Air Jordan 1 Low OG'
                imgSrc={'/images/card_item_img.webp'}
                price='140'
              />
            </li>
          ))}
        </ul>
      </div>
    </BaseSection>
  );
};
