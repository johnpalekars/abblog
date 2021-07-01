import { React, Component, Fragment } from "react";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";

import { useHistory } from "react-router-dom";

const BurgerApp = () => {
    
    let history = useHistory();
    
        return (
          <Fragment>
            <div
              style={{
                paddingRight: "100px",
                width: "100%",
                height: "50px",
              }}
            >
              <button
                className=" uk-button uk-button-danger uk-button-large"
                style={{
                  float: "right",
                  borderRadius: "50px",
                }}
                onClick={() => history.goBack()}
              >
                Back
              </button>
            </div>
            <hr className="uk-divider-icon"></hr>
            <div
              style={{
                padding: "0px 100px 0px 100px",
                width: "100%",
              }}
            >
              <BurgerBuilder />
            </div>
          </Fragment>
        );
}

export default BurgerApp;