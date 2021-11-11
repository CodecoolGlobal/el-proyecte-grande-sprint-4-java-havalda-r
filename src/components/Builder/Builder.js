import React, { useState } from 'react';
import Controller from '../Controller/Controller';
import Sandwich from '../Sandwich/Sandwich';
import styles from './Builder.module.css';

const INGREDIENT_PRICES = {
  salad: 100,
  cheese: 200,
  meat: 300,
  jalapeno: 100,
};

const Builder = () => {
  const [ingredients, setIngredients] = useState({
    ingredients: { jalapeno: 0, salad: 0, cheese: 0, meat: 0 },
  });

  const [totalPrice, setTotalPrice] = useState(999);

  const addIngredientHandler = (type) => {
    const previousCount = ingredients.ingredients[type];
    const updatedCount = previousCount + 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients.ingredients[type] = updatedCount;

    const ingredientPrice = INGREDIENT_PRICES[type];
    setTotalPrice(totalPrice + ingredientPrice);

    setIngredients(updatedIngredients);
  };

  const removeIngredientHandler = (type) => {
    const previousCount = ingredients.ingredients[type];
    if (previousCount <= 0) {
      return;
    }
    const updatedCount = previousCount - 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients.ingredients[type] = updatedCount;

    const ingredientPrice = INGREDIENT_PRICES[type];
    setTotalPrice(totalPrice - ingredientPrice);

    setIngredients(updatedIngredients);
  };

  return (
    <>
      <div className={styles.Builder}>
        <h1>BUILDER</h1>
        <div className={styles.container}>
          <Controller
            add={addIngredientHandler}
            remove={removeIngredientHandler}
            totalPrice={totalPrice}
          />
          <Sandwich ingredients={ingredients.ingredients} />
        </div>
      </div>
    </>
  );
};

export default Builder;
