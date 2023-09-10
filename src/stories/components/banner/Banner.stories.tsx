import { Meta, StoryObj } from '@storybook/react';

import { Banner as BannerComponent } from '@/components';

const meta = {
  title: 'Components/banner',
  component: BannerComponent,
} satisfies Meta<typeof BannerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Banner: Story = {
  render: () => <BannerComponent />,
};
