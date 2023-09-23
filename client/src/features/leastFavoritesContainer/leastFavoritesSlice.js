import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', name: 'Least Favorite Tennis Court 1', address: '123 Side Street', city: 'San Diego', state: 'CA', zip: '81924' },
  { id: '2', name: 'Least Favorite Tennis Court 2', address: '456 Side Street', city: 'San Diego', state: 'CA', zip: '81924' },
  { id: '3', name: 'Least Favorite Tennis Court 3', address: '789 Side Street', city: 'San Diego', state: 'CA', zip: '81924' }
];

export const leastFavoritesSlice = createSlice({
  name: 'leastFavorites',
  initialState,
  reducers: {},
})

export const { /* pertinent reducers */ } = leastFavoritesSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value

export default leastFavoritesSlice.reducer
