import { types } from '../actions/location';

const initialState = null;

export default function location(state = initialState, action) {
  switch (action.type) {
    case types.SET_LOCATION:
      return action.location;
    default:
      return state;
  }
}
