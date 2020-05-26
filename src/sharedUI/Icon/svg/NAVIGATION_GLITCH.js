import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Rect } from 'react-native-svg';

const NAVIGATION_GLITCH = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 18 18">
		<Rect
			x="1"
			y="1"
			width={width}
			height={height}
			stroke={color}
			strokeWidth={2}
		/>
	</Svg>
);

NAVIGATION_GLITCH.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

NAVIGATION_GLITCH.defaultProps = {
	width: 16,
	height: 16,
	color: '#F5F4FF',
};

export default NAVIGATION_GLITCH;
