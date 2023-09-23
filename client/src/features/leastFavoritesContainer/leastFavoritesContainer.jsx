// This component contains a variable amount of "Favorite" components.
// It accesses the data stored in state about favorites, saves that in a variable,
// and passes said data to each child as a prop. 

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeastFavorite from '../leastFavorite/leastFavorite.jsx';

const LeastFavorites = () => {
    const leastFavorites = useSelector((state) => state.leastFavorites);
    // const dispatch = useDispatch();
    const renderedLeastFavorites = leastFavorites.map((leastFavorite, index) => (
        <LeastFavorite key={index} data={leastFavorite}/>
    ))

    return (
        <div id="leastFavoriteContainer">
            <h1>Least Favorite Tennis Courts</h1>
            <div id="leastFavoritesList">
                <ul>
                    {renderedLeastFavorites}
                </ul>
            </div>
        </div>
    );
}

export default LeastFavorites;