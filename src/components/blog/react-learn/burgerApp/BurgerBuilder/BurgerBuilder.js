import React, { Fragment, Component } from "react";
import Burger from "../Burger/Burger";
import "./BurgerBuilder.css";
import BuildControls from "../BuildControls/BuildControls";
   


const INGREDIENT_PRICE = {
      salad: 30,
      bacon: 50,
      meat: 100,
      cheese: 50,
};
    

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
    totalPrice: 100,
  };

  addIngredientHandler = (type) => {
    let oldCount = this.state.ingredients[type];
    let updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    let oldPrice = this.state.totalPrice;
    let updatedPrice = oldPrice + INGREDIENT_PRICE[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
  };

  removeIngredientHandler = (type) => {
      let oldCount = this.state.ingredients[type];
      if (oldCount === 0) {
          console.log("No ingredients")
      }
      else {
          let updatedCount = oldCount - 1;
          const updatedIngredients = {
              ...this.state.ingredients,
          };
          updatedIngredients[type] = updatedCount;

          let oldPrice = this.state.totalPrice;
          let updatedPrice = oldPrice - INGREDIENT_PRICE[type];
          this.setState({
              ingredients: updatedIngredients,
              totalPrice: updatedPrice,
          });
      }
  };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
    return (
      <Fragment>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>

        <BuildControls
          addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}
                disabled = {disabledInfo}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
