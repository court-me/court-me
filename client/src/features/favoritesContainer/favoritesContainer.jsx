// This component contains a variable amount of "Favorite" components.
// It accesses the data stored in state about favorites, saves that in a variable,
// and passes said data to each child as a prop. 

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Favorite from '../favorite/favorite.jsx';

const Favorites = () => {
    // console.log(useSelector((state) => console.log(state)))
    const favorites = useSelector((state) => state.favorites);
    // const dispatch = useDispatch();
    const renderedFavorites = favorites.map((favorite, index) => (
        <Favorite key={index} data={favorite}/>
    ))

    return (
        <div id="favoritesContainer">
            <h1>Favorite Tennis Courts</h1>
            <div id="favoritesList">
                <ul>
                    {renderedFavorites}
                </ul>
            </div>
        </div>
    );
}

export default Favorites;