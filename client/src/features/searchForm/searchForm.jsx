import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToResults } from '../results/resultsSlice.js';
// import { response } from '../../../../server/server.js';

const searchForm = (props) => {
    const dispatch = useDispatch();

    const dummyResult = {
        name: 'dummy',
        address: 'dummy road',
        city: 'dumb city',
        state: 'dumb york',
        zip: 'dumb',
    }

    let onHandleSearch = () => {
        const inputVal = document.getElementById("inputSearch").value;

        fetch("api/find/", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                zip: 10001
            })
        })
            .then(response => {
                return response.json()
                    .then(response => {
                        console.log('response', response)
                    }
                    )
            })

        return dispatch(
            addToResults({
                name: dummyResult.name,
                address: dummyResult.address,
                city: dummyResult.city,
                state: dummyResult.state,
                zip: dummyResult.zip,
            })
        );
    }
    return (
        <div id="searchForm">
            <input id="inputSearch"></input>
            <button onClick={onHandleSearch}>Search</button>
        </div>
    );
}

export default searchForm;