import React from 'react';
import styles from './CartCard.module.css';

const CartCard = (props) => {
  return (
    <div className={styles.CartCard}>
      <h2>A sandwich with:</h2>
      <ul>
        <li>{props.sw.ingredients.jalapeno} portion of extra spicy jalapeno</li>
        <li>{props.sw.ingredients.salad} chunks of fresh salad</li>
        <li>{props.sw.ingredients.cheese} slices of cheddar</li>
        <li>
          {props.sw.ingredients.meat} cuts of the finest angus beef hamburger
        </li>
      </ul>
      <h3>For the price of {props.sw.totalPrice} HUF</h3>
    </div>
  );
};

export default CartCard;
