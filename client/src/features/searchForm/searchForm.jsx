import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToResults } from '../results/resultsSlice.js';

const searchForm= (props) => {
    const dispatch = useDispatch();

    const dummyResult = {
        name: 'dummy',
        address: 'dummy road',
        city: 'dumb city',
        state: 'dumb york',
        zip: 'dumb',
    }

    let onHandleSearch = () => dispatch( 
        addToResults({
            name: dummyResult.name,
            address: dummyResult.address,
            city: dummyResult.city,
            state: dummyResult.state,
            zip: dummyResult.zip,
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