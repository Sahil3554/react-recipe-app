import React from 'react';
import RecipesItem from './RecipesItem';
const Recipes = (props) =>{
   const {recipie} = props;

    return(
        <div className="Recipes">
            <h1>All Recipies</h1>
            <div className="row">
            {
            props.recipie.map((recipe,count)=>(
                <RecipesItem
                name={recipe.recipe.label}
                image={recipe.recipe.image}
                key={count}
                />
            ))
            }
            </div>
        </div>
    )
}
export default Recipes;