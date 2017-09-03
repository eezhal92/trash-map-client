/* eslint-disable import/prefer-default-export */
import fetch from 'isomorphic-fetch';

import {
  receiveTrashCoordinates,
  fetchingTrashCoordinates,
  stopFetchingTrashCoordinates,
} from './creators';

export const getTrashCoordinates = () => (dispatch) => {
  dispatch(fetchingTrashCoordinates());

  return fetch(`${process.env.ENDPOINT_BASE_URL}/api/trashes`)
    .then(res => res.json())
    .then((data) => {
      if (!Array.isArray(data)) {
        return [];
      }

      return data;
    })
    .then((data) => {
      dispatch(receiveTrashCoordinates(data));
      dispatch(stopFetchingTrashCoordinates());
    })
    .catch((err) => {
      dispatch(stopFetchingTrashCoordinates());

      throw err;
    });
};
