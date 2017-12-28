/* eslint-disable no-underscore-dangle */
import React from 'react';
import { compose, withProps, withHandlers } from 'recompose';
import { array, func } from 'prop-types';
import {
  Marker,
  GoogleMap,
  withGoogleMap,
} from 'react-google-maps';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

import { TpsPane } from '../index';

class TPSMarkerMap extends React.Component {
  state = {
    selectedTps: null,
  };

  setSelectedTps = (tps) => {
    this.setState({ selectedTps: tps });
  };

  closeModal = () => {
    this.setState({ selectedTps: null });
  };

  render() {
    const { onMarkerClustererClick, markers } = this.props;
    const { selectedTps } = this.state;

    return (
      <div>
        {(() => {
          if (selectedTps) {
            return (
              <TpsPane
                id={selectedTps._id}
                name={selectedTps.name}
                close={this.closeModal}
              />
            );
          }

          return null;
        })()}
        <GoogleMap
          defaultZoom={13}
          defaultCenter={{ lat: -0.907251, lng: 119.868118 }}
        >
          <MarkerClusterer
            onClick={onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={60}
          >
            {markers.map(marker => (
              <Marker
                key={marker._id}
                onClick={() => {
                  this.setSelectedTps(marker);
                }}
                position={{ lat: marker.latitude, lng: marker.longitude }}
              />
            ))}
          </MarkerClusterer>
        </GoogleMap>
      </div>
    );
  }
}

TPSMarkerMap.propTypes = {
  markers: array.isRequired,
  onMarkerClustererClick: func.isRequired,
};

export default compose(
  withProps({
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '100vh' }} />,
    mapElement: <div style={{ height: '100vh' }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => () => {
      // do something
    },
  }),
  withGoogleMap,
)(TPSMarkerMap);
