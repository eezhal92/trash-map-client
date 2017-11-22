import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import HeatmapLayer from 'react-google-maps/lib/components/visualization/HeatmapLayer';

const TrashHeatMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={props.zoom}
    defaultCenter={props.center}
    onClick={props.onMapClick}
  >
    <HeatmapLayer
      data={props.trashCoordinates}
    />
  </GoogleMap>
));

export default TrashHeatMap;
