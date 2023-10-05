import React, { useRef, useState } from 'react';

import { flushSync } from 'react-dom';
import { useInView } from 'react-intersection-observer';

import { ItemCard } from '@/common/ui';
import { SectionTitle } from '@/components';
import { SliderLeftButton, SliderRightButton } from '@/components/buttons';
import { BaseSection } from '@/components/sections';
import { GetSectionPopularQuery } from '@/graphql/__generated__';

interface Props {
  data: GetSectionPopularQuery['sectionPopular']['data']['attributes'];
}

export const ItemCardCarousel = ({ data }: Props) => {
  const { card: cards } = data;

  const [currentIndex, setCurrentIndex] = useState(0);

  const { ref: lastItemRef, inView } = useInView({
    threshold: 1,
  });

  const selectedRef = useRef<HTMLLIElement>(null);

  const lastCardIndex = cards.length - 1;

  const onNextClick = () => {
    if (!selectedRef.current) return;

    flushSync(() => {
      if (currentIndex < lastCardIndex) {
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
  const isNextDisabled = inView || currentIndex == lastCardIndex;

  const getRef = (index: number) => {
    if (index === currentIndex) return selectedRef;
    if (index === lastCardIndex) return lastItemRef;

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
          {cards.map((card, index) => (
            <li key={card.id} ref={getRef(index)}>
              <ItemCard
                category={card.tag}
                title={card.title}
                imgSrc={card.media.data.attributes.url}
                price={card.price}
                link={card.link}
              />
            </li>
          ))}
        </ul>
      </div>
    </BaseSection>
  );
};
