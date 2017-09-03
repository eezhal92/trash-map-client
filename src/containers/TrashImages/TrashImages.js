/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import chunk from 'lodash/chunk';
import { connect } from 'react-redux';
import { array, bool, func } from 'prop-types';

import { Message, ImageCard } from 'app/components';
import { getTrashCoordinates } from 'app/actions/trash';

class TrashImages extends Component {
  componentDidMount() {
    if (!this.props.fetched) {
      this.props.getTrashCoordinates();
    }
  }

  render() {
    const { trashCoordinates, fetched, fetching } = this.props;

    if (fetching) {
      return (
        <div class="row">
          <div class="col-xs-12">
            <Message text="Memuat..." />
          </div>
        </div>
      );
    }

    if (fetched && !trashCoordinates.length) {
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
  }
}

TrashImages.defaultProps = {
  trashCoordinates: [],
};

TrashImages.propTypes = {
  trashCoordinates: array,
  fetched: bool.isRequired,
  fetching: bool.isRequired,
  getTrashCoordinates: func.isRequired,
};

const mapStateToProps = state => ({
  fetched: state.trash.fetched,
  fetching: state.trash.fetching,
  trashCoordinates: state.trash.coordinates,
});

const mapDispatchToProps = ({
  getTrashCoordinates,
});

export default connect(mapStateToProps, mapDispatchToProps)(TrashImages);
