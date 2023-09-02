import { Meta, StoryObj } from '@storybook/react';

import { PreHeader as PreHeaderComponent } from '@/components/layouts';

const meta = {
  title: 'Ui/layouts',
  component: PreHeaderComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof PreHeaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PreHeader: Story = {
  render: () => <PreHeaderComponent />,
};
