import React from 'react';
import PropTypes from 'prop-types';

import './TpsPane.scss';

const TpsPane = ({
  id,
  name,
  close,
}) => (
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
        <span style={{ fontSize: 20 }}>200 </span><span>cm</span>
      </div>
      <div class="col-xs-4">
        <p style={{ color: '#676767' }}>Suhu</p>
        <span style={{ fontSize: 20 }}>18 </span><span>celcius</span>
      </div>
      <div class="col-xs-4">
        <p style={{ color: '#676767' }}>Kelembapan</p>
        <span style={{ fontSize: 20 }}>3</span><span>%</span>
      </div>
      <div class="col-xs-12">
        <div style={{ padding: '24px 0' }}>
          <button class="btn btn--ios btn--outline">Lihat Log</button>
        </div>
      </div>
    </div>
  </div>
);

TpsPane.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

export default TpsPane;
