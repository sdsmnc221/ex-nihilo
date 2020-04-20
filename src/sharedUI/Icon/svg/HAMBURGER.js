import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const HAMBURGER = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 18 12">
		<Path
			d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

HAMBURGER.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

HAMBURGER.defaultProps = {
	width: 18,
	height: 12,
	color: '#565656',
};

export default HAMBURGER;
