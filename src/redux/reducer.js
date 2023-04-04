import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, toggleFavorite } from './contactsSlice';
import { setFilter } from './filterSlice';

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
  [toggleFavorite]: (state, action) => {
    console.log(action.payload);
    return state.map(contact => {
      if (contact.id !== action.payload) {
        return contact;
      }
      return { ...contact, favorite: !contact.favorite };
    });
  },
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [setFilter]: (state, action) => {
    return { ...state, filter: action.payload };
  },
});
