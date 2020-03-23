import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Rect } from 'react-native-svg';

const NAVIGATION_APP = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox="0 0 20 20">
    <Rect
      x="1"
      y="1"
      width="18"
      height="18"
      stroke={color}
      strokeWidth="2"
    />
  </Svg>
);

NAVIGATION_APP.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

NAVIGATION_APP.defaultProps = {
  width: 20,
  height: 20,
  color: '#E8E8E8',
};

export default NAVIGATION_APP;
