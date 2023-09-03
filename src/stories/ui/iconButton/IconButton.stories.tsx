import { Meta, StoryObj } from '@storybook/react';

import { IconButton, LikeIcon } from '@/common/ui';

const meta = {
  title: 'Ui/iconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonWithIcon: Story = {
  args: {
    icon: <LikeIcon />,
  },
};
