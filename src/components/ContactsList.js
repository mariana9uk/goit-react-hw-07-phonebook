import { useDispatch, useSelector } from 'react-redux';
import { StyledContacts } from './ContactsStyleed';
import { removeContact } from 'redux/contactsSlice';
export const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters);
  const contacts = useSelector(state => state.contacts.contacts);

  const filteredContacts = contacts.filter(contact =>
    contact.text.name.toLowerCase().includes(filter.toLowerCase())
  );

  const contactsListItems = filteredContacts.map(contact => (
    <li key={contact.id}>
      {contact.text.name}:{contact.text.number}
      <button type="button" onClick={() => dispatch(removeContact(contact.id))}>
        Delete
      </button>
    </li>
  ));
  return <StyledContacts>{contactsListItems}</StyledContacts>;
};
