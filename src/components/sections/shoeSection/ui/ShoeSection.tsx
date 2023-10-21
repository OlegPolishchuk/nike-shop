import React from 'react';

import { Medias } from './components/Medias';
import { Sizes } from './components/Sizes';

import { Button, LikeIcon, Typography } from '@/common/ui';
import { BaseSection } from '@/components/sections';
import { GetSectionShoeQuery } from '@/graphql/__generated__';
import { addProductToLocalStorage } from '@/services';

interface Props {
  sectionShoe: GetSectionShoeQuery['sectionShoe'];
}

export const ShoeSection = ({ sectionShoe }: Props) => {
  const { options, sizes } = sectionShoe.data.attributes;
  const { title, tag, price, description, medias, mainImage } = options;

  const allMedias = [mainImage.data, ...medias.data];

  const handleAddProductToBag = () => {
    addProductToLocalStorage(sectionShoe.data);
  };

  return (
    <BaseSection className={'mb-[70px]'}>
      <div
        className={
          'relative mx-auto gap-[30px] md:grid md:grid-cols-[minmax(300px,650px),minmax(200px,500px)]'
        }
      >
        <div
          className={
            'relative mb-[50px] h-0 min-h-[300px] overflow-y-hidden pb-[100%] md:sticky md:top-[50px] md:mb-0'
          }
        >
          <Medias medias={allMedias} title={title} />
        </div>

        <div className={'flex flex-col gap-4'}>
          <div>
            <Typography tag={'p'} variant={'title-2'}>
              {title}
            </Typography>
            <Typography tag={'p'} variant={'title-3'}>
              {tag}
            </Typography>
          </div>

          <Typography tag={'p'} variant={'title-3'}>
            &#36; {price}
          </Typography>

          <div className={'my-6'}>
            <Sizes sizes={sizes} />
          </div>

          <div className={'flex w-[300px] flex-col gap-2 self-center'}>
            <Button size={'md'} onClick={handleAddProductToBag}>
              Add to Bag
            </Button>

            <Button size={'md'} variant={'outlined'} endIcon={<LikeIcon />}>
              Favorite
            </Button>
          </div>

          <Typography tag={'div'} className={'mt-10 font-normal'} variant={'title-3'}>
            {description}
          </Typography>
        </div>
      </div>
    </BaseSection>
  );
};
