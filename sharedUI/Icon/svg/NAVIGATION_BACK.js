import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const NAVIGATION_BACK = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox="0 0 18 22">
    <Path
      d="M17 19.6603L2 11L17 2.33975L17 19.6603Z"
      stroke={color}
      strokeWidth="2"
    />
  </Svg>
);

NAVIGATION_BACK.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

NAVIGATION_BACK.defaultProps = {
  width: 18,
  height: 22,
  color: '#E8E8E8',
};

export default NAVIGATION_BACK;
