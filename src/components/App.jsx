import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from 'components/Layout/Layout';
import { Section } from 'components/Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  const [favourites, setFavourites] = useState(
    () => JSON.parse(localStorage.getItem('favourites')) ?? []
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const addContact = contact => {
    if (
      contacts.some(item => {
        return item.name === contact.name;
      })
    ) {
      toast.warning(
        <p>
          Contact <span style={{ color: 'orange' }}>{contact.name}</span>{' '}
          already exist!
        </p>
      );
      return;
    }
    if (
      contacts.some(item => {
        return item.number === contact.number;
      })
    ) {
      toast.warning(
        <p>
          Number <span style={{ color: 'orange' }}>{contact.number}</span> is
          already in base!
        </p>
      );
      return;
    }
    setContacts(prevState => [...prevState, contact]);
    toast.success(
      <p>
        Contact <span style={{ color: 'green' }}>{contact.name}</span> added!
      </p>
    );
  };

  const deleteContact = contact => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contact.id));
    toast.success(
      <p>
        Contact <span style={{ color: 'green' }}>{contact.name}</span> deleted!
      </p>
    );
  };

  const addContactToFav = contact => {
    if (favourites.some(fav => fav.id === contact.id)) {
      setFavourites(prevState =>
        prevState.filter(({ id }) => id !== contact.id)
      );
      toast.success(
        <p>
          Contact <span style={{ color: 'green' }}>{contact.name}</span> removed
          from favourites!
        </p>
      );
      return;
    }
    setFavourites(prevState => [
      ...prevState.filter(({ id }) => id !== contact.id),
      contact,
    ]);
    toast.success(
      <p>
        Contact <span style={{ color: 'green' }}>{contact.name}</span> added to
        favourites!
      </p>
    );
  };

  const handleSetFilterValue = ({ target: { value } }) => {
    setFilter(value);
  };

  const handleFilterContact = () => {
    if (
      contacts.filter(contact => {
        return (
          contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
          contact.number.includes(filter.trim())
        );
      }).length === 0
    ) {
      toast.error('Sorry, there are no contact matching your search :(', {
        toastId: 'dont-duplicate-pls',
      });
    }

    return contacts
      .filter(contact => {
        return (
          contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
          contact.number.includes(filter.trim())
        );
      })
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      );
  };

  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <ContactFilter value={filter} onFilter={handleSetFilterValue} />
          <ContactList
            contacts={handleFilterContact()}
            onDelete={deleteContact}
            onFavorite={addContactToFav}
            favourites={favourites}
          />
        </Section>
      )}
      <ToastContainer newestOnTop={true} limit={5} autoClose={3000} />
    </Layout>
  );
};
