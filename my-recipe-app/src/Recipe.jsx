import React from "react";

const Recipe = ({prop1}) => {
    console.log(prop1);
        return ( 
        <div>
            <h1> {prop1.recipe.label} </h1>
            <p>Calories:{prop1.recipe.calories.toFixed(1)}</p>
            <img src={prop1.recipe.image} alt={prop1.recipe.label}/>
            </div>
        );
}
export default Recipe;