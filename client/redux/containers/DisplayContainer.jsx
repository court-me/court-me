import React from 'react';
import Grid from '@mui/material/Grid';
import Header from '../components/Header.jsx';
import Map from '../components/Map.jsx';
import SearchFormContainer from './SearchFormContainer.jsx';
import Results from './ResultsContainer.jsx';


const DisplayContainer = () => {
    return (
        <Grid item xs={12} md={6}>
            
            <Grid container spacing={2}>
            
                <Header/>

                <Map />

                <SearchFormContainer />

                <Results />

            </Grid>

        </Grid>
    );
};

export default DisplayContainer;