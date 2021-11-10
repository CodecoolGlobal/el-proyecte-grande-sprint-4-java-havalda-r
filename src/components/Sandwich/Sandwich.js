import React from 'react';
import styles from './Sandwich.module.css';
import Ingredient from '../Ingredients/Ingredient';

const Sandwich = () => {
  return (
    <div className={styles.Sandwich}>
      <Ingredient type='bread-top' />
      <Ingredient type='bread-bottom' />
    </div>
  );
};

export default Sandwich;
