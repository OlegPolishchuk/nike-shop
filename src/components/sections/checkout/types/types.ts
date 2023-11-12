export type LatLon = [number, number];

export interface GeocodeResponse {
  lat: string;
  lon: string;
}

export interface OriginalMouseEvent {
  originalEvent: {
    domEvent: {
      originalEvent: {
        clientX: number;
        clientY: number;
      };
    };
  };
}

export interface PlaceMarkPosition {
  x: number;
  y: number;
}
