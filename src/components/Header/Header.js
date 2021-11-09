import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <Link to='/'>
        <div>LOGO</div>
      </Link>
      <Link to='/menu'>
        <div>MENU</div>
      </Link>
      <Link to='/promotions'>
        <div>PROMOTIONS</div>
      </Link>
      <Link to='/builder'>
        <div>MAKE IT JAVA</div>
      </Link>
      <div>LOGIN</div>
    </header>
  );
};

export default Header;
