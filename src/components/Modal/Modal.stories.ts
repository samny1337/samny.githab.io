import type { Meta, StoryObj } from '@storybook/react';
import Modal from '.';

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    visible: false,
    children: 'children',
  },
};
