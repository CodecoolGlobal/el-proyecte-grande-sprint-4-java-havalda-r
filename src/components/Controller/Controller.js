import React from 'react';
import styles from './Controller.module.css';
import ControllerItem from './ControllerItem';

const Controller = (props) => {
  const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Jalapeno', type: 'salad' },
    { label: 'Cheese', type: 'salad' },
    { label: 'Meat', type: 'salad' },
  ];

  return (
    <div className={styles.Controller}>
      <h1>Secret recipe</h1>

      {controls.map((ctrl) => (
        <ControllerItem
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.add(ctrl.type)}
          remove={() => props.remove(ctrl.type)}
        />
      ))}
      <h2>Total price:</h2>
    </div>
  );
};

export default Controller;
