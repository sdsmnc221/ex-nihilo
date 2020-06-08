import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const ARROW_DOWN = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 12 8">
		<Path
			d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

ARROW_DOWN.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

ARROW_DOWN.defaultProps = {
	width: 12,
	height: 8,
	color: '#FFFFFF',
};

export default ARROW_DOWN;
