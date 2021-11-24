import React, { useContext } from 'react';
import styles from './Cart.module.css';
import { CartContext } from './CartContext';
import CartCard from '../CartCard/CartCard';

const Cart = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const cartItems = cart.map((sandwich, index) => (
    <CartCard key={index} sw={sandwich}></CartCard>
  ));
  console.log(cart);
  return (
    <div className={styles.Cart}>
      {cart.length > 0 ? (
        <div>
          <h1>You are going to order:</h1>
          <div className={styles.cardContainer}>{cartItems}</div>
        </div>
      ) : (
        <h1>Your cart is empty!</h1>
      )}
    </div>
  );
};

export default Cart;
