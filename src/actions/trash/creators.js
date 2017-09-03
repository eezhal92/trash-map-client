import types from './types';

export const setLocation = location => ({
  type: types.SET_LOCATION,
  location,
});

export const receiveTrashCoordinates = trashCoordinates => ({
  type: types.RECEIVE_TRASH_COORDINATES,
  trashCoordinates,
});

export const addTrashCoordinate = trashCoordinate => ({
  type: types.ADD_TRASH_COORDINATE,
  trashCoordinate,
});

export const fetchingTrashCoordinates = () => ({
  type: types.FETCHING_TRASH_COORDINATES,
});

export const stopFetchingTrashCoordinates = () => ({
  type: types.STOP_FETCHING_TRASH_COORDINATES,
});
