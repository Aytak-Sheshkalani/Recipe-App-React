import React from "react";

const Recipe = ({prop1}) => {
    return ( 
        <div>
            <h1>*{prop1.recipe.label}* </h1>
            <ol><b>Ingredients:</b> {prop1.recipe.ingredients.map(ingredient=> (<p>{ingredient.text}</p>))}</ol>            
            <p><b>Calories:</b> {prop1.recipe.calories.toFixed(1)}</p>
            <img src={prop1.recipe.image} alt={prop1.recipe.label}/>        
        </div>
    );
}

// const Recipe = ({title, calories,image,ingredients}) => {
//     return (
//         <div>
//             <h1>{title}</h1>
//             <p>{calories}</p>
//             <img src={image} alt=""></img>
//             <ol>Ingredients: 
//                 {ingredients.map(ingredient => (
//                     <li>
//                         {ingredient.text}
//                     </li>
//                 ))}
//              </ol>
//         </div>
//     )
// }
export default Recipe;