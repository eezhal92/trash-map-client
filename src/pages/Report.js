/* eslint-disable no-underscore-dangle */
import React from 'react';
import chunk from 'lodash/chunk';
import { format } from 'date-fns';
import { array } from 'prop-types';
import { connect } from 'react-redux';

import { Header, Message } from '../components';

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
                  <div key={coordinate._id} class="col-xs-12 col-sm-4">
                    <div class="report-card" style={{ margin: '20px 0', boxShadow: '0 3px 4px rgba(0, 0, 0, .16)', borderRadius: 4 }}>
                      {(() => {
                        const photoUrl = coordinate.photo.url || 'https://unsplash.it/278/181?image=975&blur';

                        return (
                          <img
                            src={photoUrl}
                            alt="Trash report"
                            class="img-responsive"
                            style={{ width: '100%' }}
                          />
                        );
                      })()}
                      <div style={{ padding: '20px 15px', fontSize: 12, color: '#666' }}>
                        {format(new Date(), 'dddd, d MMM YYYY')} Jam {format(new Date(), 'hh:mm')}
                      </div>
                    </div>
                  </div>
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
