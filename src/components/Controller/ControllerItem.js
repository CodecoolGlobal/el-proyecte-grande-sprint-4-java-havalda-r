import React from 'react';
import styles from './ControllerItem.module.css';

const ControllerItem = (props) => {
  return (
    <div className={styles.ControllerItem}>
      <button onClick={props.remove}>LESS</button>
      <div>{props.label}</div>
      <button onClick={props.added}>MORE</button>
    </div>
  );
};

export default ControllerItem;
