import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const HAMBURGER = ({ width, height }) => (
	<Svg width={width} height={height} viewBox="0 0 13 13">
		<Path d="M0.357178 1.25049H12.262" stroke="#CC4141" strokeWidth={1.5} />
		<Path d="M0.357178 6.45996H12.262" stroke="#CC4141" strokeWidth={1.5} />
		<Path d="M0.357178 11.6685H12.262" stroke="#CC4141" strokeWidth={1.5} />
	</Svg>
);

HAMBURGER.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

HAMBURGER.defaultProps = {
	width: 13,
	height: 13,
};

export default HAMBURGER;
