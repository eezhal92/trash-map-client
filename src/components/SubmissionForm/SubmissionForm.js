import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import { object, func } from 'prop-types';

import './SubmissionForm.scss';

class SubmissionForm extends Component {
  propTypes = {
    photo: object,
    onSubmitted: func.isRequired,
  };

  state = {
    submitting: false,
  };

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
    .then(() => {
      // Do something ...
    })
    .catch((err) => {
      // eslint-disable-next-line
      alert('Maaf, terjadi kesalahan. Silakan coba beberapa saat lagi');

      throw err;
    });

  submit = (event) => {
    event.preventDefault();
    this.submitting();

    if (!this.props.photo) {
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const payload = new FormData();

      payload.append('latitude', position.coords.latitude);
      payload.append('longitude', position.coords.longitude);
      payload.append('photo', this.props.photo);

      this.sendTrashCoordinate(payload)
        .then(() => {
          this.submitted();
          this.props.onSubmitted();
        })
        .catch(() => {
          this.submitted();
        });
    });
  };

  render() {
    const { submitting } = this.state;

    return (
      <div class="bottom-actions submission-form">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div>
                <button disabled={submitting} onClick={this.submit} class="btn btn-block btn--ios">
                  {submitting ? 'Mengirim...' : 'Kirim Laporan' }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmissionForm;
