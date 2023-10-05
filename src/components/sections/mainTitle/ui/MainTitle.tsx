import React from 'react';

import Markdown from 'react-markdown';

import { Button, Typography } from '@/common/ui';
import { GetSectionMainTitleQuery } from '@/graphql/__generated__';

type TitleData = GetSectionMainTitleQuery['sectionMainTitle']['data']['attributes'];

interface Props {
  data: TitleData;
}

export const MainTitle = ({ data }: Props) => {
  const { MainTitle, SubTitle, ShowCollectionLinkButton, WatchLinkButton } = data;

  return (
    <section className={'mx-auto flex w-[85%] flex-col gap-[24px] text-center'}>
      <Typography
        variant={'title-1'}
        className={'text-[48px] uppercase leading-[60px] md:text-[72px]'}
        tag={'h1'}
        dangerousHTML={MainTitle}
      />

      <Typography variant={'body-1'}>{SubTitle}</Typography>

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
