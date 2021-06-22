import React from 'react';

const RecipesItem = (props) =>{
    const {name,image} = props
    return(
        <div className="col-md-3">
            <div className="card">
                <img src={image}  className="food-img img-fluid w-5 mx-auto rounded-circle"></img>
                <div className="card-body">
                    <h5>{name}</h5>                
                </div>
            </div>
        </div>
    );
}
export default RecipesItem;