import React from 'react';
import Favorites from './favoritesContainer/favoritesContainer.jsx';
import LeastFavorites from './leastFavoritesContainer/leastFavoritesContainer.jsx'

const App = () => {
  return (
  <div id="mainContainer">
    <Favorites />
    <LeastFavorites />
  </div>
);
};

export default App;
