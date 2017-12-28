/* eslint-disable import/prefer-default-export */
import fetch from 'isomorphic-fetch';

import {
  receiveGarbageBins,
  fetchingGarbageBins,
  stopFetchingGarbageBins,
} from './creators';

export const getGarbageBins = () => (dispatch) => {
  dispatch(fetchingGarbageBins());

  return fetch(`${process.env.ENDPOINT_BASE_URL}/api/garbage-bins`)
    .then(res => res.json())
    .then((data) => {
      if (!Array.isArray(data)) {
        return [];
      }

      return data;
    })
    .then((data) => {
      dispatch(receiveGarbageBins(data));
      dispatch(stopFetchingGarbageBins());
    })
    .catch((err) => {
      dispatch(stopFetchingGarbageBins());

      throw err;
    });
};
