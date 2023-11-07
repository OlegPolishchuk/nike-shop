import React from 'react';

import { useLocalStorageState } from '@/common/hooks/useStorage';
import { GoodsCard } from '@/common/ui';
import { getMainLayout } from '@/components/layouts';
import { BaseSection } from '@/components/sections';
import { Good } from '@/components/sections/goodsSection/types/types';
import { GoodsList } from '@/components/sections/goodsSection/ui/components/GoodsList';

const Favorite = () => {
  const [favoriteProducts, setFavoriteProducts] = useLocalStorageState<Good[]>('goods', []);

  return (
    <BaseSection>
      {favoriteProducts.map((product) => (
        <GoodsCard key={product.id} card={product} />
      ))}
    </BaseSection>
  );
};

Favorite.getLayout = getMainLayout;
export default Favorite;
