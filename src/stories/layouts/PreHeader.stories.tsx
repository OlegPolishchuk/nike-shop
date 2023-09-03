import { Meta, StoryObj } from '@storybook/react';

import { PreHeader as PreHeaderComponent } from '@/components';

const meta = {
  title: 'layouts/pre header',
  component: PreHeaderComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof PreHeaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PreHeader: Story = {
  render: () => <PreHeaderComponent />,
};
