import React, { useState, useContext } from 'react';
import Controller from '../Controller/Controller';
import Sandwich from '../Sandwich/Sandwich';
import styles from './Builder.module.css';
import Modal from 'react-modal';
import { CartContext } from '../Cart/CartContext';

const INGREDIENT_PRICES = {
  salad: 100,
  cheese: 200,
  meat: 300,
  jalapeno: 100,
};

const Builder = (props) => {
  const { cart, setCart } = useContext(CartContext);

  const [modalIsOpen, setIsOpen] = useState(false);

  const [ingredients, setIngredients] = useState({
    ingredients: { jalapeno: 0, salad: 0, cheese: 0, meat: 0 },
  });

  const [totalPrice, setTotalPrice] = useState(999);

  const ingredientSummary = Object.keys(ingredients.ingredients).map((key) => {
    return (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>{key}</span>:{' '}
        {ingredients.ingredients[key]}
      </li>
    );
  });

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

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

  function purchase() {
    alert('Burger is in your cart!');
    setCart([
      ...cart,
      { ingredients: ingredients.ingredients, totalPrice: totalPrice },
    ]);
    setIsOpen(false);
  }

  return (
    <>
      <div className={styles.Builder}>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={styles.Modal}
        >
          <h3>Your order</h3>
          <p>Ingredients:</p>
          <ul>{ingredientSummary}</ul>
          <button style={{ backgroundColor: 'black' }} onClick={closeModal}>
            I changed my mind...
          </button>
          <button style={{ backgroundColor: 'black' }} onClick={purchase}>
            I'm sure about that!
          </button>
        </Modal>
        <div className={styles.container}>
          <Controller
            openModal={openModal}
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
