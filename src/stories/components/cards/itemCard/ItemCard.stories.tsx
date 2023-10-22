import { Meta, StoryObj } from '@storybook/react';

import ItemCardImg from '../../../assets/images/card_item_img.webp';

import { ItemCard } from '@/common/ui';

const meta = {
  title: 'Components/cards',
  component: ItemCard,
  tags: ['autodocs'],
  args: {
    category: 'Shoes',
    title: 'Air Jordan 1 Low OG',
    imgSrc: ItemCardImg,
    price: '140',
    link: '/',
  },
} satisfies Meta<typeof ItemCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  render: () => <ItemCard {...meta.args} />,
};
