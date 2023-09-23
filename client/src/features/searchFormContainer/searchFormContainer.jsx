import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchForm from '../searchForm/searchForm'

const searchFormContainer = () => {

    return (
        <div id="searchFormContainer">
            <SearchForm />
        </div>
    );
}

export default searchFormContainer;