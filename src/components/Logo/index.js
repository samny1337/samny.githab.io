import React from 'react';
import img from 'src/assets/img/beer-cans.svg';
import styles from './styles.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img height={'100%'} src={img} />
      <p className={styles.logoName}>JSX + CSS домашка</p>
    </div>
  );
};

export default Logo;
