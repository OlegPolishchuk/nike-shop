import React from 'react';

import { Button, Typography } from '@/common/ui';

export const MainTitle = () => {
  return (
    <section className={'mx-auto flex w-[85%] flex-col gap-[24px] text-center'}>
      <Typography
        variant={'title-1'}
        className={'text-[48px] uppercase leading-[60px] md:text-[72px]'}
        tag={'h1'}
      >
        MOVEMENT ESSENTIALS FOR <br /> YOUR EVERY MOOD
      </Typography>

      <Typography variant={'body-1'}>
        Discover leggings, bras, sneakers, and comfy basics that let you move freely and express
        what
      </Typography>

      <div className={'flex justify-center gap-[10px]'}>
        <div>
          <Button>Shop the collection</Button>
        </div>
        <div>
          <Button>Watch</Button>
        </div>
      </div>
    </section>
  );
};
