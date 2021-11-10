import React, { useState } from 'react';
import Controller from '../Controller/Controller';
import Sandwich from '../Sandwich/Sandwich';
import styles from './Builder.module.css';

const Builder = () => {
  const [ingredients, setIngredients] = useState({ ingredients: { salad: 0 } });

  const addIngredientHandler = (type) => {
    const previousCount = ingredients.ingredients[type];
    const updatedCount = previousCount + 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients.ingredients[type] = updatedCount;
    setIngredients(updatedIngredients);
  };

  return (
    <div className={styles.Builder}>
      <h1>BUILDER</h1>
      <div className={styles.container}>
        <Controller add={addIngredientHandler} />
        <Sandwich ingredients={ingredients.ingredients} />
      </div>
      <h2>TOTAL PRICE</h2>
    </div>
  );
};

export default Builder;
