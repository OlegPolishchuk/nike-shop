import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { Button } from '@/common/ui';

interface Props {
  disabled: boolean;
}

export const CheckoutSection = ({ disabled = false }: Props) => {
  const router = useRouter();

  const handleRedirectToCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div className={'hidden flex-col  gap-4 md:flex'}>
      <Button size={'md'} disabled={disabled} onClick={handleRedirectToCheckout}>
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
