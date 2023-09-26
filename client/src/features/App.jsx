import React, { useState, useEffect } from 'react';
import Results from './results/resultsContainer.jsx';
import Favorites from './favoritesContainer/favoritesContainer.jsx';
import LeastFavorites from './leastFavoritesContainer/leastFavoritesContainer.jsx'
import Map from './map/map.jsx'
import SearchFormContainer from './searchFormContainer/searchFormContainer.jsx';
import Grid from '@mui/material/Grid';
import '../styles/global.css'
import Header from './header/header.jsx'

const App = () => {
  return (

    <Grid container spacing={3} className="app-background">
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <Header/>
          </Grid>
          <Grid item xs={12}>
            <Map />
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <SearchFormContainer />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Results />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Favorites />
          </Grid>
          <Grid item xs={6}>
            <LeastFavorites />
          </Grid>
        </Grid>
      </Grid>
    </Grid>

)};

export default App;
