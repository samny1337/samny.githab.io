import React from 'react';
import styles from './styles.module.scss';
import TrashCan from 'src/assets/img/trash-can.svg';

const CardButtonOrder = () => {
  return (
    <button className={styles.cardButton}>
      <img src={TrashCan} />
    </button>
  );
};

export default CardButtonOrder;
