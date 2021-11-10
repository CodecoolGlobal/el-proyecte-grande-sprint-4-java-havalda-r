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
    default:
      ingredient = null;
  }
  return ingredient;
};

export default Ingredient;
