export type Nullable<T> = T | null;

export interface GetStoreResponse {
  objects: Store[];
}

export interface Store {
  storeNumber: string;
  address: StoreAddress;
  // distance: string;
  // facilityType: string;
  // localizations: StoreLocalizations[];
  // timezone: string;
  // businessConcept: string;
  coordinates: StoreCoordinates;
  // defaultLanguage: string;
  phone: string;
  imageUrl: string;
  // storeServices: StoreServices[];
  name: string;
  company: string;
  id: string;
  region: string;
  // offerings: StoreOfferings[];
  // slug: string;
  // operationalDetails: StoreOperationalDetails;
}
export interface StoreAddress {
  address1: string;
  address2: string;
  address3: string;
  area: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  iso2Country: string;
  county: string;
}
export interface RootObjectLocalizationsAddress {
  storeName: string;
}
export interface StoreLocalizations {
  language: string;
  address: RootObjectLocalizationsAddress;
}
export interface StoreCoordinates {
  latitude: number;
  longitude: number;
}
export interface StoreServices {
  name: string;
  storeServiceId: string;
  storeServiceTypeId: string;
  storeServiceTypeName: string;
  serviceGroup: string;
  startDate: string;
  enabled: boolean;
  creationDate: string;
  modificationDate: string;
}
export interface StoreOfferings {
  id: string;
  code: string;
  name: string;
  description: string;
  publicOffering: boolean;
}
export interface RootObjectOperationalDetailsHoursOfOperationRegularHoursMonday {
  startTime: string;
  duration: string;
}
export interface RootObjectOperationalDetailsHoursOfOperationRegularHoursTuesday {
  startTime: string;
  duration: string;
}
export interface RootObjectOperationalDetailsHoursOfOperationRegularHoursWednesday {
  startTime: string;
  duration: string;
}
export interface RootObjectOperationalDetailsHoursOfOperationRegularHoursThursday {
  startTime: string;
  duration: string;
}
export interface RootObjectOperationalDetailsHoursOfOperationRegularHoursFriday {
  startTime: string;
  duration: string;
}
export interface RootObjectOperationalDetailsHoursOfOperationRegularHoursSaturday {
  startTime: string;
  duration: string;
}
export interface RootObjectOperationalDetailsHoursOfOperationRegularHoursSunday {
  startTime: string;
  duration: string;
}
export interface RootObjectOperationalDetailsHoursOfOperationRegularHours {
  monday: RootObjectOperationalDetailsHoursOfOperationRegularHoursMonday[];
  tuesday: RootObjectOperationalDetailsHoursOfOperationRegularHoursTuesday[];
  wednesday: RootObjectOperationalDetailsHoursOfOperationRegularHoursWednesday[];
  thursday: RootObjectOperationalDetailsHoursOfOperationRegularHoursThursday[];
  friday: RootObjectOperationalDetailsHoursOfOperationRegularHoursFriday[];
  saturday: RootObjectOperationalDetailsHoursOfOperationRegularHoursSaturday[];
  sunday: RootObjectOperationalDetailsHoursOfOperationRegularHoursSunday[];
}
export interface RootObjectOperationalDetailsHoursOfOperationSpecialHours {
  startTime: string;
  duration: string;
}
export interface RootObjectOperationalDetailsHoursOfOperation {
  regularHours: RootObjectOperationalDetailsHoursOfOperationRegularHours;
  specialHours: RootObjectOperationalDetailsHoursOfOperationSpecialHours[];
}
export interface StoreOperationalDetails {
  openingDate: string;
  closures: any[];
  hoursOfOperation: RootObjectOperationalDetailsHoursOfOperation;
}
