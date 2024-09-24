import type { Meta, StoryObj } from '@storybook/react';
import CardButton from '.';

const meta: Meta<typeof CardButton> = {
  component: CardButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardButton>;

export const Primary: Story = {
  args: {
    count: 0,
  },
};
