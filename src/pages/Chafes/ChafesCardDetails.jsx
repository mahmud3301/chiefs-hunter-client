/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChafesCardDetails = () => {
    const cheafs = useLoaderData();
    console.log(cheafs);
    return (
        <div>
            <div className="container"><br /><br /><br /><br /><br />
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card ">
                            <img src={cheafs.chef_picture} className="card-img-top" alt="Chef" />
                            <div className="card-body">
                                <h5 className="card-title">{cheafs.chef_name}</h5>
                                <p className="card-text">{cheafs.bio}</p>
                                <p>Likes: {cheafs.likes}</p>
                                <p>Number of Recipes: {cheafs.num_of_recipes}</p>
                                <p>Years of Experience: {cheafs.years_of_experience}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h2>Recipes</h2>
                        <div className="card-group">
                            {cheafs.recipes &&
                                cheafs.recipes.map((recipe) => (
                                    <div className="card" key={recipe.id}>
                                        <div className="card-body">
                                            <h5 className="card-title">{recipe.recipe_name}</h5>
                                            <p className="card-text">Ingredients: {recipe.ingredients.join(', ')}</p>
                                            <p className="card-text">Cooking Method: {recipe.cooking_method}</p>
                                            <p className="card-text">Rating: {recipe.rating}</p>
                                            <p className="card-text">Favorite: {recipe.favorite ? 'Yes' : 'No'}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChafesCardDetails;