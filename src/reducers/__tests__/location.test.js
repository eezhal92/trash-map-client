import { setLocation } from 'app/actions/location';
import location from '../location';

describe('location reducer', () => {
  test('SET_LOCATION', () => {
    const initialState = null;

    expect(location(initialState, setLocation({ lat: 0.1, lng: 0.2 })))
      .toEqual({ lat: 0.1, lng: 0.2 });
  });
});
