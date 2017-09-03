import { SET_LOCATION, ADD_TRASH_COORDINATE, RECEIVE_TRASH_COORDINATES } from './actions';

const initialState = { location: null, trashCoordinates: [] };

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return { ...state, location: action.location };
    case ADD_TRASH_COORDINATE:
      return { ...state, trashCoordinates: state.trashCoordinates.concat(action.trashCoordinate) };
    case RECEIVE_TRASH_COORDINATES:
      return { ...state, trashCoordinates: action.trashCoordinates };
    default:
      return state;
  }
}
