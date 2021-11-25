import React from 'react';
import styles from './CartCard.module.css';

const SANDWICH_ADJECTIVES = ['', 'juicy', 'fresh', 'delicious', 'great'];
const SANDWICH_SYNONYMS = ['sandwich', 'burger'];

const SALAD_ADJECTIVES = [
  'bitter leafy',
  'fine',
  'extremely nutritive',
  'our crunchy',
];

const JALAPENO_ADJECTIVES = ['extra hot', 'piquant', 'spicy', 'peppery'];

const GENERAL_ADJECTIVES = [
  'tastiest',
  'most delicious',
  'most savory',
  'most flavorful',
];

const CartCard = (props) => {
  function randomAdjective(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <div className={styles.CartCard}>
      <h2>
        A {randomAdjective(SANDWICH_ADJECTIVES)}{' '}
        {randomAdjective(SANDWICH_SYNONYMS)} with:
      </h2>
      <ul>
        {props.sw.ingredients.jalapeno > 0 ? (
          <li>
            {props.sw.ingredients.jalapeno} portion of{' '}
            {randomAdjective(JALAPENO_ADJECTIVES)} jalapeno
          </li>
        ) : null}
        {props.sw.ingredients.salad > 0 ? (
          <li>
            {props.sw.ingredients.salad} chunks of{' '}
            {randomAdjective(SALAD_ADJECTIVES)} salad
          </li>
        ) : null}
        {props.sw.ingredients.cheese > 0 ? (
          <li>
            {props.sw.ingredients.cheese} slices of the{' '}
            {randomAdjective(GENERAL_ADJECTIVES)} cheddar
          </li>
        ) : null}
        {props.sw.ingredients.meat > 0 ? (
          <li>
            {props.sw.ingredients.meat} cuts of the{' '}
            {randomAdjective(GENERAL_ADJECTIVES)} angus beef hamburger patty
          </li>
        ) : null}
      </ul>
      <h3>For the price of {props.sw.totalPrice} HUF</h3>
    </div>
  );
};

export default CartCard;
