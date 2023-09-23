import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../features/favorites/favoritesSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
})