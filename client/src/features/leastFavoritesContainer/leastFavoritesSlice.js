import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const leastFavoritesSlice = createSlice({
  name: 'leastFavorites',
  initialState,
  reducers: {
    addToLeastFavorites(state, action) {
      state.push(action.payload)
    },
    removeLeastFavorite: (state, action) => {
      const index = state.findIndex((leastFavorite) => leastFavorite.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
})

export const { addToLeastFavorites, removeLeastFavorite } = leastFavoritesSlice.actions;

export default leastFavoritesSlice.reducer
