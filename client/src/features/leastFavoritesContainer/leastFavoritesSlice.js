import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const leastFavoritesSlice = createSlice({
  name: 'leastFavorites',
  initialState,
  reducers: {
    addToLeastFavorites(state, action) {
      state.push(action.payload)
    }
  },
})

export const { addToLeastFavorites } = leastFavoritesSlice.actions;

export default leastFavoritesSlice.reducer
