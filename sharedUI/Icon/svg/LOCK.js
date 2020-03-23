import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const LOCK = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox="0 0 44 57">
    <Path
      d="M37.9167 18.9583H35.2083V13.5417C35.2083 6.06667 29.1417 0 21.6667 0C14.1917 0 8.125 6.06667 8.125 13.5417V18.9583H5.41667C2.4375 18.9583 0 21.3958 0 24.375V51.4583C0 54.4375 2.4375 56.875 5.41667 56.875H37.9167C40.8958 56.875 43.3333 54.4375 43.3333 51.4583V24.375C43.3333 21.3958 40.8958 18.9583 37.9167 18.9583ZM21.6667 43.3333C18.6875 43.3333 16.25 40.8958 16.25 37.9167C16.25 34.9375 18.6875 32.5 21.6667 32.5C24.6458 32.5 27.0833 34.9375 27.0833 37.9167C27.0833 40.8958 24.6458 43.3333 21.6667 43.3333ZM30.0625 18.9583H13.2708V13.5417C13.2708 8.91042 17.0354 5.14583 21.6667 5.14583C26.2979 5.14583 30.0625 8.91042 30.0625 13.5417V18.9583Z"
      stroke="none"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);

LOCK.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

LOCK.defaultProps = {
  width: 44,
  height: 57,
  color: '#000',
};

export default LOCK;
