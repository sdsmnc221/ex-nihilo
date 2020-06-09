import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const ARROW_UP = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 12 8">
		<Path
			d="M10.59 8L6 3.42L1.41 8L-1.23266e-07 6.59L6 0.590001L12 6.59L10.59 8Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

ARROW_UP.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

ARROW_UP.defaultProps = {
	width: 12,
	height: 8,
	color: '#FFFFFF',
};

export default ARROW_UP;
