import { FiltersState } from '@/components/sections/goodsSection/types/types';

export const ExistingSizes = [
  '3.5',
  '4',
  '4.5',
  '5',
  '5.5',
  '6',
  '6.5',
  '7',
  '7.5',
  '8',
  '8.5',
  '9',
  '9.5',
  '10',
  '10.5',
  '11',
  '11.5',
  '12',
  '12.5',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
];

export const Max_Product_Cost = 10_0000;

export const PriceInterval = [
  { title: '$25 - $50', value: { from: 0, to: 25 } },
  { title: '$50 - $100', value: { from: 25, to: 50 } },
  { title: '$100 - $150', value: { from: 100, to: 150 } },
  { title: 'Over $150', value: { from: 150, to: Max_Product_Cost } },
];

export enum GenderValue {
  MEN = 'men',
  WOMEN = 'women',
  UNISEX = 'unisex',
}

export const Gender = [
  { title: 'Men', value: GenderValue.MEN },
  { title: 'Women', value: GenderValue.WOMEN },
  { title: 'Unisex', value: GenderValue.UNISEX },
];

export const DefaultFilters: FiltersState = {
  genders: {
    [GenderValue.MEN]: false,
    [GenderValue.WOMEN]: false,
    [GenderValue.UNISEX]: false,
  },
  size: '',
  priceInterval: { from: 0, to: Max_Product_Cost },
};

export const SortingBy = [
  {
    title: 'Newest',
    value: 'createdAt:asc',
  },
  {
    title: 'Price: High-Low',
    value: 'options.price:desc',
  },
  {
    title: 'Price: Low-High',
    value: 'options.price:asc',
  },
];
