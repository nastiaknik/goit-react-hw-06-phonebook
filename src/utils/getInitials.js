export const getInitials = contactName => {
  return contactName
    .split(' ')
    .map(name => name.slice(0, 1).toUpperCase())
    .slice(0, 2)
    .join('');
};
