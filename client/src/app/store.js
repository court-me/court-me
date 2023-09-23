import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../features/favorites/favoritesSlice'
import resultsReducer from '../features/results/resultsSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    results: resultsReducer
  },
})