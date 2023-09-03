import { Meta, StoryObj } from '@storybook/react';

import { Navigation } from '@/components';

const meta = {
  title: 'Components/navigation',
  component: Navigation,
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const navigation: Story = {
  render: () => (
    <div className={'flex justify-center'}>
      <Navigation />
    </div>
  ),
};
