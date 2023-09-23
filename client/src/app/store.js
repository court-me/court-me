import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../features/favoritesContainer/favoritesSlice'
import leastFavoritesReducer from '../features/leastFavoritesContainer/leastFavoritesSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    leastFavorites: leastFavoritesReducer
  },
})