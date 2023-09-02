import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@/common/ui';

const meta = {
  title: 'Ui/typography',
  component: Typography,
  tags: ['autodocs'],
  args: { tag: 'p' },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

const tag = 'span';

export const Title1: Story = {
  args: {
    children: 'Title-1',
    variant: 'title-1',
  },
};

export const Title2: Story = {
  args: {
    children: 'Title-2',
    variant: 'title-2',
  },
};

export const Title3: Story = {
  args: {
    children: 'Title-3',
    variant: 'title-3',
  },
};

export const Title4: Story = {
  args: {
    children: 'Title-4',
    variant: 'title-4',
  },
};

export const Title5: Story = {
  args: {
    children: 'Title-5',
    variant: 'title-5',
  },
};

export const Body1: Story = {
  args: {
    children: 'body-1',
    variant: 'body-1',
  },
};

export const Body2: Story = {
  args: {
    children: 'body-2',
    variant: 'body-2',
  },
};

export const Body3: Story = {
  args: {
    children: 'body-3',
    variant: 'body-3',
  },
};

export const SubTitle: Story = {
  args: {
    children: 'sub-title',
    variant: 'sub-title',
  },
};

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};
