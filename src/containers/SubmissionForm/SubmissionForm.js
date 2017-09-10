import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { object, func } from 'prop-types';

import { setLocation } from 'app/actions/location';
import { addTrashCoordinate } from 'app/actions/trash';

import './SubmissionForm.scss';

class SubmissionForm extends Component {
  propTypes = {
    photo: object,
    onSubmitted: func.isRequired,
    setLocation: func.isRequired,
    addTrashCoordinate: func.isRequired,
  };

  state = {
    location: null,
    submitting: false,
    getLocationError: false,
  };

  componentDidMount() {
    const options = { enableHighAccuracy: true, timeout: 5000 };

    const successCb = (position) => {
      const pos = { lat: position.coords.latitude, lng: position.coords.longitude };

      // eslint-disable-next-line
      console.log('[Location Changed] %s', Date.now(), pos);

      this.props.setLocation(pos);
      this.setState({ location: pos });
    };

    const errorCb = (err) => {
      // eslint-disable-next-line no-alert
      alert('Tidak dapat memantau lokasi Anda');

      this.setState({ getLocationError: true });

      throw err;
    };

    this.positionWatchId = navigator.geolocation.watchPosition(successCb, errorCb, options);
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.positionWatchId);
  }

  submitting = () => {
    this.setState(() => ({ submitting: true }));
  };

  submitted = () => {
    this.setState(() => ({ submitting: false }));
  };

  sendTrashCoordinate = data => fetch(`${process.env.ENDPOINT_BASE_URL}/api/trashes`, {
    method: 'post',
    body: data,
  })
    .then(res => res.json())
    .then((trashCoordinate) => {
      this.props.addTrashCoordinate(trashCoordinate);
    })
    .catch((err) => {
      // eslint-disable-next-line
      console.log(err);
      // eslint-disable-next-line
      alert('Maaf, terjadi kesalahan. Silakan coba beberapa saat lagi');

      throw err;
    });

  submit = (event) => {
    event.preventDefault();
    const { location } = this.state;

    if (!this.props.photo || !location) {
      return;
    }

    const payload = new FormData();

    payload.append('latitude', location.lat);
    payload.append('longitude', location.lng);
    payload.append('photo', this.props.photo);

    this.submitting();

    this.sendTrashCoordinate(payload)
      .then(() => {
        this.submitted();
        this.props.onSubmitted();
      })
      .catch(() => {
        this.submitted();
      });
  };

  render() {
    const { submitting, getLocationError, location } = this.state;

    const retrievingLocation = !getLocationError && !location;
    const failRetrieveLocation = getLocationError && !location;
    const dontAllowSubmit = retrievingLocation || failRetrieveLocation || submitting;

    return (
      <div class="bottom-actions submission-form">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-offset-3 col-sm-6">
              <div>
                {(() => {
                  if (!location) return null;

                  return (
                    <div class="location" style={{ padding: 5, fontSize: 10 }}>
                      Posisi Anda <br />
                      Lat: {location.lat}, Lng: {location.lng}
                    </div>
                  );
                })()}
                <button disabled={dontAllowSubmit} onClick={this.submit} class="btn btn-block btn--ios">
                  {(() => {
                    if (retrievingLocation) {
                      return 'Mengambil Lokasi Anda...';
                    }

                    if (failRetrieveLocation) {
                      return 'Gagal Mengambail Lokasi Anda';
                    }

                    if (submitting) {
                      return 'Sedang Mengirim...';
                    }

                    return 'Kirim Laporan';
                  })()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = ({
  setLocation,
  addTrashCoordinate,
});

export default connect(null, mapDispatchToProps)(SubmissionForm);
