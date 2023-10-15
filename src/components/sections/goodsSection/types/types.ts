import { GenderValue } from '@/components/sections/goodsSection/constsnts/constants';
import { GetSectionShoeQuery } from '@/graphql/__generated__';

export type Good = GetSectionShoeQuery['sectionShoe']['data'];

export type FiltersState = {
  genders: {
    [key in GenderValue]: boolean;
  };
  size: string;
  priceInterval: { checked: boolean; value: { from: number; to: number } }[];
};
