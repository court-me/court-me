import React, { useState, useEffect } from 'react';
import Results from './results/resultsContainer.jsx';
import Favorites from './favoritesContainer/favoritesContainer.jsx';
import LeastFavorites from './leastFavoritesContainer/leastFavoritesContainer.jsx'
import Map from './map/map.jsx'


const App = () => {
  return (
  <div id="mainContainer">
    <Map />
    <Results/>
    <Favorites />
    <LeastFavorites />
  </div>
  
)};

export default App;
