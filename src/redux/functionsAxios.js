import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://653d4ae8f52310ee6a9a14ef.mockapi.io';

export const fetchContacts = async () => {
  try {
    const responce = await axios.get(`/contacts`);
    return responce.data;
  } catch (error) {
    toast("Error!")
  }
};
export const addContact = async contact => {
  try {
    const responce = await axios.post('/contacts', { contact });
    return responce.data;
  } catch (error) {
    toast("Error!")
  }
};
export const deleteContact = async id => {
  try {
    const responce = await axios.delete(`/contacts/${id}`);
    return responce.data;
  } catch (error) {
   toast("Error!")
  }
};
