import { HeaderMdx } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';

import { Header } from '@/components';

const meta = {
  title: 'Layouts/header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const header: Story = {
  render: () => <Header />,
};
