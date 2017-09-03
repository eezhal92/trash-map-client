export const SET_LOCATION = 'SET_LOCATION';
export const ADD_TRASH_COORDINATE = 'ADD_TRASH_COORDINATE';
export const RECEIVE_TRASH_COORDINATES = 'RECEIVE_TRASH_COORDINATES';

export const setLocation = location => ({
  type: SET_LOCATION,
  location,
});

export const receiveTrashCoordinates = trashCoordinates => ({
  type: RECEIVE_TRASH_COORDINATES,
  trashCoordinates,
});

export const addTrashCoordinate = trashCoordinate => ({
  type: ADD_TRASH_COORDINATE,
  trashCoordinate,
});
