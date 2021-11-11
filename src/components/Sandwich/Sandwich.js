import React from 'react';
import styles from './Sandwich.module.css';
import Ingredient from '../Ingredients/Ingredient';

const Sandwich = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <Ingredient key={igKey + i} type={igKey} />;
    });
  });

  return (
    <div className={styles.Sandwich}>
      <h2>Your sandwich is going to be like:</h2>
      <div className={styles.container}>
        <Ingredient type='bread-top' />
        {transformedIngredients}

        <Ingredient type='bread-bottom' />
      </div>
    </div>
  );
};

export default Sandwich;
