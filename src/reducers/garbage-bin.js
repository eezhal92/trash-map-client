import { types } from '../actions/garbage-bin';

const initialState = {
  fetched: false,
  fetching: false,
  bins: [],
};

export default function garbageBin(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_GARBAGE_BINS:
      return { ...state, bins: action.garbageBins, fetched: true };
    case types.FETCHING_GARBAGE_BINS:
      return { ...state, fetching: true };
    case types.STOP_FETCHING_GARBAGE_BINS:
      return { ...state, fetching: false };
    default:
      return state;
  }
}
