import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  
];

  export const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
      addToResults(state, action) {
        state.push(action.payload)
      }
    },
  })

  export const { addToResults } = resultsSlice.actions;

  export default resultsSlice.reducer;
