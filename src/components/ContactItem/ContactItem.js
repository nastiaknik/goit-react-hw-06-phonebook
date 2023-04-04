import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact, toggleFavorite } from 'redux/contactsSlice';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoIosCall } from 'react-icons/io';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { getInitials } from '../../utils/getInitials';
import {
  TableRow,
  Avatar,
  NameCeil,
  NumberCeil,
  ActionCeil,
  Button,
  Link,
} from './ContactItem.styled';

export const ContactItem = ({ contacts }) => {
  const dispatch = useDispatch();

  const onDelete = contact => {
    dispatch(deleteContact(contact));
    toast.success(
      <p>
        Contact <span style={{ color: 'green' }}>{contact.name}</span> deleted!
      </p>
    );
  };

  const onFavorite = contact => {
    if (contact.favorite) {
      dispatch(toggleFavorite(contact.id));
      toast.success(
        <p>
          Contact <span style={{ color: 'green' }}>{contact.name}</span> removed
          from favorites!
        </p>
      );
      return;
    }
    dispatch(toggleFavorite(contact.id));
    toast.success(
      <p>
        Contact <span style={{ color: 'green' }}>{contact.name}</span> added to
        favorites!
      </p>
    );
  };

  return contacts.map(contact => {
    const updatedContact = contacts.find(
      currentContact => currentContact.id === contact.id
    );
    return (
      <TableRow key={contact.id}>
        <NameCeil>
          <Avatar
            style={
              contact.colors || {
                color: 'white',
                backgroundColor: 'green',
              }
            }
          >
            {getInitials(contact.name)}
          </Avatar>
          {contact.name}
        </NameCeil>
        <NumberCeil>{contact.number}</NumberCeil>
        <ActionCeil>
          <Button type="button" onClick={() => onFavorite(contact)}>
            {updatedContact.favorite ? (
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
      favorite: PropTypes.bool.isRequired,
      colors: PropTypes.shape({
        color: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
      }),
    })
  ),
};
