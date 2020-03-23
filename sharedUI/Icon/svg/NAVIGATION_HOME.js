import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Circle } from 'react-native-svg';

const NAVIGATION_HOME = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox="0 0 20 20">
    <Circle
      cx="10"
      cy="10"
      r="9"
      stroke={color}
      strokeWidth="2"
    />
  </Svg>
);

NAVIGATION_HOME.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

NAVIGATION_HOME.defaultProps = {
  width: 20,
  height: 20,
  color: '#E8E8E8',
};

export default NAVIGATION_HOME;