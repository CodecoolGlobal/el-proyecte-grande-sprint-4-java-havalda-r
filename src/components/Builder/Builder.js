import React from 'react';
import Sandwich from '../Sandwich/Sandwich';
import styles from './Builder.module.css';

const Builder = () => {
  return (
    <div className={styles.Builder}>
      <h1>BUILDER</h1>
      <div className={styles.container}>
        <div className={styles.control}>CONTROLS</div>
        <Sandwich />
      </div>
      <h2>TOTAL PRICE</h2>
    </div>
  );
};

export default Builder;
