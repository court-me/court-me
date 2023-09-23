import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../features/favoritesContainer/favoritesSlice'
import leastFavoritesReducer from '../features/leastFavoritesContainer/leastFavoritesSlice'
import mapReducer from '../features/map/mapSlice'
import resultsReducer from '../features/results/resultsSlice'

export const store = configureStore({
  reducer: {
    map: mapReducer,
    favorites: favoritesReducer,
    leastFavorites: leastFavoritesReducer,
    results: resultsReducer
  },
})