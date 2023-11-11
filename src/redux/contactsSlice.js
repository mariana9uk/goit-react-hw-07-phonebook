import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './thunks';
const InitialState = {
  items: [],
  isLoading: false,
  error: null,
};
const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};
const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(el => el.id !== action.payload.id);
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: InitialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(
          getContactsThunk.pending,
          addContactThunk.pending,
          deleteContactThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          addContactThunk.rejected,
          deleteContactThunk.rejected
        ),
        handleRejected
      );
  },
});
export const contactsReducer = contactsSlice.reducer;
