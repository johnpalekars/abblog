import React from "react";
import "./Burger.css";
import BurgerIngridient from "./BurgerIngridient/BurgerIngridient";

const Burger = (props) => {
  let transformedIngredient = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngridient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
    console.log(transformedIngredient);
    
    if (transformedIngredient.length === 0) {
        transformedIngredient = <p>Please Start adding ingredients!</p>
    }
  return (
    <div className="Burger">
      <BurgerIngridient type="bread-top" />
      {transformedIngredient}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default Burger;
