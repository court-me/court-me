import React from "react";
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../favoritesContainer/favoritesSlice.js';
import { addToLeastFavorites } from '../leastFavoritesContainer/leastFavoritesSlice.js'

const ResultsCard = (props) => {
    const dispatch = useDispatch();

    // const actionAdd = { type: addToFavorites, payload: { /* ... */ } };
    // const actionDislike = { type: addToDislikes, payload: { /* ... */ } };
    let onHandleLike = () => dispatch( 
        addToFavorites({
            name: props.data.name,
            address: props.data.address,
            city: props.data.city,
            state: props.data.state,
            zip: props.data.zip,
        })
    );

    let onHandleDislike = () => dispatch( 
        addToLeastFavorites({
            name: props.data.name,
            address: props.data.address,
            city: props.data.city,
            state: props.data.state,
            zip: props.data.zip,
        })
    );
    return(
        <div id='resultContainer'>
            <h2>{props.data.name}
            <br/>
            <button onClick= {onHandleLike}>Like</button>
            <button onClick= {onHandleDislike}>Dislike</button>
            </h2>
            <div id='results'>
                <ul>
                    <li>{props.data.address}</li>
                    <li>{props.data.city}</li>
                    <li>{props.data.state}</li>
                    <li>{props.data.zip}</li>
                </ul>
            </div>
        </div>
    ); 
};


export default ResultsCard;