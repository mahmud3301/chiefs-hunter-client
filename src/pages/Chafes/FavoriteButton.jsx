/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { MdFavorite } from 'react-icons/md';

const FavoriteButton = ({ recipe, onFavoriteClick }) => {
    const [disabled, setDisabled] = useState(false);

    const handleFavoriteClick = () => {
        setDisabled(true);
        onFavoriteClick(recipe.id);
    };

    return (
        <button
            className="btn btn-outline-success favorite-button"
            onClick={handleFavoriteClick}
            disabled={disabled}
        >
            <MdFavorite />
        </button>
    );
};

export default FavoriteButton;