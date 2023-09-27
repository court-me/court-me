import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
      addToFavorites(state, action) {
        state.push(action.payload)
      },
      removeFavorite: (state, action) => {
        const index = state.findIndex((leastFavorite) => leastFavorite.id === action.payload.id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
  },
})

export const { addToFavorites, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer
