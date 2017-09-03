import { combineReducers } from 'redux';

import trash from './trash';
import location from './location';

const rootReducer = combineReducers({
  trash,
  location,
});

export default rootReducer;
