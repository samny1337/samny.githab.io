import React from 'react';
import CardButtonOrder from '../CardButtonOrder';
import styles from './styles.module.scss';

const ProductOrder = ({ image, name, description, price, count }) => {
  return (
    <div className={styles.productCard}>
      <img src={image} />
      <h2>{name}</h2>
      <p>{description ? description.substring(0, 15) : 'Описание недоступно'}</p>
      <p>Цена: {price} руб.</p>
      <div className={styles.button}>
        <CardButtonOrder count={count} />
      </div>
    </div>
  );
};

export default ProductOrder;
