import React, { useEffect, useRef, useState } from 'react';

import { Map, Placemark, YMaps, ZoomControl } from '@pbe/react-yandex-maps';
import { flushSync } from 'react-dom';
import ymaps from 'yandex-maps';

import { LatLon, PlaceMarkPosition } from '../types/types';

import { NikeBalloon } from './NikeBalloon';

import { getStores } from '@/api/map';
import { Portal } from '@/common/ui';
import {
  getBalloonPosition,
  getMapContainerCenter,
} from '@/components/sections/checkout/utils/utils';
import { Nullable, Store } from '@/types/types';

interface Props {
  center: LatLon;
  setCenter?: React.Dispatch<React.SetStateAction<LatLon>>;
  stores: Store[];
}

export const CheckoutMap = ({ center, setCenter, stores }: Props) => {
  return (
    <YMaps
      query={{
        lang: 'en_US',
        apikey: process.env.NEXT_PUBLIC_YANDEX_MAP_API_KEY,
      }}
    >
      <MapContainer center={center} setCenter={setCenter} stores={stores} />
    </YMaps>
  );
};

const MapContainer = ({ center, stores }: Props) => {
  const [map, setMap] = useState<ymaps.Map>();

  const [activePortal, setActivePortal] = useState(false);

  const [activeStore, setActiveStore] = useState<Nullable<Store>>(null);
  const [activePlacemarkId, setActivePlacemarkId] = useState<Nullable<string>>(null);
  const [balloonPosition, setBalloonPosition] = useState<PlaceMarkPosition>();

  const balloonWrapperRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const handleRemoveBalloon = () => {
    setActiveStore(null);
    setActivePortal(false);
    setActivePlacemarkId(null);
  };

  const handlePlaceMarkClick = (store: Store) => {
    flushSync(() => {
      setActivePortal(false);
    });

    setActiveStore(store);
    setBalloonPosition(getBalloonPosition(getMapContainerCenter(mapContainerRef)));
    setActivePlacemarkId(store.id);

    map?.panTo([store.coordinates.latitude, store.coordinates.longitude], { flying: true });

    setTimeout(() => {
      setActivePortal(true);
    }, 300);
  };

  const handleMapWheel = () => {
    handleRemoveBalloon();
  };

  useEffect(() => {
    if (map) {
      map.events.add('wheel', handleMapWheel);
      map.events.add('click', handleRemoveBalloon);
      map.events.add('focus', handleRemoveBalloon);
      map.events.add('mousedown', handleRemoveBalloon);

      map.panTo(center, { flying: true });
    }
  }, [map, center]);

  useEffect(() => {
    window.addEventListener('resize', handleRemoveBalloon);

    return () => window.removeEventListener('resize', handleRemoveBalloon);
  }, []);

  return (
    <div ref={mapContainerRef}>
      <Map
        instanceRef={(ref) => setMap(ref)}
        className={'aspect-square'}
        width={'100%'}
        state={{ center: center, zoom: 9 }}
        options={{
          yandexMapAutoSwitch: true,
          maxAnimationZoomDifference: 2,
          autoFitToViewport: 'always',
        }}
        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
      >
        {stores.map((store) => (
          <Placemark
            key={store.id}
            geometry={[store.coordinates.latitude, store.coordinates.longitude]}
            options={{ iconColor: activePlacemarkId === store.id ? 'orange' : 'black' }}
            properties={{ hintContent: store.name }}
            onClick={() => handlePlaceMarkClick(store)}
          />
        ))}
        <ZoomControl options={{ zoomDuration: 300 }} />
      </Map>

      {activePortal && (
        <Portal id={'container_tooltip'}>
          {activeStore && (
            <div
              ref={balloonWrapperRef}
              className={'absolute'}
              style={{
                top: `${balloonPosition?.y}px`,
                left: `${balloonPosition?.x}px`,
              }}
            >
              <NikeBalloon store={activeStore} />
            </div>
          )}
        </Portal>
      )}
    </div>
  );
};
