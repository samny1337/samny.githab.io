import React from 'react';
import styles from './styles.module.scss';

const CardButton = ({ count }) => {
  if (count === 0) {
    return <button className={styles.cardButton}>В корзину</button>;
  }
  return (
    <div className={styles.cardInput}>
      <button className={styles.decreaseButton}>-</button>
      <input type="number" value={count} readOnly />
      <button className={styles.increaseButton}>+</button>
    </div>
  );
};
export default CardButton;
