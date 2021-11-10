import React, { useState } from 'react';
import Controller from '../Controller/Controller';
import Sandwich from '../Sandwich/Sandwich';
import styles from './Builder.module.css';

const Builder = () => {
  const [ingredients, setIngredients] = useState({ ingredients: { salad: 4 } });

  return (
    <div className={styles.Builder}>
      <h1>BUILDER</h1>
      <div className={styles.container}>
        <Controller />
        <Sandwich ingredients={ingredients.ingredients} />
      </div>
      <h2>TOTAL PRICE</h2>
    </div>
  );
};

export default Builder;
