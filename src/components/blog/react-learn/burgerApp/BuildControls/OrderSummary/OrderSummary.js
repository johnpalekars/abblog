import React from 'react'


const OrderSummary = (props) => {
        const ingredientSummary = Object.keys(props.state.ingredients).map(
          (igKey) => {
            return (
              <li>
                <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
                {props.state.ingredients[igKey]}
              </li>
            );
          }
        );
    return (
        <div id="OrderSummary" data-uk-modal>
          <div className="uk-modal-dialog">
            <div className="uk-modal-header">
              <h2 className="uk-modal-title">Your Order</h2>
            </div>
            <div className="uk-modal-body">
              Delicious Burger with the following ingredient
            </div>
            <div className="uk-modal-body">
              <ul>{ingredientSummary}</ul>
            </div>
            <div className="uk-modal-body">
              <strong>Total Price : {props.state.totalPrice}</strong>
              <br />
              <br />
              Continue to Checkout?
            </div>
            <div className="uk-modal-footer uk-text-right">
              <button
                className="uk-button uk-button-default uk-modal-close"
                        type="button"
              >
                Cancel
              </button>
              <button className="uk-button uk-button-primary" type="button">
                Continue
              </button>
            </div>
          </div>
        </div>
    );
}

export default OrderSummary
