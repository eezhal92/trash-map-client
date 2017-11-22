import React from 'react';
import fetch from 'isomorphic-fetch';
import { TPSMarkerMap } from 'app/components';

export default class TPSCoordinatesMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markers: [] };
  }

  componentDidMount() {
    const url = [
      // Length issue
      'https://gist.githubusercontent.com',
      '/farrrr/dfda7dd7fccfec5474d3',
      '/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json',
    ].join('');

    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.setState({ markers: data.photos });
      });
  }

  render() {
    return (
      <TPSMarkerMap markers={this.state.markers} />
    );
  }
}
