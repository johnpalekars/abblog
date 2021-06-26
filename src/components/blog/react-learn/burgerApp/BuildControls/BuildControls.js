import React from 'react';
import "./BuildControls.css";
import Buildcontrol from './BuildControl/Buildcontrol';

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
    return (
      <div className="BuildControls">
        {controls.map((ctrl) => (
          <Buildcontrol
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.addIngredient(ctrl.type)}
            removed={() => props.removeIngredient(ctrl.type)}
            disabled = {props.disabled[ctrl.type]} />
        ))}
      </div>
    );
}

export default BuildControls;
