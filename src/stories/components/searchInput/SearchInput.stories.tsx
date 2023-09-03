import { Meta, StoryObj } from '@storybook/react';

import { SearchInput } from '@/components';

const meta = {
  title: 'Components/searchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search = {
  render: () => <SearchInput />,
};
