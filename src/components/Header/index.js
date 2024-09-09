import React from 'react';
import Logo from '../Logo';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
    </div>
  );
};

export default Header;
