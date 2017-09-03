/* eslint-disable no-underscore-dangle */
import React from 'react';
import chunk from 'lodash/chunk';
import { array } from 'prop-types';
import { connect } from 'react-redux';

import { Header, Message, ImageCard } from '../components';

const Report = ({ trashCoordinates }) => (
  <div class="report-page" style={{ paddingTop: 62 }}>
    <Header title="Laporan terbaru" />
    <div class="container">
      {(() => {
        if (!trashCoordinates.length) {
          return (
            <div class="row">
              <div class="col-xs-12">
                <Message text="Belum ada laporan" />
              </div>
            </div>
          );
        }

        const group = chunk(trashCoordinates, 3);

        return (
          <div class="reports">
            {group.map(coordinates => (
              <div class="row" key={`${Date.now}-${Math.random()}`}>
                {coordinates.map(coordinate => (
                  <ImageCard key={coordinate._id} coordinate={coordinate} />
                ))}
              </div>
            ))}
          </div>
        );
      })()}
    </div>
  </div>
);

Report.defaultProps = {
  trashCoordinates: [],
};

Report.propTypes = {
  trashCoordinates: array,
};

const mapStateToProps = state => ({
  trashCoordinates: state.trashCoordinates,
});

export default connect(mapStateToProps)(Report);
