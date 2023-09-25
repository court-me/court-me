// This component represents a single favorited tennis court.
// It is passed data from "Favorites" as a prop.

import React from 'react';

const Favorite = (props) => {
    return (
        <div id="favoriteContainer">
            <h2>{props.data.name}</h2>
            <div id="favorite">
                <ul>
                    <li>{props.data.address}</li>
                    <li>{props.data.rating}</li>
                </ul>
            </div>
        </div>
    );
}

export default Favorite;