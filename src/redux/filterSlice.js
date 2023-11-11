import { createSlice } from '@reduxjs/toolkit';

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