import React from "react";
import "./BuildControls.css";
import Buildcontrol from "./BuildControl/Buildcontrol";
import OrderSummary from "./OrderSummary/OrderSummary";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {

    return (
      <div className="BuildControls">
        <div>
          Current Price: Rs. <strong>{props.price} </strong>
        </div>
        {controls.map((ctrl) => (
          <Buildcontrol
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.addIngredient(ctrl.type)}
            removed={() => props.removeIngredient(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        ))}
        <button
          className="OrderButton"
          disabled={!props.purchasable}
          data-uk-toggle="target: #OrderSummary"
        >
          ORDER NOW
        </button>
        <div id="OrderSummary"> <OrderSummary state={props.state}/></div>
      </div>
    );
};

export default BuildControls;
