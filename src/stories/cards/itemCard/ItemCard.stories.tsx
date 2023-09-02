import { Meta, StoryObj } from '@storybook/react';

import ItemCardImg from '../../../../public/images/card_item_img.webp';

import { ItemCard } from '@/common/ui';
// import ItemCardImg from '@/public/images/card_item_img.webp';

const meta = {
  title: 'Ui/cards',
  component: ItemCard,
  tags: ['autodocs'],
  args: {
    category: 'Shoes',
    title: 'Air Jordan 1 Low OG',
    imgSrc: ItemCardImg,
    price: '140',
  },
} satisfies Meta<typeof ItemCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  render: () => <ItemCard {...meta.args} />,
};
