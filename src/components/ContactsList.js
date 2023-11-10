import { useDispatch, useSelector } from 'react-redux';
import { StyledContacts } from './ContactsStyleed';
import { removeContact } from 'redux/contactsSlice';
import { Filter } from './Filter';
import { deleteContactThunk, getContactsThunk } from 'redux/thunks';
import { useEffect } from 'react';
import { getContacts, getFilters } from 'redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  
  const filtered = useSelector(state=>state.filters);
  console.log(filtered)
  const {isLoading, error} = useSelector(state=>state.contacts);
const items= useSelector(getContacts)
console.log(items)
useEffect(()=>{
  dispatch(getContactsThunk())},
  []
)
  if(!items||items.length===0)
  return
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filtered.toLowerCase())
  );

  const contactsListItems = filteredContacts.map(contact => (
    <li key={contact.id}>
      {contact.name}:{contact.number}
      <button type="button" onClick={() => dispatch(deleteContactThunk)}>
        Delete
      </button>
    </li>
  ));
 
  return(
<div>
  <div>{isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}</div>
   <StyledContacts>
      
      {contactsListItems}</StyledContacts>
      </div>
      )
};
