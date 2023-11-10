import { createSlice } from '@reduxjs/toolkit';
// import { InitialState } from './initialState';
const initialState=""
export const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    filterByname: (state, action) => {
   return action.payload;
    },
  },
});

export const { filterByname } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
// const filtersSlice = createSlice({
//   name: "filters",
//   initialState: filtersInitialState,
//   reducers: {
//     setStatusFilter(state, action) {
//       state.status = action.payload;
//     },
//   },
// });