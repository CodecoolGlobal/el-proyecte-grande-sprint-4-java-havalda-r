import React from 'react';
import styles from './ControllerItem.module.css';

const ControllerItem = (props) => {
  return (
    <div className={styles.ControllerItem}>
      <div>{props.label}: </div>
      <div>
        <button onClick={props.remove}>-</button>
        <button onClick={props.added}>+</button>
      </div>
    </div>
  );
};

export default ControllerItem;
