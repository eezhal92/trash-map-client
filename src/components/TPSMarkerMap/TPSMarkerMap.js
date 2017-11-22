import React from 'react';
import { compose, withProps, withHandlers } from 'recompose';
import { array, func } from 'prop-types';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

const TPSMarkerMap = props => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: -0.907251, lng: 119.868118 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker.id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
);

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
