export const SET_LOCATION = 'SET_LOCATION';
export const RECEIVE_TRASH_COORDINATES = 'RECEIVE_TRASH_COORDINATES';

export const setLocation = location => ({
  type: SET_LOCATION,
  location,
});

export const receiveTrashCoordinates = trashCoordinates => ({
  type: RECEIVE_TRASH_COORDINATES,
  trashCoordinates,
});
