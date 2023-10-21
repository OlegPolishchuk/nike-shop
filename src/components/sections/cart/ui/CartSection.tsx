import React from 'react';

import Image from 'next/image';

import { ProductList } from './ProductList';

import { Button, Typography } from '@/common/ui';
import { BaseSection } from '@/components/sections';

export const CartSection = () => {
  return (
    <BaseSection className={'mt-2'}>
      <div className={'flex flex-col gap-10 md:flex-row'}>
        <div className={'max-w-[700px] md:w-[60%]'}>
          <div className={'py-6 text-center md:text-left'}>
            <Typography variant={'title-2'}>Bag</Typography>

            <div className={'mt-4 flex w-full justify-center gap-3 md:hidden'}>
              <Typography tag={'span'} variant={'body-1'}>
                4 Items
              </Typography>
              <Typography tag={'span'} variant={'body-1'}>
                |
              </Typography>
              <Typography tag={'span'} variant={'body-1'}>
                &#x24; 557
              </Typography>
            </div>
          </div>

          <ProductList />
        </div>

        <div className={'max-w-[400px] md:w-[40%]'}>
          <div className={'py-6 text-center md:text-left'}>
            <Typography variant={'title-2'}>Summary</Typography>
          </div>

          <div className={'flex flex-col gap-3'}>
            <div className={'flex justify-between'}>
              <Typography variant={'title-3'}>Subtotal</Typography>
              <Typography variant={'body-1'}> &#x24; 550</Typography>
            </div>

            <div className={'flex justify-between'}>
              <Typography variant={'title-3'}>Estimated Shipping & Handling</Typography>
              <Typography variant={'body-1'}> &#x24; 7</Typography>
            </div>

            <div className={'flex justify-between'}>
              <Typography variant={'title-3'}>Items</Typography>
              <Typography variant={'body-1'}>5</Typography>
            </div>

            <div className={'flex justify-between border-t border-gray-200 py-[40px]'}>
              <Typography variant={'title-3'}>Total</Typography>
              <Typography variant={'body-1'}> &#x24; 557</Typography>
            </div>
          </div>

          <div className={'hidden flex-col  gap-4 md:flex'}>
            <Button size={'md'}>Checkout</Button>
            <Button size={'md'} variant={'outlined'}>
              <Image
                src={'https://www.nike.com/assets/experience/pet/payment-icons/paypal@2x.png'}
                alt={'paypal icon'}
                width={51}
                height={14}
              />
            </Button>
          </div>
        </div>
      </div>

      <div className={'sticky bottom-0 w-full bg-light py-[15px] md:hidden'}>
        <Button size={'md'}>Checkout</Button>
      </div>
    </BaseSection>
  );
};
