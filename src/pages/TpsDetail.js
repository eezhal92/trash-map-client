import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import { Helmet } from 'react-helmet';
import { getTime } from 'date-fns';

import { Header, ExampleChart } from '../components';

const MSEC_HOURLY = 3600000;
/* eslint-disable */
const timestamp = new Date('September 9 2017').getTime();
const DATA = [
  { x: timestamp + MSEC_HOURLY, y: 10 },
  { x: timestamp + MSEC_HOURLY * 2, y: 16 },
  { x: timestamp + MSEC_HOURLY * 3, y: 20 },
  { x: timestamp + MSEC_HOURLY * 4, y: 22 },
  { x: timestamp + MSEC_HOURLY * 5, y: 22 },
  { x: timestamp + MSEC_HOURLY * 6, y: 22 },
  { x: timestamp + MSEC_HOURLY * 7, y: 26 },
  { x: timestamp + MSEC_HOURLY * 8, y: 32 },
];

class TpsDetail extends React.Component {
  state = {
    logs: [],
  };

  componentDidMount() {
    const { match } = this.props;

    fetch(`${process.env.ENDPOINT_BASE_URL}/api/garbage-bins/${match.params.id}/logs`)
      .then(response => response.json())
      .then((data) => {
        this.setState({ logs: data });
      });
  }

  render() {
    const h3Style = {
      fontWeight: 'normal',
      fontSize: 18,
    };

    // const elevations = this.state.logs.map(log => ({
    //   x: getTime(log.createdAt) + MSEC_HOURLY,
    //   y: parseInt(log.elevation, 10),
    // }));

    const temperatures = this.state.logs.map(log => ({
      x: getTime(log.createdAt) + MSEC_HOURLY,
      y: parseInt(log.temperature, 10),
    }));

    const humidities = this.state.logs.map(log => ({
      x: getTime(log.createdAt) + MSEC_HOURLY,
      y: parseInt(log.humidity, 10),
    }));

    return (
      <div class="home-page">
        <Helmet>
          <title>Daftar Log TPS</title>
        </Helmet>
        <Header title="Daftar Log TPS" />
        <div style={{ paddingTop: 62 }}>
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <h2>Palu Smart City</h2>
              </div>
              <div class="col-xs-12 col-sm-4">
                <h3 style={h3Style}>Ketinggian</h3>
                <ExampleChart data={DATA} />
              </div>
              <div class="col-xs-12 col-sm-4">
                <h3 style={h3Style}>Kelembapan</h3>
                <ExampleChart data={humidities} />
              </div>
              <div class="col-xs-12 col-sm-4">
                <h3 style={h3Style}>Suhu</h3>
                <ExampleChart data={temperatures} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TpsDetail.propTypes = {
  match: PropTypes.object.isRequired,
};

export default TpsDetail;
