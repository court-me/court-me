import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToResults } from '../results/resultsSlice.js';

// import { response } from '../../../../server/server.js';

const searchForm = (props) => {
    const dispatch = useDispatch();

    let onHandleSearch = () => {
        const inputVal = document.getElementById("inputSearch").value;

        fetch("api/find/", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                "zip": inputVal
            })
        })
            .then(response => {
                return response.json()
                    .then(response => {
                        response.forEach((el) => {
                            dispatch(addToResults({
                                name: el.name,
                                address: el.address,
                                rating: el.rating
                            }))
                        });
                    }
                    )

            })
    }
    return (
        <div id="searchForm">
            <input id="inputSearch"></input>
            <button onClick={onHandleSearch}>Search</button>
        </div>
    );
}

export default searchForm;