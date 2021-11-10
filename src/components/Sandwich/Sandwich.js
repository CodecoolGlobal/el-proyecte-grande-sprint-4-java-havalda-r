import React from 'react';
import styles from './Sandwich.module.css';
import Ingredient from '../Ingredients/Ingredient';

const Sandwich = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    console.log(igKey);
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <Ingredient key={igKey + i} type={igKey} />;
    });
  });

  return (
    <div className={styles.Sandwich}>
      <Ingredient type='bread-top' />
      {transformedIngredients}

      <Ingredient type='bread-bottom' />
    </div>
  );
};

export default Sandwich;
