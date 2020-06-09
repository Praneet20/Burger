import React from 'react'
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient";

const Burger = (props) => {
    // props.ingredients = {
        //  name:'raman',
        //  rollNum:'2345'
    // }
    console.log('kkkk',props.ingredients)
   let transformedIngredients = Object.keys(props.ingredients)//['name','rollNum']
        .map(igkey => {//igKey = 'salad'
            return [...Array(props.ingredients[igkey])].map((_,i) => {
                return  <BurgerIngredient key={igkey + i} type={igkey} />
            });
        })
        .reduce((arr,el) => {
            return arr.concat(el)
        },[]);
        console.log(transformedIngredients);
      
        if(transformedIngredients.length===0){
            transformedIngredients=<p>Start adding ingrdients!</p>
        }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
}

export default Burger;
