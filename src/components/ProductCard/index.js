import React from 'react';
import CardButton from '../CardButton';
import styles from './styles.module.scss';

const ProductCard = ({ image, name, description, price, count }) => {
  return (
    <div className={styles.productCard}>
      <img src={image} />
      <h2>{name}</h2>
      <p>{description ? description.substring(0, 15) : 'Описание недоступно'}</p>
      <p>Цена: {price} руб.</p>
      <CardButton count={count} />
    </div>
  );
};

export default ProductCard;
