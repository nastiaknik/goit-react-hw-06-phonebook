import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';
import { toast } from 'react-toastify';
import { BiErrorCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from 'redux/contactsSlice';
import {
  InputContainer,
  Button,
  StyledField,
  LabelContainer,
  Form,
  Error,
} from './ContactForm.styled';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name is too short!')
    .max(30, 'Name is too long!')
    .required('Name is required!')
    .label('Name'),
  number: Yup.string()
    .phone('UA', 'Please provide a valid phone number!')
    .required('Number is required!')
    .label('Number'),
});

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const contact = {
      name: values.name,
      number: values.number,
    };

    const contactExists = contacts.some(item => {
      return item.name === contact.name;
    });
    if (contactExists) {
      toast.warning(
        <p>
          Contact <span style={{ color: 'orange' }}>{contact.name}</span>{' '}
          already exist!
        </p>
      );
      return;
    }
    const numberExists = contacts.some(item => {
      return item.number === contact.number;
    });
    if (numberExists) {
      toast.warning(
        <p>
          Number <span style={{ color: 'orange' }}>{contact.number}</span> is
          already in base!
        </p>
      );
      return;
    }

    dispatch(addContact(contact.name, contact.number));
    toast.success(
      <p>
        Contact <span style={{ color: 'green' }}>{contact.name}</span> added!
      </p>
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {props => {
        return (
          <Form>
            <InputContainer>
              <LabelContainer>
                <label htmlFor="name">Name</label>
                <StyledField
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Anastasia Knihnitska"
                  value={props.values.name}
                  onChange={props.handleChange}
                  className={
                    props.touched.name && props.errors.name ? 'error' : ''
                  }
                />{' '}
                <ErrorMessage name="name">
                  {msg => (
                    <Error>
                      <BiErrorCircle /> {msg}
                    </Error>
                  )}
                </ErrorMessage>
              </LabelContainer>
              <LabelContainer>
                <label htmlFor="number">Number</label>{' '}
                <StyledField
                  id="number"
                  type="tel"
                  name="number"
                  required
                  placeholder="+38 000 000 00 00"
                  value={props.values.number}
                  onChange={props.handleChange}
                  className={
                    props.touched.number && props.errors.number ? 'error' : ''
                  }
                />
                <ErrorMessage name="number">
                  {msg => (
                    <Error>
                      <BiErrorCircle /> {msg}
                    </Error>
                  )}
                </ErrorMessage>
              </LabelContainer>
            </InputContainer>

            <Button type="submit">Add contact</Button>
          </Form>
        );
      }}
    </Formik>
  );
};
