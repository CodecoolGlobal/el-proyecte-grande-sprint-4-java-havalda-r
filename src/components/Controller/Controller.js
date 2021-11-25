import React from 'react';
import styles from './Controller.module.css';
import ControllerItem from './ControllerItem';

const Controller = (props) => {
  const controls = [
    { label: 'Jalapeno', type: 'jalapeno' },
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
  ];

  return (
    <div className={styles.Controller}>
      <h1 style={{ textAlign: 'center', width: '100%' }}>Secret recipe</h1>

      {controls.map((ctrl) => (
        <ControllerItem
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.add(ctrl.type)}
          remove={() => props.remove(ctrl.type)}
        />
      ))}
      <div className={styles.center}>
        <h2>Total price: {props.totalPrice} HUF</h2>
        <button onClick={props.openModal}>I want that!</button>
      </div>
    </div>
  );
};

export default Controller;
