import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { Table /* TableHead */ } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete, onFavorite, favourites }) => {
  return (
    <Table>
      {/* <thead>
        <tr>
          <TableHead>Name</TableHead>
          <TableHead>Phone number</TableHead>
          <TableHead>
            {contacts.length}
            <span> {contacts.length === 1 ? 'contact' : 'contacts'}</span>
          </TableHead>
        </tr>
      </thead> */}
      <tbody>
        <ContactItem
          contacts={contacts}
          onDelete={onDelete}
          onFavorite={onFavorite}
          favourites={favourites}
        />
      </tbody>
    </Table>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
  favourites: PropTypes.array.isRequired,
};
