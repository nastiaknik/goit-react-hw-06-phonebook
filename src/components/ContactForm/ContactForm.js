import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import {
  InputContainer,
  Button,
  StyledField,
  LabelContainer,
  Form,
  /* ErrorMessage, */
} from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    const contact = {
      id: nanoid(6),
      ...values,
    };
    onSubmit(contact);
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
