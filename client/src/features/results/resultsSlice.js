import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', name: 'Tennis Court 1', address: '123 Sesame Street', city: 'New York', state: 'NY', zip: '10001' },
    { id: '2', name: 'Tennis Court 2', address: '456 Sesame Street', city: 'New York', state: 'NY', zip: '10001' },
    { id: '3', name: 'Tennis Court 3', address: '789 Sesame Street', city: 'New York', state: 'NY', zip: '10001' }
  ];

  export const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {},
  })

  export const {  } = resultsSlice.actions;



  export default resultsSlice.reducer;
