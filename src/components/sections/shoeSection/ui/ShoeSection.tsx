import React, { useRef, useState } from 'react';

import { Medias } from './components/Medias';
import { Sizes } from './components/Sizes';

import { Button, LikeIcon, Typography } from '@/common/ui';
import { BaseSection } from '@/components/sections';
import { CartProduct } from '@/components/sections/cart/types/types';
import { GetSectionShoeQuery, SizeFragment } from '@/graphql/__generated__';
import { useLocalStorageState } from '@/hooks/useStorage';
import { Nullable } from '@/types/types';

interface Props {
  sectionShoe: GetSectionShoeQuery['sectionShoe'];
}

export const ShoeSection = ({ sectionShoe }: Props) => {
  const [chosenSize, chooseSize] = useState<Nullable<SizeFragment>>(null);

  const [cartProducts, setProductToCart] = useLocalStorageState<CartProduct[]>('goods', []);

  const isSizeChosen = useRef(false);

  const { options, sizes } = sectionShoe.data.attributes;
  const { title, tag, price, description, medias, mainImage } = options;

  const allMedias = [mainImage.data, ...medias.data];

  const handleAddProductToBag = () => {
    if (!chosenSize) return;

    const productToCart: CartProduct = {
      ...sectionShoe.data,
      size: chosenSize.title,
      count: 1,
    };

    setProductToCart([productToCart, ...cartProducts]);
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
            <Sizes sizes={sizes} chosenSize={chosenSize} setSize={chooseSize} />
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
