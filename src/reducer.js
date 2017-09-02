import { SET_LOCATION, RECEIVE_TRASH_COORDINATES } from './actions';

const initialState = { location: null, trashCoordinates: [] };

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return { ...state, location: action.location };
    case RECEIVE_TRASH_COORDINATES:
      return { ...state, trashCoordinates: action.trashCoordinates };
    default:
      return state;
  }
}
