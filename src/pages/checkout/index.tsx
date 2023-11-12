import React from 'react';

import { CheckoutSection } from '@/components';
import { getMainLayout } from '@/components/layouts';

const Checkout = () => {
  return (
    <div>
      <CheckoutSection />
    </div>
  );
};

Checkout.getLayout = getMainLayout;

export default Checkout;
