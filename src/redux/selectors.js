export const getContacts = state => state.contacts;

export const getFilter = state => state.filter.value;

export const getFavorites = state =>
  state.contacts?.filter(contact => contact.favorite);
