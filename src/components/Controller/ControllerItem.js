import React from 'react';
import styles from './ControllerItem.module.css';

const ControllerItem = (props) => {
  return (
    <div className={styles.ControllerItem}>
      <button>LESS</button>
      <div>{props.label}</div>
      <button>MORE</button>
    </div>
  );
};

export default ControllerItem;
