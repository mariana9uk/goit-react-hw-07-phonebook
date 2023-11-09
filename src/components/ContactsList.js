import { useDispatch, useSelector } from 'react-redux';
import { StyledContacts } from './ContactsStyleed';
import { removeContact } from 'redux/contactsSlice';
import { Filter } from './Filter';
import { deleteContactThunk, getContactsThunk } from 'redux/thunks';
import { useEffect } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getContactsThunk())},
    [dispatch]
  )
  const filtered = useSelector(state => state.filters);
  const {items, isLoading, error} = useSelector(state => state.contacts);

  if(!items)
  return
  const filteredContacts = items.filter(contact =>
    contact.text.name.toLowerCase().includes(filtered.toLowerCase())
  );

  const contactsListItems = filteredContacts.map(contact => (
    <li key={contact.id}>
      {contact.text.name}:{contact.text.number}
      <button type="button" onClick={(id) => dispatch(deleteContactThunk(id))}>
        Delete
      </button>
    </li>
  ));
 
  return(

   <StyledContacts>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      {contactsListItems}</StyledContacts>)
};
