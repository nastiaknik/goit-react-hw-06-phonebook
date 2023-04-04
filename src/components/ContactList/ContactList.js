import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { toast } from 'react-toastify';
import { ContactItem } from '../ContactItem/ContactItem';
import { Table, TableHead } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

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
    <Table>
      <thead>
        <tr>
          <TableHead>Name</TableHead>
          <TableHead>Phone number</TableHead>
          <TableHead>
            {contacts.length}
            <span> {contacts.length === 1 ? 'contact' : 'contacts'}</span>
          </TableHead>
        </tr>
      </thead>
      <tbody>
        <ContactItem contacts={handleFilterContact()} />
      </tbody>
    </Table>
  );
};
