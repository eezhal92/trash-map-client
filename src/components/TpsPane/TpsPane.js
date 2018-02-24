import React from 'react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './TpsPane.scss';

class TpsPane extends React.Component {
  state = {
    temperature: 0,
    elevation: 0,
    humidity: 0,
  };

  componentDidMount() {
    this.socket = io(process.env.ENDPOINT_BASE_URL);

    this.socket.on('garbage-bin-log:added', ({ tpsId, temperature = 0, elevation = 0, humidity = 0 }) => {
      if (tpsId === this.props.id) {
        this.setState({ temperature, elevation, humidity });
      }
    });
  }

  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    const {
      id,
      name,
      close,
    } = this.props;
    const {
      temperature,
      humidity,
      elevation,
    } = this.state;

    return (
      <div class="tps-pane" id={id}>
        <div>
          <button class="btn btn-xs btn-default pull-right" onClick={close}>Tutup</button>
        </div>
        <br />
        <h3>{name}</h3>
        <br />
        <div class="row">
          <div class="col-xs-4">
            <p style={{ color: '#676767' }}>Ketinggian</p>
            <span style={{ fontSize: 20 }}>{elevation} </span><span>cm</span>
          </div>
          <div class="col-xs-4">
            <p style={{ color: '#676767' }}>Suhu</p>
            <span style={{ fontSize: 20 }}>{temperature} </span><span>celcius</span>
          </div>
          <div class="col-xs-4">
            <p style={{ color: '#676767' }}>Kelembapan</p>
            <span style={{ fontSize: 20 }}>{humidity}</span><span>%</span>
          </div>
          <div class="col-xs-12">
            <div style={{ padding: '24px 0' }}>
              <Link to={`/tps/${id}`} className="btn btn--ios btn--outline">Lihat Log</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TpsPane.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

export default TpsPane;
