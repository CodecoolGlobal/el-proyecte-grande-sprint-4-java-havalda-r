import React from 'react';
import styles from './CartCard.module.css';

const CartCard = (props) => {
  return (
    <div className={styles.CartCard}>
      <h2>A sandwich with:</h2>
      <ul>
        {props.sw.ingredients.jalapeno > 0 ? (
          <li>
            {props.sw.ingredients.jalapeno} portion of extra spicy jalapeno
          </li>
        ) : null}
        {props.sw.ingredients.salad > 0 ? (
          <li>{props.sw.ingredients.salad} chunks of fresh salad</li>
        ) : null}
        {props.sw.ingredients.cheese > 0 ? (
          <li>{props.sw.ingredients.cheese} slices of cheddar</li>
        ) : null}
        {props.sw.ingredients.meat > 0 ? (
          <li>
            {props.sw.ingredients.meat} cuts of the finest angus beef hamburger
          </li>
        ) : null}
      </ul>
      <h3>For the price of {props.sw.totalPrice} HUF</h3>
    </div>
  );
};

export default CartCard;
