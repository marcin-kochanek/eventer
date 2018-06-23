import uuid from 'uuid';

// ADD_EVENT
export const addEvent = (
  {
    title = '', 
    description = '', 
    organiser = '', 
    location = '',
    fee = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EVENT',
  event: {
    id: uuid(),
    title,
    description,
    organiser,
    location,
    fee,
    createdAt
  }
});
// REMOVE_EVENT
export const removeEvent = (id) => ({
  type: 'REMOVE_EVENT',
  id
});
// EDIT_EVENT
export const editEvent = (id, updates) => ({
  type: 'EDIT_EVENT',
  id,
  updates
});