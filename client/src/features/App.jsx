import React, { useState, useEffect } from 'react';
import Results from './results/resultsContainer.jsx';
import Favorites from './favoritesContainer/favoritesContainer.jsx';
import LeastFavorites from './leastFavoritesContainer/leastFavoritesContainer.jsx'
import Map from './map/map.jsx'
import SearchFormContainer from './searchFormContainer/searchFormContainer.jsx';


const App = () => {
  return (
  <div id="mainContainer">
    <Map />
    <SearchFormContainer />
    <Results/>
    <Favorites />
    <LeastFavorites />
  </div>
  
)};

export default App;
