import React from 'react';
import { TPSMarkerMap } from 'app/components';

const tps = [
  { id: 1, latitude: -0.926737, longitude: 119.903979 },
  { id: 2, latitude: -0.919705, longitude: 119.897713 },
  { id: 3, latitude: -0.919115, longitude: 119.886855 },
];

export default class TPSCoordinatesMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markers: tps };
  }

  render() {
    return (
      <TPSMarkerMap markers={this.state.markers} />
    );
  }
}
