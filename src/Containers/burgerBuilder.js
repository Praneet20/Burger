import React, { Component } from 'react';
import Aux from "../HighOrderComponent/Aux";


class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <h1>Burger</h1>
                <div>Build Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;
