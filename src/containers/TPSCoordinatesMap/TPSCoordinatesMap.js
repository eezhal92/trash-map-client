import React from 'react';
import { connect } from 'react-redux';
import { array, func, bool } from 'prop-types';

import { TPSMarkerMap } from 'app/components';
import { getGarbageBins } from 'app/actions/garbage-bin';

class TPSCoordinatesMap extends React.Component {
  componentDidMount() {
    if (!this.props.isGarbageBinFetched) {
      this.props.getGarbageBins();
    }
  }

  render() {
    return (
      <TPSMarkerMap markers={this.props.garbageBins} />
    );
  }
}

TPSCoordinatesMap.propTypes = {
  garbageBins: array.isRequired,
  isGarbageBinFetched: bool.isRequired,
  getGarbageBins: func.isRequired,
};

const mapStateToProps = state => ({
  garbageBins: state.garbageBin.bins,
  isGarbageBinFetched: state.garbageBin.fetched,
});

const mapDispatchToProps = ({
  getGarbageBins,
});

export default connect(mapStateToProps, mapDispatchToProps)(TPSCoordinatesMap);
