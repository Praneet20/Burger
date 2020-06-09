import React, { Component } from 'react';
import Aux from "../HighOrderComponent/Aux";
import Burger from "../Components/Burger/Burger";
import BuildControls from '../Components/Burger/BuildControl/BuildCotrols';

const Ingredient_Price = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.4,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 5
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = Ingredient_Price[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState(
            {
                totalPrice: newPrice,
                ingredients: updatedIngredients
            }
        );
    }

    removeIngredientHandler = (type) => {

    }


    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded={this.addIngredientHandler} />
            </Aux>
        )
    }
}

export default BurgerBuilder;
