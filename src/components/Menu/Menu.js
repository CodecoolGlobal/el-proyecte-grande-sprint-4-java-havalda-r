import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import MenuImg from '../../assets/images/menu.jpg';
import SpecialOfferImg from '../../assets/images/special_offer.jpg';
import BeveragesImg from '../../assets/images/beverages.jpg';
import SandwichesImg from '../../assets/images/sandwiches.jpg';
import SideDishImg from '../../assets/images/side_dish.jpg';
import SaladImg from '../../assets/images/salad.jpg';
import SaucesImg from '../../assets/images/sauces.jpg';

import OtherImg from '../../assets/images/other.jpg';

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <div>
        <h1>MENU</h1>
      </div>
      <div className={styles.cardContainer}>
        <Link to='/menu/meals' className={styles.link}>
          <div className={styles.card}>
            <img src={MenuImg} />
            <h2>Meals</h2>
          </div>
        </Link>
        <Link to='/menu/special-offers' className={styles.link}>
          <div className={styles.card}>
            <img src={SpecialOfferImg} />
            <h2>Special offers</h2>
          </div>
        </Link>
        <Link to='/menu/beverages' className={styles.link}>
          <div className={styles.card}>
            <img src={BeveragesImg} />
            <h2>Beverages</h2>
          </div>
        </Link>
        <Link to='/menu/sandwiches' className={styles.link}>
          <div className={styles.card}>
            <img src={SandwichesImg} />
            <h2>Sandwiches</h2>
          </div>
        </Link>
        <div className={styles.break} />
        <Link to='/menu/side-dishes' className={styles.link}>
          <div className={styles.card}>
            <img src={SideDishImg} />
            <h2>Side dishes</h2>
          </div>
        </Link>
        <Link to='/menu/salads' className={styles.link}>
          <div className={styles.card}>
            <img src={SaladImg} />
            <h2>Salads</h2>
          </div>
        </Link>
        <Link to='/menu/accessories' className={styles.link}>
          <div className={styles.card}>
            <img src={SaucesImg} />
            <h2>Accessories</h2>
          </div>
        </Link>
        <Link to='/menu/accessories' className={styles.link}>
          <div className={styles.card}>
            <img src={OtherImg} />
            <h2>Other</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
