import React from "react";
import "./BuildControls.css";
import Buildcontrol from "./BuildControl/Buildcontrol";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];


const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    width:"600px",
    boxShadow: theme.shadows[5],
  },
}));

const BuildControls = (props) => {

   const ingredientSummary = Object.keys(props.state.ingredients).map(
          (igKey) => {
            return (
              <li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
                {props.state.ingredients[igKey]}
              </li>
            );
          }
  );

    const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

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
          type="button"
          onClick={handleOpen}
          className="OrderButton"
          disabled={!props.purchasable}
        >
          ORDER NOW
        </button>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div>
                <div className="uk-heading-small">
                  <h2 className="">Your Order</h2>
                </div>
                <hr className="uk-divider-icon"></hr>
                <div className="uk-text-primary">
                  Delicious Burger with the following ingredient
                </div>
                <hr></hr>
                <div className="">
                  <ul>{ingredientSummary}</ul>
                </div>
                <hr></hr>
                <div className="">
                  <strong>Total Price : {props.state.totalPrice}</strong>
                  <hr></hr>
                  Continue to Checkout?
                </div>
                <hr></hr>
                <div className="">
                  <button
                    onClick={() => handleClose()}
                    className="uk-button uk-button-danger"
                    type="button"
                  >
                    Cancle
                  </button>
                  <span>&nbsp;&nbsp;</span>
                  <button
                    onClick={() => props.continue()}
                    className="uk-button uk-button-primary"
                    type="button"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    );
};

export default BuildControls;
