import React from "react";
import { useSelector } from "react-redux";
import ResultsCard from './resultsCard.jsx'

const Results = () => {

    const results = useSelector((state) => state.results);

    const renderedResults = results.map((result, index) => (
        <ResultsCard key={index} data={result}/>
    ))
    
    return (
    <div id='resultsContainer'>
        <h1>Search Results</h1>
        <div id='resultsList'>
            <ul>
                {renderedResults}
            </ul>
        </div>
    </div>
    )
};


export default Results