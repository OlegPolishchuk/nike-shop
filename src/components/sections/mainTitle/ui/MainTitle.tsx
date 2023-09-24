import React from 'react';

import { Button, Typography } from '@/common/ui';
import { GetSectionMainTitleQuery } from '@/graphql/__generated__';

type TitleData = GetSectionMainTitleQuery['sectionMainTitle']['data']['attributes'];

interface Props {
  data: TitleData;
}

export const MainTitle = ({ data }: Props) => {
  console.log(data);
  const { MainTitle, SubTitle, ShowCollectionLinkButton, WatchLinkButton } = data;
  return (
    <section className={'mx-auto flex w-[85%] flex-col gap-[24px] text-center'}>
      <Typography
        variant={'title-1'}
        className={'text-[48px] uppercase leading-[60px] md:text-[72px]'}
        tag={'h1'}
        dangerousHTML={MainTitle}
      >
        {/*MOVEMENT ESSENTIALS FOR <br /> YOUR EVERY MOOD*/}
      </Typography>

      <Typography variant={'body-1'}>
        {/*Discover leggings, bras, sneakers, and comfy basics that let you move freely and express*/}
        {/*what*/}
        {SubTitle}
      </Typography>

      <div className={'flex justify-center gap-[10px]'}>
        <div>
          <Button>{ShowCollectionLinkButton.label}</Button>
        </div>
        <div>
          <Button>{WatchLinkButton.label}</Button>
        </div>
      </div>
    </section>
  );
};
