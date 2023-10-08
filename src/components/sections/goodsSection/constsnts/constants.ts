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

export const PriceInterval = [
  { from: 0, to: 25 },
  { from: 25, to: 50 },
  { from: 50, to: 100 },
  { from: 100, to: 150 },
  { from: 150, to: Infinity },
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

// export const SortingBy = {
//   Newest: {
//     title: 'Newest',
//     value: 'createdAt',
//   },
//   PriceAsc: {
//     title: 'Price: High-Low',
//     value: 'price:asc',
//   },
//   PriceDesc: {
//     title: 'Price: Low-High',
//     value: 'price:desc',
//   },
// };

export const SortingBy = [
  {
    title: 'Newest',
    value: 'createdAt',
  },
  {
    title: 'Price: High-Low',
    value: 'price:asc',
  },
  {
    title: 'Price: Low-High',
    value: 'price:desc',
  },
];
