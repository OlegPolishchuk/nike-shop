import React from 'react';

import { useRouter } from 'next/router';

import { Button } from '@/common/ui';

interface Props {
  disabled?: boolean;
}

export const CheckoutMobile = ({ disabled = false }: Props) => {
  const router = useRouter();

  const handleRedirectToCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div className={'sticky bottom-0 w-full bg-light py-[15px] md:hidden'}>
      <Button disabled={disabled} size={'md'} onClick={handleRedirectToCheckout}>
        Checkout
      </Button>
    </div>
  );
};
