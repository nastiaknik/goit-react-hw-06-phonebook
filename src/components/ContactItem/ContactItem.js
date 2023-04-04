import PropTypes from 'prop-types';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoIosCall } from 'react-icons/io';
import { BsStar } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { getInitials } from '../../utils/getInitials';
import { getRandomColor } from '../../utils/getRandomColor';
import {
  TableRow,
  Avatar,
  NameCeil,
  NumberCeil,
  ActionCeil,
  Button,
  Link,
} from './ContactItem.styled';

export const ContactItem = ({ contacts, onDelete, onFavorite, favourites }) => {
  return contacts.map(contact => {
    return (
      <TableRow key={contact.id}>
        <NameCeil>
          <Avatar style={getRandomColor()}>{getInitials(contact.name)}</Avatar>
          {contact.name}
        </NameCeil>
        <NumberCeil>{contact.number}</NumberCeil>
        <ActionCeil>
          <Button type="button" onClick={() => onFavorite(contact)}>
            {favourites.some(fav => fav.id === contact.id) ? (
              <BsStarFill size={24} color="#ffd800" />
            ) : (
              <BsStar size={24} color="#ffd800" />
            )}
          </Button>

          <Link href={`tel: ${contact.number}`}>
            <IoIosCall size={24} color="green" />
          </Link>
          <Button
            type="button"
            onClick={() => {
              onDelete(contact);
            }}
          >
            <RiDeleteBinLine size={24} color="red" />
          </Button>
        </ActionCeil>
      </TableRow>
    );
  });
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
  favourites: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
