import React from 'react';
import styles from './Cart.module.css';

const Cart = (props) => {
  return (
    <div className={styles.Cart}>
      {props.cart ? (
        <h1>You ordered something</h1>
      ) : (
        <h1>Your cart is empty!</h1>
      )}
    </div>
  );
};

export default Cart;
