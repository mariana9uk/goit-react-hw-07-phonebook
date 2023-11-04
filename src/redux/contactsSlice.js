import { createSlice, nanoid } from '@reduxjs/toolkit';
const contactsInitialState = { contacts: [] };
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
       

       
          state.contacts.push(action.payload);
        
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },
    removeContact: {
      reducer(state, action) {
        const { id } = action.payload;
        state.contacts = state.contacts.filter(contact => contact.id !== id);
      },
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
