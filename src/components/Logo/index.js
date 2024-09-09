import React from 'react';
import styles from './styles.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img height={'100%'} src={'https://cdn-icons-png.flaticon.com/512/5968/5968835.png'} />
      <p className={styles.logoName}>JSX + CSS домашка</p>
    </div>
  );
};

export default Logo;
