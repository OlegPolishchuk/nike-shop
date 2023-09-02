import type { Meta, StoryObj } from '@storybook/react';

import { Button, LikeIcon } from '@/common/ui';

const meta = {
  title: 'Ui/button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },

  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: { size: 'sm' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Contained: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
    size: 'md',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
  },
};

export const ButtonWithStartIcon: Story = {
  args: {
    children: 'Start Icon',
    variant: 'outlined',
    startIcon: <LikeIcon className={'max-h-[16px]'} />,
  },
};

export const ButtonWithEndIcon: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
    endIcon: <LikeIcon className={'max-h-[16px]'} />,
  },
};
