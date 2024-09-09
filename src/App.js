import React from 'react';
import Layout from './components/Layout';
import Modal from './components/Modal';
import CardButton from './components/CardButton';
import ProductCard from './components/ProductCard';
import ProductCardFull from './components/ProductCardFull';
import ProductOrder from './components/ProductOrder';

const product = {
  image: 'https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-various-goods-and-cars-png-image_643136.jpg',
  name: 'Товар 1',
  description: 'Описание товара 123456789 вапварврварварварвар',
  price: 1000,
  count: 0,
}; /* тестовый набор данных */

const App = () => {
  return (
    <div className="app-container">
      <Layout></Layout>
      <Modal visible={false} children={'children'}></Modal>
      <CardButton count={0}></CardButton>
      <ProductCard {...product}></ProductCard>
      <ProductCardFull {...product}></ProductCardFull>
      <ProductOrder {...product}></ProductOrder>
      <ProductOrder {...product}></ProductOrder>
      <ProductOrder {...product}></ProductOrder>
      <ProductOrder {...product}></ProductOrder>
      <ProductOrder {...product}></ProductOrder>
    </div>
  );
};

export default App;
