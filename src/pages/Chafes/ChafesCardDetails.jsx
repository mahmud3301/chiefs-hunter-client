/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FavoriteButton from './FavoriteButton';
import { Spinner } from 'react-bootstrap';
import Error from '../Error';

const ChafesCardDetails = () => {
    const cheafs = useLoaderData();
    const [imgLoad, setImgLoad] = useState(false);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImgLoad(true);
        };
        img.src = cheafs.chef_picture;
        setLoading(false);
    }, [cheafs.chef_picture]);



    const handleFavoriteClick = (recipeId) => {
        setFavoriteRecipes([...favoriteRecipes, recipeId]);
        toast.success(`Added to favorite recipe!`);
    };

    if (!cheafs) {
        return <div>
            <Error/>
        </div>
    }

    return (
        <div>
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                <br />
                <ToastContainer />
                {loading ? (
                    <div className="text-center">
                        <Spinner animation="border" variant="primary" />
                    </div>
                ) : (
                    <>
                        <div className="row mt-5">
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <div className="card">
                                        <LazyLoadImage
                                            src={cheafs.chef_picture}
                                            className="card-img-top"
                                            loading="lazy"
                                            effect="blur"
                                            alt="Chef"
                                            placeholderSrc={cheafs.blurhash}
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
                                                            <FavoriteButton
                                                                onFavoriteClick={handleFavoriteClick}
                                                                recipe={recipe}
                                                                favoriteRecipes={favoriteRecipes}></FavoriteButton>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ChafesCardDetails;