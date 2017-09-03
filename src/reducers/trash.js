import { types } from '../actions/trash';

const initialState = {
  fetched: false,
  fetching: false,
  coordinates: [],
};

export default function trash(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TRASH_COORDINATE:
      return { ...state, coordinates: state.trashCoordinates.concat(action.trashCoordinate) };
    case types.RECEIVE_TRASH_COORDINATES:
      return { ...state, coordinates: action.trashCoordinates, fetched: true };
    case types.FETCHING_TRASH_COORDINATES:
      return { ...state, fetching: true };
    case types.STOP_FETCHING_TRASH_COORDINATES:
      return { ...state, fetching: false };
    default:
      return state;
  }
}
