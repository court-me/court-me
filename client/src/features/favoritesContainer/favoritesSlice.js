import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
      addToFavorites(state, action) {
        state.push(action.payload)
      }
  },
})

export const { addToFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer
