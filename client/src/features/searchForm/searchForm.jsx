import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToResults } from '../results/resultsSlice.js';


const searchForm= (props) => {
    const dispatch = useDispatch();


    const tennisLocations = {
        name: 'dummy',
        address: 'dummy road',
        rating: 4.4
    }



    let onHandleSearch = () => dispatch( 
        addToResults({
            name: tennisLocations.name,
            address: tennisLocations.address,
            rating: 4.4
        })
    );

    return (
        <div id="searchForm">
            <input></input>
            <button onClick= {onHandleSearch}>Search</button>
        </div>
    );
}

export default searchForm;