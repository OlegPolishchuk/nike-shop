import fetch from 'node-fetch';

import { GeocodeResponse } from '@/components/sections/checkout/types/types';
import { GetStoreResponse, Store } from '@/types/types';

export const getStores = ({ lon, lat }: { lat?: number; lon?: number }) => {
  return fetch(
    `${process.env.NEXT_PUBLIC_NIKE_STORE_URL}(coordinates=geoProximity=%7B%22latitude%22%3A${lat}%2C%22longitude%22%3A${lon}%2C%22maxDistance%22%3A500%2C%22measurementUnits%22%3A%22mi%22%7D)&count=50`,
  )
    .then((res) => res.json())
    .then((res) => {
      const data = res as GetStoreResponse;

      return data.objects;
    });
};

export const geocodeAddress = (address: string) => {
  return fetch(`${process.env.NEXT_PUBLIC_GEOCODE_URL}/search?q={${address}`)
    .then((res) => res.json())
    .then((res) => {
      const data = res as GeocodeResponse[];

      return data[0];
    });
};
