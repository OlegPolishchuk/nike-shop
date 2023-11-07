import React from 'react';

import Image from 'next/image';

import { Button } from '@/common/ui';

interface Props {
  disabled: boolean;
}

export const CheckoutSection = ({ disabled = false }: Props) => {
  return (
    <div className={'hidden flex-col  gap-4 md:flex'}>
      <Button size={'md'} disabled={disabled}>
        Checkout
      </Button>
      <Button size={'md'} disabled={disabled} variant={'outlined'}>
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
