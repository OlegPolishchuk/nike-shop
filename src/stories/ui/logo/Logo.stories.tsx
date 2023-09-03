import { Meta, StoryObj } from '@storybook/react';

import { Logo as LogoComponent } from '@/common/ui';

const meta = {
  title: 'Ui/logo',
  component: LogoComponent,
} satisfies Meta<typeof LogoComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {
  render: () => <LogoComponent />,
};
