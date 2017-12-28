import types from './types';

export const receiveGarbageBins = garbageBins => ({
  type: types.RECEIVE_GARBAGE_BINS,
  garbageBins,
});

export const fetchingGarbageBins = () => ({
  type: types.FETCHING_GARBAGE_BINS,
});

export const stopFetchingGarbageBins = () => ({
  type: types.STOP_FETCHING_GARBAGE_BINS,
});
