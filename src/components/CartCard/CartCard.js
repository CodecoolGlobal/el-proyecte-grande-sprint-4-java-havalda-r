import React from 'react';
import styles from './CartCard.module.css';

const CartCard = (props) => {
  return (
    <div className={styles.CartCard}>
      <h2>A sandwich with:</h2>
      <ul>
        <li>{props.sw.jalapeno} portion of extra spicy jalapeno</li>
        <li>{props.sw.salad} chunks of fresh salad</li>
        <li>{props.sw.cheese} slices of cheddar</li>
        <li>{props.sw.meat} cuts of the finest angus beef hamburger</li>
      </ul>
    </div>
  );
};

export default CartCard;
