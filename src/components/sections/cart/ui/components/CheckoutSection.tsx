import React from 'react';

import Image from 'next/image';

import { Button } from '@/common/ui';

export const CheckoutSection = () => {
  return (
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
  );
};
