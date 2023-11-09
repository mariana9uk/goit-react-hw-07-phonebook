import { createSlice, isAnyOf, nanoid } from '@reduxjs/toolkit';
import { addContactThunk, deleteContactThunk, getContactsThunk } from './thunks';
// import { InitialState } from './initialState';

const handlePending = (state, action) => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = action.payload;
};
const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts.push(action.payload)
};
const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts.filter(contact=>contact.id!==action.payload.id)
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const InitialState ={
  items: [],
  isLoading: false,
  error: null,
}
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: InitialState,
  extraReducers: builder => {
    builder
      // .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      // .addCase(getContactsThunk.rejected, handleRejected)
      // .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      // .addCase(addContactThunk.rejected, handleRejected)
      // .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      // .addCase(deleteContactThunk.rejected, handleRejected)
      .addMatcher(isAnyOf(getContactsThunk.pending, addContactThunk.pending, deleteContactThunk.pending), handlePending )
      .addMatcher(isAnyOf(getContactsThunk.rejected, addContactThunk.rejected, deleteContactThunk.rejected), handleRejected)
      
    // [](state) {
    //   state.isLoading = true;
    // },
    // [getContactsThunk.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.contacts = action.payload;
    //   state.error = null;
    // },
    // [getContactsThunk.rejected](state, action) {
    //   state.error = action.payload;
    //   state.isLoading = false;
    // },
  },

  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.contacts.push(action.payload);
  //     },
  //     prepare(text) {
  //       return {
  //         payload: {
  //           text,
  //           id: nanoid(),
  //         },
  //       };
  //     },
  //   },
  //   removeContact: {
  //     reducer(state, action) {
  //       const { id } = action.payload;
  //       state.contacts = state.contacts.filter(contact => contact.id !== id);
  //     },
  //     prepare(id) {
  //       return {
  //         payload: {
  //           id,
  //         },
  //       };
  //     },
  //   },
  // },
});

// export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
