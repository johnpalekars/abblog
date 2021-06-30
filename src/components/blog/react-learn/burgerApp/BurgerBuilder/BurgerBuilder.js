import React, { Fragment, Component } from "react";
import Burger from "../Burger/Burger";
import "./BurgerBuilder.css";
import BuildControls from "../BuildControls/BuildControls";
import instance from "../../../../../axios";

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
    purchasable: false,
  };


  purchaseContinueHandler = () => {
    console.log("purchasecontinue")
    const order = {
      ...this.state.ingredients,
      customer: 2,
      price: this.state.totalPrice,
      deliverymethod: "fastest",
    };

    instance
      .post("api/order/",order)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });


    
  }


  updatePurchaseState = (updatedIngredients) => {
    const sum = Object.keys(updatedIngredients)
      .map((igKey) => {
        return updatedIngredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
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
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    let oldCount = this.state.ingredients[type];
    if (oldCount === 0) {
      console.log("No ingredients");
    } else {
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
      this.updatePurchaseState(updatedIngredients);
    }
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
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
          continue={this.purchaseContinueHandler}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
          state={this.state}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
