import React from 'react';
import styles from './Ingredient.module.css';

const Ingredient = (props) => {
  let ingredient = null;
  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className={styles.BunBottom}></div>;
      break;
    case 'bread-top':
      ingredient = <div className={styles.BunTop}></div>;
      break;
    case 'salad':
      ingredient = <div className={styles.Salad}></div>;
      break;
    case 'jalapeno':
      ingredient = <div className={styles.Jalapeno}></div>;
      break;
    case 'cheese':
      ingredient = <div className={styles.Cheese}></div>;
      break;
    case 'meat':
      ingredient = <div className={styles.Meat}></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

export default Ingredient;
