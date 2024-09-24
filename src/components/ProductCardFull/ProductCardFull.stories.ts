import type { Meta, StoryObj } from '@storybook/react';
import ProductCardFull from '.';

const meta: Meta<typeof ProductCardFull> = {
  component: ProductCardFull,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductCardFull>;

export const Primary: Story = {
  args: {
    name: 'Товар 1',
    image: 'https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-various-goods-and-cars-png-image_643136.jpg',
    description: 'Описание товара 123456789 вапварврварварварвар',
    price: 1000,
    count: 0,
  },
};
