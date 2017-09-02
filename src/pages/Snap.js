import { any } from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { SubmissionForm, FileInput, Message } from '../components';

class Snap extends Component {
  constructor(props) {
    super(props);

    const state = { imageDataUrl: null };
    if ('geolocation' in navigator) {
      state.supported = true;
    } else {
      state.supported = false;
    }

    this.state = state;
  }

  componentDidMount() {
    if (this.state.supported) {
      this.listenPhotoInputChange();
    }
  }

  componentWillUnmount() {
    if (this.state.supported) {
      this.fileInput.removeEventListener('change', this.fileInputChangeListener);
    }
  }

  fileInputChangeListener = (e) => {
    const photoFile = e.target.files[0];

    if (!photoFile) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      this.photoFile = photoFile;
      this.setState(() => ({ imageDataUrl: event.target.result }));
    };

    reader.readAsDataURL(photoFile);
  };

  listenPhotoInputChange = () => {
    this.fileInput = document.getElementById('photo-input');

    this.fileInput.addEventListener('change', this.fileInputChangeListener);
  };

  render() {
    const { imageDataUrl, supported } = this.state;
    const imageTaken = !!imageDataUrl;

    if (!supported) {
      return (
        <div class="oops">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <Message
                  text="Tidak dapat berkontribusi"
                  subText="Browser Anda tidak mendukung pengambilan lokasi"
                />
              </div>
            </div>
          </div>
          <div class="bottom-actions">
            <div class="container">
              <div class="row">
                <div class="col-xs-12">
                  <Link to="/" class="btn btn--ios">Kembali ke beranda</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
        <Helmet>
          <title>Ambil Gambar</title>
        </Helmet>
        {(() => {
          if (!imageTaken) {
            return (
              <div class="container">
                <div class="row">
                  <div class="col-xs-12">
                    <Message text="Belum ada gambar dipilih" />
                  </div>
                </div>
              </div>
            );
          }

          return <img alt="trash" src={imageDataUrl} style={{ width: '100%' }} />;
        })()}

        {(() => {
          if (!imageTaken) {
            return (
              <div class="bottom-actions">
                <div class="container">
                  <div class="row">
                    <div class="col-xs-12">
                      <FileInput id="photo-input" />
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <SubmissionForm
              photo={this.photoFile}
              onSubmitted={() => this.props.history.push('/submitted')}
            />
          );
        })()}
      </div>
    );
  }
}

Snap.propTypes = {
  history: any.isRequired,
};

export default Snap;
