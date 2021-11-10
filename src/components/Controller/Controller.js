import React from 'react';
import styles from './Controller.module.css';
import ControllerItem from './ControllerItem';

const Controller = (props) => {
  const controls = [{ label: 'Salad', type: 'salad' }];

  return (
    <div className={styles.Controller}>
      {controls.map((ctrl) => (
        <ControllerItem
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.add(ctrl.type)}
        />
      ))}
    </div>
  );
};

export default Controller;
