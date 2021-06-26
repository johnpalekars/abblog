import { React, Component, Fragment } from "react";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";

class BurgerApp extends Component{


    render() {
        return (
            <Fragment>
                <BurgerBuilder/>
            </Fragment>
        );
    }
}

export default BurgerApp;