import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngrediant/BurgerIngrediant';

const burger = ( props ) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
           return <BurgerIngredient key={igKey + i} type={igKey} />
        }); //Transforming Key value pair into an array.
    })
    .reduce((arr, el) => {//to check an empty array or if no ingredients
        return arr.concat(el) 
    }, []);
   
    //Above code is to check array size is empty or not.
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients !!</p>
    }


    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
             {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>

    );
}

export default burger;