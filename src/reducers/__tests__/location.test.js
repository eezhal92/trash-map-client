import { setLocation } from 'app/actions/location';
import location from '../location';

describe('location reducer', () => {
  describe('SET_LOCATION', () => {
    test('with correct payload', () => {
      const initialState = null;

      expect(location(initialState, setLocation({ lat: 0.1, lng: 0.2 })))
        .toEqual({ lat: 0.1, lng: 0.2 });
    });

    test('not listened action', () => {
      const initialState = null;

      expect(location(initialState, { TYPE: 'NOOP' }))
        .toEqual(null);
    });
  });
});
