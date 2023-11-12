import React, { useEffect, useState } from 'react';

import { CheckoutForm } from './CheckoutForm';
import { CheckoutMap } from './Map';

import { getStores } from '@/api/map';
import { Typography } from '@/common/ui';
import { BaseSection } from '@/components/sections';
import {
  defaultCenter,
  defaultCityCoordinates,
} from '@/components/sections/checkout/constants/map';
import { LatLon } from '@/components/sections/checkout/types/types';
import { Store } from '@/types/types';

export const CheckoutSection = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [cityCoordinates, setCityCoordinates] = useState(defaultCityCoordinates);
  const [mapCenter, setMapCenter] = useState<LatLon>(defaultCenter);

  useEffect(() => {
    getStores({ lat: cityCoordinates.lat, lon: cityCoordinates.lon }).then((res) => setStores(res));
  }, [cityCoordinates]);

  return (
    <BaseSection className={'mx-auto max-w-[1200px]'}>
      <Typography variant={'title-2'}>Delivery Options</Typography>

      <div className={'flex flex-col justify-between gap-5 lg:flex-row'}>
        <CheckoutForm
          className={'w-full lg:w-[50%] lg:max-w-[600px]'}
          setCity={setCityCoordinates}
          setCenter={setMapCenter}
        />

        <div className={'w-full lg:w-[50%] lg:max-w-[600px]'}>
          <CheckoutMap center={mapCenter} stores={stores} />
        </div>
      </div>
    </BaseSection>
  );
};
