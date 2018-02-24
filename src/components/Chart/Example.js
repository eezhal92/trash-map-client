import React from 'react';
import PropTypes from 'prop-types';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  AreaSeries,
  Crosshair,
} from 'react-vis';
import 'react-vis/dist/style.css';

class Example extends React.Component {
  state = {
    crosshairValues: [],
  };

  onMouseLeave = () => this.setState({ crosshairValues: [] });
  onNearestX = (value, { index }) => {
    const values = this.props.data[index];
    this.setState({ crosshairValues: [values, false] });
  };

  render() {
    return (
      <XYPlot
        xType="time"
        width={345}
        height={300}
        onMouseLeave={this.onMouseLeave}
      >
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="X Axis" />
        <YAxis title="Y Axis" />
        <AreaSeries
          getNull={d => d.y !== null}
          onNearestX={this.onNearestX}
          data={this.props.data}
          color="#649ceb"
        />
        <Crosshair values={this.state.crosshairValues} />
      </XYPlot>
    );
  }
}

Example.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Example;
