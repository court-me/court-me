import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../features/favoritesContainer/favoritesSlice'
import leastFavoritesReducer from '../features/leastFavoritesContainer/leastFavoritesSlice'
import mapReducer from '../features/map/mapSlice'

export const store = configureStore({
  reducer: {
    map: mapReducer,
    favorites: favoritesReducer,
    leastFavorites: leastFavoritesReducer
  },
})