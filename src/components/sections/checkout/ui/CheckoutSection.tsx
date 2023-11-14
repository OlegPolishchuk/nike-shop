import React, { useEffect, useState } from 'react';

import { defaultCenter, defaultCityCoordinates } from '../constants/map';
import { LatLon } from '../types/types';

import { CheckoutForm, FormData } from './CheckoutForm';
import { CheckoutMap } from './Map';
import { ProductCard } from './ProductCard';

import { getStores } from '@/api/map';
import { useSessionStorageState } from '@/common/hooks/useStorage';
import { Typography } from '@/common/ui';
import { BaseSection } from '@/components/sections';
import { CartProduct } from '@/components/sections/cart/types/types';
import { useGetCartGoods, useSetCartGoods } from '@/providers';
import { Store } from '@/types/types';

export const CheckoutSection = () => {
  // const [goods, setGoods] = useSessionStorageState<CartProduct[]>('goods', []);
  const goods = useGetCartGoods();
  const setGoods = useSetCartGoods();

  const [stores, setStores] = useState<Store[]>([]);
  const [cityCoordinates, setCityCoordinates] = useState(defaultCityCoordinates);
  const [mapCenter, setMapCenter] = useState<LatLon>(defaultCenter);

  const [userData, setUserData] = useState<FormData>();

  const handleResetCart = () => {
    setGoods([]);
  };

  useEffect(() => {
    getStores({ lat: cityCoordinates.lat, lon: cityCoordinates.lon }).then((res) => setStores(res));
  }, [cityCoordinates]);

  return (
    <>
      {userData?.address ? (
        <BaseSection className={'mb-10 text-center'}>
          <Typography variant={'title-2'}>
            Thank you for choosing us,{' '}
            <span className={'text-black-200'}>{userData?.firstName}</span>!
          </Typography>

          <Typography variant={'title-3'}>
            We will bring the goods to the address: {userData?.address}
          </Typography>
        </BaseSection>
      ) : (
        <BaseSection className={'mx-auto mb-20 max-w-[1200px]'}>
          <Typography variant={'title-2'}>Delivery Options</Typography>

          <div className={'flex flex-col justify-between gap-20 lg:flex-row lg:gap-5'}>
            <CheckoutForm
              className={'w-full lg:w-[50%] lg:max-w-[600px]'}
              setCity={setCityCoordinates}
              setCenter={setMapCenter}
              setUserData={setUserData}
              resetCart={handleResetCart}
            />

            <div className={'w-full lg:w-[50%] lg:max-w-[600px]'}>
              {goods.map((good) => (
                <ProductCard key={good.id} good={good} />
              ))}
            </div>
          </div>
        </BaseSection>
      )}

      <div className={'w-full'}>
        <CheckoutMap center={mapCenter} stores={stores} />
      </div>
    </>
  );
};
