import React, { useState, useEffect } from 'react';
import Favorites from './favoritesContainer/favoritesContainer.jsx';
import LeastFavorites from './leastFavoritesContainer/leastFavoritesContainer.jsx'
import Map from './map/map.jsx'

const App = () => {
  return (
  <div id="mainContainer">
    <Map />
    <Favorites />
    <LeastFavorites />
  </div>
)};

export default App;
