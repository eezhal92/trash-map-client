import { combineReducers } from 'redux';

import trash from './trash';
import location from './location';
import garbageBin from './garbage-bin';

const rootReducer = combineReducers({
  trash,
  location,
  garbageBin,
});

export default rootReducer;
