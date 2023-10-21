import React from 'react';

import { CartSection } from '@/components';
import { getMainLayout } from '@/components/layouts';

const CartPage = () => {
  return <CartSection />;
};

CartPage.getLayout = getMainLayout;

export default CartPage;
