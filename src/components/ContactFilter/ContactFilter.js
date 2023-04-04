import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import { FilterContainer, FilterInput } from './ContactFilter.styled';

export const ContactFilter = ({ onFilter, value }) => {
  return (
    <FilterContainer>
      <label htmlFor="filter">
        <FiSearch size={20} />
      </label>
      <FilterInput
        id="filter"
        type="text"
        value={value}
        onChange={onFilter}
        name="filter"
        placeholder="Search contacts"
      />
    </FilterContainer>
  );
};

ContactFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
