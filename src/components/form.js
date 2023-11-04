import { Formik, ErrorMessage } from 'formik';
import {
  StyledForm,
  StyledInput,
  StyledButton,
  ErrorMessageStyled,
} from './formStyled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const validSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
 
const contacts = useSelector(state=>state.contacts.contacts)

  const handleSubmit = (values, formikBag) => {
    const isContactExists = contacts.find(
  
      contact => contact.text.name.toLowerCase() === values.name.toLowerCase()
      
    )
  

    if (isContactExists) {
      alert(`Contact with name '${values.name}' already exists!`);
    } else {
      dispatch(addContact(values));
      formikBag.resetForm();
    }
   
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={validSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <label>
            <h3>Name</h3>
            <StyledInput type="text" name="name" placeholder="Type name" />
            <ErrorMessage component={ErrorMessageStyled} name="name" />
          </label>
          <label>
            <h3>Number</h3>
            <StyledInput type="tel" name="number" placeholder="Type number" />
            <ErrorMessage component={ErrorMessageStyled} name="number" />
          </label>
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </Formik>
    </div>
  );
};
