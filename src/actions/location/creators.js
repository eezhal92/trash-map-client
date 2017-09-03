/* eslint-disable import/prefer-default-export */
import types from './types';

export const setLocation = location => ({
  type: types.SET_LOCATION,
  location,
});
