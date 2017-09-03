/* global google */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { any, object, array, func, oneOfType, bool } from 'prop-types';

import { setLocation } from 'app/actions/location';
import { TrashHeatMap, Message } from 'app/components';
import { getTrashCoordinates } from 'app/actions/trash';

class TrashCoordinatesMap extends Component {
  constructor(props) {
    super(props);
    const state = {
      getLocationError: false,
    };

    if ('geolocation' in navigator) {
      state.supported = true;
    } else {
      state.supported = false;
    }

    this.state = state;
  }

  componentDidMount() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const successCb = (position) => {
      const pos = { lat: position.coords.latitude, lng: position.coords.longitude };

      this.props.setLocation(pos);
    };

    const errorCb = (err) => {
      // eslint-disable-next-line
      alert('Tidak dapat mengambil lokasi Anda sekarang');
      const pos = { lat: -1.929859, lng: 119.814795 }; // default location

      this.setState(() => ({ getLocationError: true }));
      this.props.setLocation(pos);

      throw err;
    };

    navigator.geolocation.getCurrentPosition(successCb, errorCb, options);

    if (!this.props.trashCoordinatesFetched) {
      this.props.getTrashCoordinates();
    }
  }

  reload = () => window.location.reload();

  render() {
    const { getLocationError, supported } = this.state;
    const zoom = getLocationError ? 5 : 13;

    const { location } = this.props;
    const trashCoordinates = this.props.trashCoordinates.map(coordinate => (
      new google.maps.LatLng(coordinate.latitude, coordinate.longitude)
    ));

    return (
      <div class="trash-coordinates-map">
        {(() => { // eslint-disable-line
          if (!location) {
            const subText = supported
              ? 'Jika aplikasi tidak dapat mengambil lokasi Anda, Coba muat halaman ini kembali'
              : 'Browser Anda tidak mendukung pengambilan lokasi';

            return (
              <Message
                text="Memuat peta..."
                subText={subText}
              />
            );
          }

          return (
            <TrashHeatMap
              containerElement={<div style={{ height: '100vh' }} />}
              mapElement={<div style={{ height: '100vh' }} />}
              zoom={zoom}
              trashCoordinates={trashCoordinates}
              center={location}
              onMapLoad={() => {}}
              onMapClick={() => {}}
              onMarkerRightClick={() => {}}
            />
          );
        })()}
      </div>
    );
  }
}

TrashCoordinatesMap.defaultProps = {
  location: null,
};

TrashCoordinatesMap.propTypes = {
  setLocation: func.isRequired,
  location: oneOfType([any, object]),
  trashCoordinates: array.isRequired,
  getTrashCoordinates: func.isRequired,
  trashCoordinatesFetched: bool.isRequired,
};

const mapStateToProps = state => ({
  location: state.location,
  trashCoordinatesFetched: state.trash.fetched,
  trashCoordinates: state.trash.coordinates,
});

const mapDispatchToProps = ({
  setLocation,
  getTrashCoordinates,
});

export default connect(mapStateToProps, mapDispatchToProps)(TrashCoordinatesMap);
