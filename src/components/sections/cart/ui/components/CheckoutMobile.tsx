import React from 'react';

import { Button } from '@/common/ui';

interface Props {
  disabled?: boolean;
}

export const CheckoutMobile = ({ disabled = false }: Props) => {
  return (
    <div className={'sticky bottom-0 w-full bg-light py-[15px] md:hidden'}>
      <Button disabled={disabled} size={'md'}>
        Checkout
      </Button>
    </div>
  );
};
