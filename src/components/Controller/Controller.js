import React from 'react';
import styles from './Controller.module.css';
import ControllerItem from './ControllerItem';

const Controller = () => {
  const controls = [{ label: 'Salad', type: 'salad' }];

  return (
    <div classname={styles.Controller}>
      {controls.map((ctrl) => (
        <ControllerItem key={ctrl.label} label={ctrl.label} />
      ))}
    </div>
  );
};

export default Controller;
