import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from 'components/Layout/Layout';
import { Section } from 'components/Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <ContactFilter />
          <ContactList />
        </Section>
      )}
      <ToastContainer newestOnTop={true} autoClose={3000} />
    </Layout>
  );
};
