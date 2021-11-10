import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../../assets/images/jalapeno.jpg';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={[styles.container, styles.left].join(' ')}>
        <Link to='/'>
          <img src={Logo} alt='Logo' className={styles.logo} />
        </Link>
      </div>
      <div className={[styles.container, styles.center].join(' ')}>
        <Link to='/menu'>
          <button>MENU</button>
        </Link>
        <Link to='/promotions'>
          <button>PROMOTIONS</button>
        </Link>
        <Link to='/builder'>
          <button>MAKE IT JAVA</button>
        </Link>
      </div>
      <div className={[styles.container, styles.right].join(' ')}>
        <div>CART</div>
        <div>LOGIN</div>
      </div>
    </header>
  );
};

export default Header;
