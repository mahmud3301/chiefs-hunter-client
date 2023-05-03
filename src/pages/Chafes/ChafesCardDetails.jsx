/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const ChafesCardDetails = () => {
    const cheafs = useLoaderData();
    const [imgLoad, setImgLoad] = useState(false);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImgLoad(true);
        };
        img.src = cheafs.chef_picture;
    }, [cheafs.chef_picture]);

    const handleFavoriteClick = (recipeId) => {
        // Find the recipe by its ID
        const recipe = cheafs.recipes.find((recipe) => recipe.id === recipeId);

        // Update the favorite status of the recipe
        const updatedRecipe = { ...recipe, favorite: true };

        // Update the favoriteRecipes state with the updated recipe
        setFavoriteRecipes([...favoriteRecipes, updatedRecipe]);

        // Show the toast message
        toast.success(`"${recipe.recipe_name}" is now your favorite recipe!`);

        // Disable the button (optional, you can choose to hide it or update the recipe object instead)
        const buttons = document.getElementsByClassName('favorite-button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    };



    return (
        <div>
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                <br />
                <ToastContainer />
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card">
                            <LazyLoadImage
                                src={cheafs.chef_picture}
                                className="card-img-top"
                                loading="lazy"
                                effect="blur"
                                alt="Chef"
                                placeholderSrc={cheafs.blurhash} // Add the blurhash as the placeholder image source
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
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
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Recipe Name</th>
                                        <th>Ingredients</th>
                                        <th>Cooking Method</th>
                                        <th>Rating</th>
                                        <th>Favorite</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cheafs.recipes &&
                                        cheafs.recipes.map((recipe) => (
                                            <tr key={recipe.id}>
                                                <td>{recipe.recipe_name}</td>
                                                <td>{recipe.ingredients.join(', ')}</td>
                                                <td>{recipe.cooking_method}</td>
                                                <td>{recipe.rating}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-outline-success favorite-button"
                                                        onClick={() => handleFavoriteClick(recipe.id)}
                                                        disabled={recipe.favorite} // Disable the button if the recipe is already a favorite
                                                    >
                                                        <MdFavorite />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChafesCardDetails;