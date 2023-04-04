import { createSlice, nanoid } from '@reduxjs/toolkit';
import { getRandomColor } from '../utils/getRandomColor';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(6),
            favorite: false,
            colors: getRandomColor(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
    toggleFavorite(state, action) {
      for (const contact of state) {
        if (contact.id === action.payload) {
          contact.favorite = !contact.favorite;
          break;
        }
      }
    },
  },
});

export const { addContact, deleteContact, toggleFavorite } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
