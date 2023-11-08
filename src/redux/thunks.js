import { createAsyncThunk } from "@reduxjs/toolkit"
import { deleteContact, fetchContacts } from "./functionsAxios"
import { addContact } from "./contactsSlice"


export const getContactsThunk = createAsyncThunk('contacts/get', fetchContacts())

export const addContactThunk = createAsyncThunk('contacts/create', addContact(data))
export const removeContactThunk = createAsyncThunk('contacts/delete', deleteContact(id))