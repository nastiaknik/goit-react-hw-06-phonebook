import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';
import { FilterContainer, FilterInput } from './ContactFilter.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <FilterContainer>
      <label htmlFor="filter">
        <FiSearch size={20} />
      </label>
      <FilterInput
        id="filter"
        type="text"
        onChange={event => dispatch(setFilter(event.target.value))}
        value={filter}
        name="filter"
        placeholder="Search contacts"
      />
    </FilterContainer>
  );
};
