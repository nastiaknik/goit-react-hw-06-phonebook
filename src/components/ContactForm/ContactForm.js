import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from 'redux/contactsSlice';
import {
  InputContainer,
  Button,
  StyledField,
  LabelContainer,
  Form,
  /* ErrorMessage, */
} from './ContactForm.styled';

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
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
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
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  placeholder="Anastasia Knihnitska"
                  value={props.values.name}
                  onChange={props.handleChange}
                />
              </LabelContainer>
              <LabelContainer>
                <label htmlFor="number">Number</label>
                <StyledField
                  id="number"
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  placeholder="+38 000 000 00 00"
                  value={props.values.number}
                  onChange={props.handleChange}
                />
              </LabelContainer>
            </InputContainer>

            <Button type="submit">Add contact</Button>
          </Form>
        );
      }}
    </Formik>
  );
};
